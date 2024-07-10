import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import * as Yup from "yup";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import { AppForm, AppFormField, SubmitButton } from "../../../components/form";
import { COLORS, FONTS } from "../../../constants/theme";
import AppTextInput from "../../../components/AppTextInput";
import SelectableChoice from "../../../components/global/SelectableChoice";
import SelectableChoices from "../../../components/global/SelectableChoices";
import AppButton from "../../../components/AppButton";

const initialValues = {
  name: "",
  email: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
});

const workMode = ["Office", "Remote"];
const workTurn = ["Full Time", "Part Time"];

const locaations = ["location"];

interface Props {
  navigation: any;
}
const CreateJob: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <ScrollView>
          <AppHeader
            title="Create Job"
            onPressIcon={() => navigation.goBack()}
          />

          <Text style={styles.headings}>Job Title</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Company Name</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Responsibilities</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          {/* qualifications and benefits */}

          <Text style={styles.headings}>Qualifications</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />

          <Text style={styles.headings}>Benefits</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />

          <View style={GlobalStyles.m10v}>
            <Text style={styles.headings2}>Work Mode</Text>

            <SelectableChoices items={workMode} />
          </View>
          <Text style={styles.headings}>Location</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Start Time</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>End Time</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <View style={GlobalStyles.m10v}>
            <Text style={styles.headings2}>Work Type</Text>

            <SelectableChoices items={workTurn} />
          </View>
          <Text style={styles.headings}>How to Apply?</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Add Deadline for applications</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Pay</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />

          <AppButton title="Create Job" onPress={() => console.log("Save")} />
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateJob;

const styles = StyleSheet.create({
  headings: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    marginBottom: -32,
    color: COLORS.white,
    marginTop: 15,
    marginLeft: 10,
  },
  headings2: {
    fontSize: 16,
    fontFamily: FONTS.bold,

    color: COLORS.white,
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 20,
  },
});
