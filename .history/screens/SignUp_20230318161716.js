import React from "react";
import { Text, View } from "react-native";
import {TextInput} from "react-native-paper";

const SignUp = () => {
  return (
    <View style={{ flex: 1, alignItems: "center"}}>
        <Text>SignUp</Text>
        <TextInput label="Username" />
        <TextInput label="Email" />
        <TextInput label="Password" />
    </View>
  )
};

export default SignUp;
