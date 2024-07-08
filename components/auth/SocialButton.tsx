import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLORS } from "../../constants/theme";

interface Props {
  image: any;
  style: object;
}

const SocialButton: React.FC<Props> = ({
  style,
  image = require("../../assets/icons/google.png"),
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image contentFit="contain" style={styles.image} source={image} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  image: {
    width: 24,
    height: 24,
  },
});
