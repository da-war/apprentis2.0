import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../../constants/GlobalStyles";

import { COLORS } from "../../../constants/theme";
import { StatusBar } from "expo-status-bar";
import SearchTextInput from "../../../components/user/home/SearchTextInput";
import SelectableListTexts from "../../../components/global/SelectableListTexts";
import AppButton from "../../../components/AppButton";
import AppTextInput from "../../../components/AppTextInput";

interface Props {
  navigation: any;
}

const choices = ["Graduate Jobs", "Apprenticeships", "Events"];

const UseCase: React.FC<Props> = ({ navigation }) => {
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
          <View style={GlobalStyles.m10v}>
            <Text style={[GlobalStyles.h4, { marginVertical: 10 }]}>
              What is the name of your company?
            </Text>
            <SearchTextInput
              value={searchText}
              onChangeValue={(text: string) => searchTheText(text)}
              placeholder="Your company name"
              style={{}}
              icon={false}
            />
          </View>
          <Text style={[GlobalStyles.h4, { marginTop: 20 }]}>
            What Industry does your company lie in?
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
            onPress={() => navigation.navigate("ocompanyd1")}
            gradient={false}
          />
        </View>
      </View>
    </View>
  );
};

export default UseCase;

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
