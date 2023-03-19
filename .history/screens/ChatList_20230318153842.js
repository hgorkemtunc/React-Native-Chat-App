import React from "react";
import {Text, View} from "react-native";
import {List} from "react-native-paper";

const ChatList = () => {
    return (
        <View>
            <List.Item title="Görkem Tunç" description="Selam, seni bekliyordum!"/>
            <List.Item title="Chat 2" />
            <List.Item title="Chat 3" />
            <List.Item title="Chat 4" />
            <List.Item title="Chat 5" />
            <List.Item title="Chat 6" />
            <List.Item title="Chat 7" />
            <List.Item title="Chat 8" />
            <List.Item title="Chat 9" />
            <List.Item title="Chat 10" />
        </View>    
    );
};

export default ChatList;