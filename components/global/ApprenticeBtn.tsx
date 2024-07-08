import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

interface Props {
  title: string;
  onPress: () => void;
}

const ApprenticeBtn: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
};

export default ApprenticeBtn;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  mainContainer: {
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
