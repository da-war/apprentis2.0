import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

interface Props {
  title: string;
  onPressIcon: () => void;
  icon?: any;
}

const AppHeader: React.FC<Props> = ({
  title,
  onPressIcon,
  icon = "chevron-left",
}) => {
  return (
    <View style={[GlobalStyles.horizontal, { gap: 10 }]}>
      <MaterialCommunityIcons
        name={icon}
        size={28}
        color={COLORS.white}
        onPress={onPressIcon}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
