import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../../constants/theme";

interface Props {
  onPress: () => void;
  title: string;
  style?: any;
}

const ProfileButton: React.FC<Props> = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainContainer, style]}>
      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
});
