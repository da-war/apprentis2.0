import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import AppButton from "../../../components/AppButton";
import SelectableListTexts from "../../../components/global/SelectableListTexts";
import ApprenticeBtn from "../../../components/global/ApprenticeBtn";

interface Props {
  navigation: any;
}

const datatexts = ["marketing", "sales", "business", "technology"];

const CommunityDetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <AppHeader
          title="Community Details"
          onPressIcon={() => navigation.goBack()}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[GlobalStyles.h6, { marginVertical: 10 }]}>
            Los Angeles- Multi School Virtual Information Session
          </Text>
          <Text style={GlobalStyles.textGray}>England</Text>

          <AppButton title="Join Community" onPress={() => {}} />

          <View>
            <Text style={[GlobalStyles.h6, { marginBottom: 10 }]}>Topics</Text>
            <SelectableListTexts items={datatexts} />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={GlobalStyles.h6}>Description</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequatLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequatLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat
            </Text>
          </View>
          <ApprenticeBtn
            title="Members"
            onPress={() => navigation.navigate("emembers")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default CommunityDetailsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "gray",
    lineHeight: 20,
  },
});
