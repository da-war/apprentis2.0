import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  title: string;
  description: string;
  isUnread: boolean;
}

const Notification: React.FC<Props> = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
