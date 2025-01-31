import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants/theme";

interface Props {
  colors: string[];
}

const AppLG: React.FC<Props> = ({
  colors = [COLORS.primary, COLORS.secondary],
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
};

export default AppLG;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
});
