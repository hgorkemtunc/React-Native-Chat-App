import React from "react";
import { Text, View } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const auth = getAuth();
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.navigate("SignIn");
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 16 }}>
      <Avatar.Text label="UN" size={56} />
      <Title>User Name</Title>
      <Subheading>user@name.com</Subheading>
      <Button onPress={() => handleSignOut()}>Sign Out</Button>
    </View>
  );
};

export default Settings;
