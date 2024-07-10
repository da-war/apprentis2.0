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
import DropDown from "../../../components/DropDown";

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

//levels array for apprenticeship

const levels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];

interface Props {
  navigation: any;
}
const CreateApprenticeship: React.FC<Props> = ({ navigation }) => {
  const [selectedLevel, setSelectedLevel] = React.useState(null);
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <ScrollView>
          <AppHeader
            title="Create Apprenticeship"
            onPressIcon={() => navigation.goBack()}
          />

          <Text style={styles.headings}>Title</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          <Text style={styles.headings}>Level</Text>
          <DropDown
            data={levels}
            onSelectItem={(item) => setSelectedLevel(item)}
            placeholder="Select Level"
            selectedItem={selectedLevel}
          />
          <Text style={styles.headings}>Description</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
          />
          {/* qualifications and benefits */}

          <Text style={styles.headings}>Files</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
            rightIcon="attachment"
          />

          <Text style={styles.headings}>Company</Text>
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
          <Text style={styles.headings}>Notes</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
            rightIcon="attachment"
          />
          <Text style={styles.headings}>Certificate</Text>
          <AppTextInput
            placeholder=""
            icon="account"
            autoCapitalize="words"
            title={false}
            rightIcon="attachment"
          />

          <AppButton
            title="Create Apprenticeship"
            onPress={() => console.log("Save")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateApprenticeship;

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
