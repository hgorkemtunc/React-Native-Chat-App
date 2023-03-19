import React, {useState} from "react";
import { Text, View } from "react-native";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput
} from "react-native-paper";

const ChatList = () => {

    const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="User Name"
        description="Hello World!"
        left={() => <Avatar.Text label="UN" size={56} />}
      />
      <Divider inset />

      <Portal>
        <Dialog visible={true}>
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput label="Username" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {}}>Cancel</Button>
            <Button onPress={() => {}}>Save</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        icon="plus"
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
      />
    </View>
  );
};

export default ChatList;
