import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../../constants/GlobalStyles";
import Header from "../../../components/user/home/Header";
import SearchTextInput from "../../../components/user/home/SearchTextInput";
import ChatComponent from "../../../components/user/home/ChatComponent";

const messagesData = [
  {
    id: 1,
    name: "Ayo",
    lastMessage: "Hello",
    time: "10:00 AM",
  },
  {
    id: 2,
    name: "Ahmed",
    lastMessage: "Hello",
    time: "10:00 AM",
  },
  {
    id: 3,
    name: "Dawar",
    lastMessage: "Hello",
    time: "10:00 AM",
  },
  {
    id: 4,
    name: "Huzaifa",
    lastMessage: "Hello",
    time: "10:00 AM",
  },
];

interface Props {
  navigation: any;
}
const Messages: React.FC<Props> = ({}) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState(messagesData);

  const handleSearch = (text) => {
    //search in messages array and match with name and lastMessage
    setSearch(text);
    let filteredData = messagesData.filter((item) => {
      return (
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.lastMessage.toLowerCase().includes(text.toLowerCase())
      );
    });
    setMessages(filteredData);

    //if text is empty then set the original data
    if (text === "") {
      setMessages(messagesData);
    }
  };
  return (
    <View style={GlobalStyles.parentContainer}>
      <Header title="Messages" onPressIcon={() => navigation.goBack()} />
      <View style={GlobalStyles.screenContainer}>
        <SearchTextInput
          style={{}}
          value={search}
          onChangeValue={handleSearch}
        />
        <View>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ChatComponent
                image={{ uri: item.image }}
                name={item.name}
                lastMessage={item.lastMessage}
                time={item.time}
                onPress={() => navigation.navigate("hchat")}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  parentContainer: {},
});
