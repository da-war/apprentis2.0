import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";
import AppLG from "./global/AppLG";

interface AppButtonProps {
  onPress: () => void;
  title: string;
  style?: object;
  titleStyle?: object;
  color?: string;
  gradient?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  style,
  titleStyle,
  color = COLORS.primary,
  gradient = true,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, style, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {gradient && <AppLG />}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 13,
    overflow: "hidden",
    minWidth: "48%",
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
