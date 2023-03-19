import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

const Chat = () => {
  const route = useRoute();
  console.log(route.params.id);
  return <Text>Chat</Text>;
};

export default Chat;
