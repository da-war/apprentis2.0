import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import SearchTextInput from "../../../components/user/home/SearchTextInput";
import SelectableChoices from "../../../components/global/SelectableChoices";
import AppButton from "../../../components/AppButton";
import { COLORS } from "../../../constants/theme";

interface Props {
  navigation: any;
}

const CompanyDetailsOne: React.FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState("");

  const itemsTo = ["Office", "Remote", "Hybrid"];

  const searchTheText = (text: string) => {};
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <View style={GlobalStyles.m10v}>
          <Text style={[GlobalStyles.h4, { marginVertical: 10 }]}>
            What is the location of your company?
          </Text>
          <SearchTextInput
            value={searchText}
            onChangeValue={(text: string) => searchTheText(text)}
            placeholder="Your company name"
            style={{}}
            icon={false}
          />
        </View>
        <View style={GlobalStyles.m10v}>
          <Text style={[GlobalStyles.h4, { marginVertical: 10 }]}>
            How many employees do you have?
          </Text>
          <SearchTextInput
            value={searchText}
            onChangeValue={(text: string) => searchTheText(text)}
            placeholder="Your company name"
            style={{}}
            icon={false}
          />
        </View>
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
        <View style={GlobalStyles.m10v}>
          <Text style={[GlobalStyles.h4, { marginVertical: 10 }]}>
            When was your company founded?
          </Text>
          <SelectableChoices items={itemsTo} />
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
            onPress={() => navigation.navigate("ocompanyd2")}
            gradient={false}
          />
        </View>
      </View>
    </View>
  );
};

export default CompanyDetailsOne;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
