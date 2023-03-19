import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from "react-native-paper";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB5ZwZSGkRiOwHFzjLfoVd0iLg88tRUXU",
  authDomain: "chatty-dc3c2.firebaseapp.com",
  projectId: "chatty-dc3c2",
  storageBucket: "chatty-dc3c2.appspot.com",
  messagingSenderId: "478687282139",
  appId: "1:478687282139:web:1a8df4125dc07018b65dfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);

const ChatList = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="User Name"
        description="Hello World!"
        left={() => <Avatar.Text label="UN" size={56} />}
        style={{ marginLeft: 12 }}
      />
      <Divider inset />

      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}
        >
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput label="Username" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setIsDialogVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button onPress={() => {}}>Save</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        icon="plus"
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        onPress={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default ChatList;
