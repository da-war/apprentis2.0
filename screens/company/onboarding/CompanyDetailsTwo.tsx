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

const CompanyDetailsTwo: React.FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState("");

  const itemsTo = ["Graduate Jobs", "Apprenticeships", "Events"];

  const searchTheText = (text: string) => {};
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <View style={GlobalStyles.m10v}>
          <Text style={[GlobalStyles.h4, { marginVertical: 10 }]}>
            Describe your company
          </Text>
          <SearchTextInput
            value={searchText}
            onChangeValue={(text: string) => searchTheText(text)}
            placeholder="Your company description"
            style={{}}
            icon={false}
          />
        </View>

        <View style={GlobalStyles.m10v}>
          <Text style={[GlobalStyles.h4, { marginVertical: 10 }]}>
            Opportunities you provide?
          </Text>
          <SelectableChoices items={itemsTo} />
        </View>

        <View style={GlobalStyles.m10v}>
          <Text style={[GlobalStyles.h4, { marginVertical: 10 }]}>URL</Text>
          <SearchTextInput
            value={searchText}
            onChangeValue={(text: string) => searchTheText(text)}
            placeholder="Company Profile URL"
            style={{}}
            icon={false}
          />
        </View>

        <View style={[GlobalStyles.horizontal, { gap: 20 }, styles.absolute]}>
          <AppButton
            title="Back"
            onPress={() => navigation.goBack()}
            gradient={false}
            color={COLORS.blackLight}
          />
          <AppButton
            title="Get Started"
            onPress={() => navigation.navigate("croles")}
            gradient={false}
          />
        </View>
      </View>
    </View>
  );
};

export default CompanyDetailsTwo;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
