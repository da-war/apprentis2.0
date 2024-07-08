import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";
import GlobalStyles from "../../../constants/GlobalStyles";

interface ChatComponentProps {
  image?: any;
  name?: string;
  lastMessage?: string;
  time?: string;
  unread?: boolean;
  onPress?: () => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({
  image = "https://randomuser.me/api/portraits",
  name = "Mike",
  lastMessage = "hello!!",
  time = "12:00",
  unread = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[GlobalStyles.horizontalSB, styles.main]}
    >
      <View style={GlobalStyles.horizontal}>
        <View style={GlobalStyles.profileImageContainer}>
          <Image
            source={{
              uri: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
            }}
            style={[GlobalStyles.profileImage]}
            contentFit="cover"
          />
        </View>
        <View>
          <Text style={[GlobalStyles.h6, { marginBottom: 5 }]}>{name}</Text>
          <Text style={GlobalStyles.subText}>{lastMessage}</Text>
        </View>
      </View>
      <View>
        <Text style={GlobalStyles.lightGreyText}>{time}</Text>
        {unread && (
          <MaterialCommunityIcons
            name="circle"
            color={COLORS.primary}
            size={24}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({
  main: {
    padding: 12,
  },
});
