import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAB5ZwZSGkRiOwHFzjLfoVd0iLg88tRUXU",
    authDomain: "chatty-dc3c2.firebaseapp.com",
    projectId: "chatty-dc3c2",
    storageBucket: "chatty-dc3c2.appspot.com",
    messagingSenderId: "478687282139",
    appId: "1:478687282139:web:1a8df4125dc07018b65dfe",
  };

  const route = useRoute();
  const chatId = route.params.chatId;
  
  const auth = getAuth();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [messages, setMessages] = useState([]);

  const [uid, setUid] = useState("");
  const [displayName, setDisplayName] = useState("");
  
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUid(user?.uid ?? "");
      setDisplayName(user?.displayName ?? "");
    });
  }, []);

  useEffect(() => {
    return onSnapshot(doc(db, "chats", chatId), (snapshot) => {
      setMessages(snapshot.data()?.messages ?? []);
    });
  }, [chatId]);

  const onSend = async (m = []) => {
    const chatRef = doc(db, "chats", chatId);
    setDoc(chatRef, {messages: GiftedChat.append(messages, m)}, {merge: true});
  };

  return (
    <View style={flex: 1}>
      <GiftedChat
        messages={messages.map((x) => ({
          ...x,
          createdAt: x.createdAt.toDate(),
        }))}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: uid,
          name: displayName,
        }}
      />
    </View>
  );
};

export default Chat;
