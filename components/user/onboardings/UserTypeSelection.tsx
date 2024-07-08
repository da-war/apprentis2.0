import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import SelectableChoices from "../../global/SelectableChoices";
import SelectableChoice from "../../global/SelectableChoice";

interface Props {
  navigation: any;
}

const choices = ["Candidate", "Employer"];

const UserTypeSelection: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <Text style={[GlobalStyles.h4, { marginTop: 20 }]}>
          What is your current status?
        </Text>
        <Text style={[GlobalStyles.text, { marginVertical: 10 }]}>
          Please provide details about your specific role or objectives so that
          we can tailor Apprentis to better suit your needs.
        </Text>
        <View>
          <SelectableChoice
            items={choices}
            whatPressed={(item) => {
              console.log(item);
              if (item.toLowerCase() === "candidate") {
                //navigate to candidate onboarding
                console.log("candidate");
                navigation.navigate("copp");
              }
              if (item.toLowerCase() === "employer") {
                //navigate to employer onboarding
                navigation.navigate("ousecase");
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UserTypeSelection;

const styles = StyleSheet.create({});
