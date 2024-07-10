import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppTextInput from "../../../components/AppTextInput";
import AppHeader from "../../../components/global/AppHeader";
import AppButton from "../../../components/AppButton";

interface Props {
  navigation: any;
}
const Bio: React.FC<Props> = ({ navigation }) => {
  const [bio, setBio] = React.useState("");
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <AppHeader title="Bio" onPressIcon={() => navigation.goBack()} />
        <AppTextInput
          placeholder="Add Bio for profile..."
          value={bio}
          onChangeText={(text) => setBio(text)}
          title="Bio"
        />

        <AppButton title="Save" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Bio;

const styles = StyleSheet.create({});
