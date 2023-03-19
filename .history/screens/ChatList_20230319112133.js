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
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB5ZwZSGkRiOwHFzjLfoVd0iLg88tRUXU",
  authDomain: "chatty-dc3c2.firebaseapp.com",
  projectId: "chatty-dc3c2",
  storageBucket: "chatty-dc3c2.appspot.com",
  messagingSenderId: "478687282139",
  appId: "1:478687282139:web:1a8df4125dc07018b65dfe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ChatList = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setEmail(user?.email ?? "");
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const createChat = async () => {
    if (email == "" || userEmail == "") return;
    setIsLoading(true);
    const docRef = await addDoc(collection(db, "chats"), {
      users: [email, userEmail],
    });
    setIsLoading(false);
  };

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
            <TextInput
              label="Enter email"
              value={userEmail}
              onChangeText={(text) => setUserEmail(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setIsDialogVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                createChat();
              }}
            >
              Save
            </Button>
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
