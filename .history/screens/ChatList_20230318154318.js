import React from "react";
import { Text, View } from "react-native";
import { List, Avatar, Divider, FAB } from "react-native-paper";

const ChatList = () => {
  return (
    <View style={{flex: 1}}>
      <List.Item
        title="Kullanıcı Adı"
        description="Selam, nasılsın?"
        left={() => <Avatar.Text label="KA" size={56} />}
      />
        <Divider inset />

        <FAB icon="plus" style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }} />
    </View>
  );
};

export default ChatList;
