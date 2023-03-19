import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
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
      const querySnapshot = await getDocs(collection(db, "users/" + route.params.id));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };

  }, []);

  return <Text>Chat</Text>;
};

export default Chat;
