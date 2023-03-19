import React from "react";
import { Text, View } from "react-native";
import { Avatar, Title, Subheading, Button} from "react-native-paper";

const Settings = () => {
  return (
    <View style={{ flex: 1, margin: 15 }}>
        <Avatar.Text label="UN" size={56} />
        <Title>User Name</Title>
        <Subheading>user@name.com</Subheading>
    </View>
  );
};

export default Settings;
