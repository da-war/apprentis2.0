import { StyleSheet, Text, View } from "react-native";
import React from "react";

import * as Yup from "yup";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import { AppForm, AppFormField, SubmitButton } from "../../../components/form";

const initialValues = {
  name: "",
  email: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
});

interface Props {
  navigation: any;
}
const PersonalInfo: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <AppHeader
          title="Personal Info"
          onPressIcon={() => navigation.goBack()}
        />
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: object) => console.log(values)}
        >
          <AppFormField
            name="name"
            placeholder="Enter new name"
            icon="account"
            autoCapitalize="words"
            title="Name"
          />

          <AppFormField
            name="email"
            placeholder="Enter new email"
            icon="email"
            autoCapitalize="none"
            title="Email"
          />
          <SubmitButton title="Save" />
        </AppForm>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({});
