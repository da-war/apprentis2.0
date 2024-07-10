import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import moment from "moment";
import Header from "../../../components/user/home/Header";
import MessageComponent from "../../../components/user/home/MessageComponent";
import GlobalStyles from "../../../constants/GlobalStyles";
import { COLORS } from "../../../constants/theme";

var messages = [
  {
    id: 1,
    message: "Hello",
    time: "2:30 PM",
    isMe: true,
  },
  {
    id: 2,
    message: "Hello",
    time: "2:30 PM",
    isMe: false,
  },
  {
    id: 3,
    message:
      "I need the products by next week, please send them as soon as possible",
    isMe: true,
  },
  {
    id: 4,
    message: "Hello",
    time: "2:30 PM",
    isMe: false,
  },
];

interface Props {
  navigation: any;
}

const Chat: React.FC<Props> = ({ navigation }) => {
  const [message, setMessage] = React.useState("");
  const onPressMessageSend = () => {
    const newMessage = {
      id: 5,
      message: message,
      //time should be current time of the device and in format of 2:30 PM
      //it should be in 12 hours format and detect the time zone of the device
      //don't hard code the time
      //using moment.js is a plus
      //follow the above instructions and format time accordingly using moment.js
      time: moment().format("LT"),
      isMe: true,
    };
    console.log(newMessage);
    messages.push(newMessage);

    setMessage("");
  };

  return (
    <View style={{ flex: 1, paddingTop: 45 }}>
      <Header title="Chat" onPressIcon={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <MessageComponent isMe={item.isMe} message={item.message} />
          )}
        />

        <View style={styles.absoluteTextContainer}>
          <View style={[styles.horizontalInput, GlobalStyles.horizontal]}>
            <TextInput
              style={styles.input}
              placeholder="Your Message"
              onChangeText={(text) => setMessage(text)}
              value={message}
            />
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../../../assets/icons/gal.png")}
            />
          </View>

          <TouchableOpacity onPress={onPressMessageSend}>
            <Image
              resizeMode="contain"
              style={styles.image2}
              source={require("../../../../assets/icons/sendi.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.gray,
    opacity: 0.3,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  absoluteTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.black,
    padding: 10,
    width: Dimensions.get("window").width,
    flexDirection: "row",
  },
  horizontalInput: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 23,
    height: 23,
    marginLeft: 10,
  },
  image2: {
    width: 50,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});
