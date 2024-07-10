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
import SelectableListTexts from "../../../components/global/SelectableListTexts";

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

const categories = [
  "category1",
  "category2",
  "category3",
  "category4",
  "category5",
];

const topics = ["topic1", "topic2", "topic3", "topic4", "topic5"];

interface Props {
  navigation: any;
}
const CreateEvent: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <ScrollView>
          <AppHeader
            title="Create Event"
            onPressIcon={() => navigation.goBack()}
          />

          <Text style={styles.headings}>Title</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Opportunity</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Location</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          {/* qualifications and benefits */}

          <Text style={styles.headings2}>Category</Text>
          <SelectableListTexts items={categories} />
          <Text style={styles.headings2}>Topic</Text>
          <SelectableListTexts items={topics} />

          <Text style={styles.headings}>Date</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />

          <Text style={styles.headings}>Time</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Description</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Your mission of this event</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />

          <Text style={styles.headings}>Deadline</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />

          <AppButton title="Create Event" onPress={() => console.log("Save")} />
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateEvent;

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
