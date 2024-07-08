import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import AppButton from "../AppButton";
import { COLORS, FONTS } from "../../constants/theme";
import AppLG from "../global/AppLG";

interface Props {
  onPressCheck?: () => void;
  onPressChange?: () => void;
  matches?: number;
  description?: string;
}

const MatchBox: React.FC<Props> = ({
  onPressChange,
  onPressCheck,
  matches = 12,
  description = "Check new Jobs, Apprenticeships and Events for you.",
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={GlobalStyles.h3}>{matches} new matches!</Text>
      <View style={styles.line} />
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Check Matches"
          onPress={onPressCheck}
          gradient={false}
          color={COLORS.black}
          style={{ marginBottom: 0 }}
        />
        <AppButton
          title="Change Preferences"
          onPress={onPressChange}
          gradient={false}
          style={{ marginVertical: 0 }}
          color="transparent"
          titleStyle={{ fontFamily: FONTS.bold }}
        />
      </View>
      <AppLG />
    </View>
  );
};

export default MatchBox;

const styles = StyleSheet.create({
  line: {
    height: 10,
    color: COLORS.black,
    borderRadius: 20,
    marginVertical: 10,
    zIndex: 10,
  },
  description: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 11,
    textAlign: "center",
  },
  mainContainer: {
    padding: 20,
    backgroundColor: COLORS.bg,
    borderRadius: 10,
    marginVertical: 20,
    overflow: "hidden",
  },
});
