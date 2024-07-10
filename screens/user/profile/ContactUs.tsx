import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import AppTextInput from "../../../components/AppTextInput";
import AppButton from "../../../components/AppButton";

interface Props {
  navigation: any;
}

const ContactUs: React.FC<Props> = ({ navigation }) => {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <AppHeader title="Contact Us" onPressIcon={() => navigation.goBack()} />

        <AppTextInput
          title="Subject"
          placeholder="Title / Subject of your message?"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
        <AppTextInput
          title="Message"
          placeholder="Type your message here..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />

        <AppButton title="Send Message" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
