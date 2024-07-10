import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  navigation: any;
}
const Messages: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
