import React from "react";
import { Text, View } from "react-native";
import { List, Avatar, Divider } from "react-native-paper";

const ChatList = () => {
  return (
    <View>
      <List.Item
        title="Kullanıcı Adı"
        description="Selam, nasılsın?"
        left={() => <Avatar.Text label="KA" size={56} />}
      />
        <Divider inset />
    </View>
  );
};

export default ChatList;
