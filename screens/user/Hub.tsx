import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  navigation: any;
}
const Hub: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Hub;
