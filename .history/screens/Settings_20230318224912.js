import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";

const Settings = () => {
  const auth = getAuth();
  const navigation = useNavigation();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user?.displayName ?? "");
        setEmail(user?.email ?? "");
      } else {
        navigation.navigate("SignIn");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 16 }}>
      <Avatar.Text label={user.split(' ').reduce((prev, current) => prev+current[0], "")} size={56} />
      <Title>{user}</Title>
      <Subheading>{email}</Subheading>
      <Button onPress={() => handleSignOut()}>Sign Out</Button>
    </View>
  );
};

export default Settings;
