import React from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignUp = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", margin: 16 }}>
      <TextInput label="Username" style={{ width: "100%" }} />
      <TextInput label="Email" style={{ width: "100%", marginTop: 12 }} />
      <TextInput label="Password" style={{ width: "100%", marginTop: 12 }} />
      <View style={{ flexDirection: "row", width: "100%", marginTop: 16, justifyContent: "space-between" }}>
      <Button mode="contained"> Sign Up </Button>
      <Button compact>Sign In</Button>
    </View>
    </View>
  );
};

export default SignUp;
