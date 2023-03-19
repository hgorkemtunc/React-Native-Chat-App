import React from "react";
import {Text, View} from "react-native";
import {List, Avatar} from "react-native-paper";

const ChatList = () => {
    return (
        <View>
            <List.Item title="Kullanıcı Adı" description="Selam, nasılsın?" left={() => <Avatar.Text label="KA" size={56}/>}/>
        </View>    
    );
};

export default ChatList;