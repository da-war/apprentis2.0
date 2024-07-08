import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import SelectableChoices from "../../global/SelectableChoices";
import AppButton from "../../AppButton";
import { COLORS } from "../../../constants/theme";
import { StatusBar } from "expo-status-bar";

interface Props {
  navigation: any;
}

const choices = ["Graduate Jobs", "Apprenticeships", "Events"];

const CandiateOpp: React.FC<Props> = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return (
    <View style={GlobalStyles.parentContainer}>
      <StatusBar style="light" />
      <View style={GlobalStyles.screenContainer}>
        <Text style={[GlobalStyles.h4, { marginTop: 20 }]}>
          What is your current status?
        </Text>
        <Text style={[GlobalStyles.text, { marginVertical: 10 }]}>
          Please provide details about your specific role or objectives so that
          we can tailor Apprentis to better suit your needs.
        </Text>
        <View>
          <SelectableChoices items={choices} />
        </View>

        <View style={[GlobalStyles.horizontal, { gap: 20 }, styles.absolute]}>
          <AppButton
            title="Back"
            onPress={() => console.log("back")}
            gradient={false}
            color={COLORS.blackLight}
          />
          <AppButton
            title="Next"
            onPress={() => navigation.navigate("croles")}
            gradient={false}
          />
        </View>
      </View>
    </View>
  );
};

export default CandiateOpp;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
