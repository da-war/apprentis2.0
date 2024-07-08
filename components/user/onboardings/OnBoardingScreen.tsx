import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/theme";
import GlobalStyles from "../../../constants/GlobalStyles";
import SelectableListTexts from "../../global/SelectableListTexts";

interface Props {}

//give a long list of jobs keywords strings

const items = [
  "Accounting",
  "Admin",
  "Automotive",
  "Banking",
  "Construction",
  "Customer Service",
  "Education",
  "Engineering",
  "Finance",
  "Healthcare",
  "Hospitality",
  "Human Resources",
  "Information Technology",
  "Legal",
  "Manufacturing",
  "Marketing",
  "Media",
  "Nonprofit",
  "Real Estate",
  "Retail",
  "Sales",
  "Science",
  "Skilled Trades",
  "Transportation",
  "Travel",
  "Other",
];

const OnBoardingScreen: React.FC<Props> = () => {
  return (
    <View
      style={[GlobalStyles.parentContainer, { backgroundColor: COLORS.bg }]}
    >
      <Text>OnBoardingScreen</Text>
      <SelectableListTexts items={items} />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: COLORS.bg,
  },
});
