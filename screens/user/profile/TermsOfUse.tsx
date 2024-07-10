import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import { FONTS } from "../../../constants/theme";

interface Props {
  navigation: any;
}

const TermsOfUse: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <AppHeader
        onPressIcon={() => navigation.goBack()}
        title="Terms & Conditions"
      />
      <View style={GlobalStyles.screenContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis{" "}
        </Text>
      </View>
    </View>
  );
};

export default TermsOfUse;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "gray",
    fontFamily: FONTS.regular,
  },
});
