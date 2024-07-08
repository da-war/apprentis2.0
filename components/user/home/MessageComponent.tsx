import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLG from "../../global/AppLG";
import { COLORS } from "../../../constants/theme";

const MessageComponent = ({
  isMe = true,
  message = "Hello this is rana Dawar",
  time = "2:30 PM",
}) => {
  return (
    <View style={isMe ? styles.meContainer : styles.otherContainer}>
      <View style={isMe ? styles.textContainerMe : styles.textContainerOther}>
        <Text style={isMe ? styles.isTextMe : styles.isTextOther}>
          {message}
        </Text>
        {!isMe && <View style={styles.isOtherOnly} />}
        {isMe && <AppLG />}
      </View>
      <Text style={isMe ? styles.timeMe : styles.timeOther}>{time}</Text>
      {isMe && <AppLG />}
    </View>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  meContainer: {
    alignSelf: "flex-end",
    marginVertical: 15,
    overflow: "hidden",
  },
  otherContainer: {
    alignSelf: "flex-start",
  },
  textContainerMe: {
    padding: 11,
    borderRadius: 15,

    width: Dimensions.get("window").width / 1.9,
  },
  textContainerOther: {
    padding: 11,
    borderRadius: 15,
    width: Dimensions.get("window").width / 1.9,
    borderRadius: 15,
    borderEndStartRadius: 0,
  },

  isOtherOnly: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    borderEndStartRadius: 0,
    backgroundColor: COLORS.primary,
    opacity: 0.3,
  },
  isMeOnly: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    borderEndEndRadius: 0,
    backgroundColor: COLORS.gray,
    opacity: 0.3,
  },
  time: {
    marginTop: 10,
  },
  timeMe: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  timeOther: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  isTextMe: {
    color: COLORS.white,
  },
  isTextOther: {
    color: COLORS.black,
  },
});
