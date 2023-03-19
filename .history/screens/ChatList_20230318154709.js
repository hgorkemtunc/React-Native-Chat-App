import React from "react";
import { Text, View } from "react-native";
import { List, Avatar, Divider, FAB, Portal, Dialog, Paragraph, Button } from "react-native-paper";

const ChatList = () => {
  return (
    <View style={{flex: 1}}>
      <List.Item
        title="Kullanıcı Adı"
        description="Selam, nasılsın?"
        left={() => <Avatar.Text label="KA" size={56} />}
      />
        <Divider inset />

        <Portal>
            <Dialog visible={true}>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>Dialog Content</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => {}}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>

        <FAB icon="plus" style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }} />
    </View>
  );
};

export default ChatList;
