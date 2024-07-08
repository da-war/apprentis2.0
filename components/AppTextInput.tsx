import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";
import GlobalStyles from "@/constants/GlobalStyles";

interface AppTextInputProps {
  placeholder?: string;
  color?: string;
  value: string;
  onChangeText: (text: string) => void;
  title: string;
  rightIcon?: any;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  placeholder = "John Doe",
  color = COLORS.bg,
  value,
  onChangeText,
  title = "Email",
  rightIcon,
  ...otherProps
}) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <View style={GlobalStyles.horizontal}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          style={[styles.input, { backgroundColor: color }]}
          value={value}
          onChangeText={onChangeText}
          {...otherProps}
        />
        <MaterialCommunityIcons
          name={rightIcon}
          size={24}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 5,
  },
  input: {
    paddingVertical: Platform.OS === "ios" ? 15 : 10,
    overflow: "hidden",
    borderColor: COLORS.border,
    borderBottomWidth: 1,
    color: COLORS.white,
    flex: 1,
  },
  title: {
    color: COLORS.gray,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    marginBottom: 5,
  },
});
