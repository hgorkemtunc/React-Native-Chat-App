import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

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
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const getChat = async () => {
      const docRef = doc(db, "chats", route.params.id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());

    };

    getChat();

  }, []);

  return <Text>Chat</Text>;
};

export default Chat;
