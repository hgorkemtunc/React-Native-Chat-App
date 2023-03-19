import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const loginAccount = async () => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        navigation.popToTop();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 16 }}>
      {error ? (
        <Subheading
          style={{ color: "red", textAlign: "center", marginBottom: 16 }}
        >
          {error}
        </Subheading>
      ) : null}
      <TextInput
        label="Email"
        style={{ width: "100%", marginTop: 12 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        keyboardAppearance="dark"
      />
      <TextInput
        label="Password"
        style={{ width: "100%", marginTop: 12 }}
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 16,
          justifyContent: "space-between",
        }}
      >
        <Button
          mode="contained"
          onPress={() => loginAccount()}
          loading={isLoading}
        >
          Sign In
        </Button>
        <Button compact onPress={() => navigation.navigate("SignUp")}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default SignIn;
