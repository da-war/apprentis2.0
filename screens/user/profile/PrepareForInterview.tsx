import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../../constants/GlobalStyles";

import { COLORS } from "../../../constants/theme";
import { StatusBar } from "expo-status-bar";

import AppHeader from "../../../components/global/AppHeader";
import SearchTextInput from "../../../components/user/home/SearchTextInput";
import SelectableListTexts from "../../../components/global/SelectableListTexts";
import AppButton from "../../../components/AppButton";

interface Props {
  navigation: any;
}

const choices = ["Graduate Jobs", "Apprenticeships", "Events"];

const PrepareForInterview: React.FC<Props> = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const searchTheText = (text: string) => {
    console.log(text);
  };
  return (
    <View style={GlobalStyles.parentContainer}>
      <StatusBar style="light" />
      <View style={GlobalStyles.screenContainer}>
        <AppHeader
          title="Prepare for an interview"
          onPressIcon={() => navigation.goBack()}
        />
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
              onChangeValue={(text) => searchTheText(text)}
              placeholder="Search"
            />
          </View>
          <View>
            <SelectableListTexts items={choices} />
          </View>
        </ScrollView>

        <AppButton
          title="Next"
          onPress={() => navigation.navigate("clocation")}
          gradient={false}
        />
      </View>
    </View>
  );
};

export default PrepareForInterview;

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
