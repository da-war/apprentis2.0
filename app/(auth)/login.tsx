import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";

import * as Yup from "yup";
import { Image } from "expo-image";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";
import { COLORS } from "../../constants/theme";
import SocialButton from "../../components/auth/SocialButton";
import { useRouter } from "expo-router";
import axios from "axios";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

interface Props {
  navigation: any;
}

interface LoginType {
  email: string;
  password: string;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const router = useRouter();

  const handleSubmit = async (values: LoginType) => {
    try {
      // Make a POST request to your login endpoint
      const response = await axios.post("http://localhost:3000/auth/sign-in", {
        email: values.email,
        password: values.password,
      });

      // Handle the response
      if (response) {
        // Login successful, handle accordingly
        console.log("response", response.data);
        Alert.alert("Login Successful", "Welcome!");
      }
    } catch (error) {
      // Handle errors, such as network errors
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };
  return (
    <View style={GlobalStyles.parentContainer}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Image
            contentFit="cover"
            style={styles.image}
            source={require("../../assets/icon.png")}
          />
          <Text style={GlobalStyles.h4}>Login to Apprentis</Text>
        </View>
        <View style={GlobalStyles.screenContainer}>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: object) => handleSubmit(values)}
          >
            <AppFormField
              name="email"
              title="Email"
              placeholder="some@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormField
              name="password"
              title="Password"
              placeholder="*******"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />

            <View style={{ marginVertical: 7 }} />
            <SubmitButton title="Login" textColor={COLORS.white} />
          </AppForm>

          <View style={[GlobalStyles.m10v, styles.centered]}>
            <Text style={[GlobalStyles.text, styles.texto]}>
              Don't have an account?
            </Text>
            <Text
              onPress={() => router.push("register")}
              style={GlobalStyles.boldTextPrimary}
            >
              Register
            </Text>
          </View>

          {/* <View>
            <Text style={styles.socialHeading}>Or login with</Text>
            <View style={styles.socialButtonContainer}>
              <SocialButton
                style={{ backgroundColor: COLORS.primary }}
                image={require("../../assets/icons/google.png")}
              />
              <SocialButton
                style={{ backgroundColor: COLORS.primary }}
                image={require("../../assets/icons/apple.png")}
              />

              <SocialButton
                style={{ backgroundColor: COLORS.primary }}
                image={require("../../assets/icons/email.png")}
              />
            </View>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 0,
  },
  socialButtonContainer: {
    flexDirection: "row",
    gap: 15,
  },
  socialHeading: {
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 35,
  },
  texto: {
    color: COLORS.gray,
  },
});
