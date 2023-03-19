import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 16 }}>
      <TextInput
        label="Name"
        style={{ width: "100%" }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        style={{ width: "100%", marginTop: 12 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        style={{ width: "100%", marginTop: 12 }}
        value={password}
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
        <Button mode="contained">Sign Up</Button>
        <Button compact>Sign In</Button>
      </View>
    </View>
  );
};

export default SignUp;
