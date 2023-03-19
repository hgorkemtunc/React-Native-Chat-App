import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignUp = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 16 }}>
      <TextInput label="Name" style={{ width: "100%" }} onChangeText={text => setName(text)} />
      <TextInput label="Email" style={{ width: "100%", marginTop: 12 }} />
      <TextInput label="Password" style={{ width: "100%", marginTop: 12 }} />
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
