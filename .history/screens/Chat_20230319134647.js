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
  const route = useRoute();
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
