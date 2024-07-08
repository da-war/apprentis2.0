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

const choices = ["Office", "Remote"];
const locations = ["Anywhere in the world"];

const CandidateLocation: React.FC<Props> = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return (
    <View style={GlobalStyles.parentContainer}>
      <StatusBar style="light" />
      <View style={GlobalStyles.screenContainer}>
        <Text style={[GlobalStyles.h4, { marginTop: 20 }]}>
          What would you like your opportunities to be based on?
        </Text>

        <View>
          <SelectableChoices items={choices} />
        </View>
        <Text style={[GlobalStyles.h4, { marginTop: 20, marginBottom: 5 }]}>
          Location
        </Text>
        <View>
          <SelectableChoices items={locations} />
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

export default CandidateLocation;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
