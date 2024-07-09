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
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required()
    .label("Confirm Password"),
});

interface Props {
  navigation: any;
}

// it will be resgister type object having name, email, password and confirm password

interface RegisterType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const router = useRouter();

  const handleSubmit = async (values: RegisterType) => {
    try {
      // Make a POST request to your login endpoint
      const response = await axios.post("http://localhost:3000/auth/sign-up", {
        email: values.email,
        password: values.password,
        name: values.name,
        role: "user",
      });

      // Handle the response
      if (response) {
        // Login successful, handle accordingly
        console.log("response", response.data);
        Alert.alert("Registeration Successful", "Welcome!");
      }
    } catch (error) {
      // Handle errors, such as network errors
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };
  return (
    <View style={GlobalStyles.parentContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Image
            contentFit="cover"
            style={styles.image}
            source={require("../../assets/icon.png")}
          />
          <Text style={GlobalStyles.h4}>Create an Account</Text>
        </View>
        <View style={GlobalStyles.screenContainer}>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: RegisterType) => handleSubmit(values)}
          >
            <AppFormField
              name="name"
              title="Name"
              placeholder="John Doe"
              autoCapitalize="none"
              autoCorrect={false}
            />
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
            <AppFormField
              name="confirmPassword"
              title="Confirm Password"
              placeholder="*******"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
            <SubmitButton title="Register" textColor={COLORS.white} />
          </AppForm>
          <View style={[GlobalStyles.m10v, styles.centered]}>
            <Text style={[GlobalStyles.text, styles.texto]}>
              Don't have an account?
            </Text>
            <Text
              onPress={() => router.push("/login")}
              style={GlobalStyles.boldTextPrimary}
            >
              Login
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

export default RegisterScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
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
