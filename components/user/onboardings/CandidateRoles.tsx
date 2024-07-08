import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import SelectableChoices from "../../global/SelectableChoices";
import AppButton from "../../AppButton";
import { COLORS } from "../../../constants/theme";
import { StatusBar } from "expo-status-bar";
import SelectableListTexts from "../../global/SelectableListTexts";
import AppTextInput from "../../AppTextInput";
import SearchTextInput from "../home/SearchTextInput";

interface Props {
  navigation: any;
}

const choices = ["Graduate Jobs", "Apprenticeships", "Events"];

const CandidateRoles: React.FC<Props> = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const searchTheText = (text: string) => {
    console.log(text);
  };
  return (
    <View style={GlobalStyles.parentContainer}>
      <StatusBar style="light" />
      <View style={GlobalStyles.screenContainer}>
        <ScrollView>
          <Text style={[GlobalStyles.h4, { marginTop: 20 }]}>
            What type of roles would you like?
          </Text>
          <Text style={[GlobalStyles.text, { marginVertical: 10 }]}>
            Select the ones that are most relevant to you.
          </Text>
          <View style={styles.inputContainer}>
            <SearchTextInput
              value={searchText}
              onChangeValue={(text: string) => searchTheText(text)}
              placeholder="Search"
              style={{}}
            />
          </View>
          <View>
            <SelectableListTexts items={choices} />
          </View>
        </ScrollView>
        <View style={[GlobalStyles.horizontal, { gap: 20 }, styles.absolute]}>
          <AppButton
            title="Back"
            onPress={() => navigation.goBack()}
            gradient={false}
            color={COLORS.blackLight}
          />
          <AppButton
            title="Next"
            onPress={() => navigation.navigate("clocation")}
            gradient={false}
          />
        </View>
      </View>
    </View>
  );
};

export default CandidateRoles;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainer: {
    marginVertical: 20,
  },
});
