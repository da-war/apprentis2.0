import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";

import * as Yup from "yup";
import { Image } from "expo-image";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";
import { COLORS } from "../../constants/theme";
import SocialButton from "../../components/auth/SocialButton";
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

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Image
            contentFit="cover"
            style={styles.image}
            source={require("../../assets/icon.png")}
          />
          <Text style={GlobalStyles.h3}>Login to Apprentis</Text>
        </View>
        <View style={GlobalStyles.screenContainer}>
          <AppForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: object) => console.log(values)}
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

            <View style={{ marginVertical: 15 }} />
            <SubmitButton title="Login" textColor={COLORS.white} />
          </AppForm>

          <View style={[GlobalStyles.m10v, styles.centered]}>
            <Text style={[GlobalStyles.text, styles.texto]}>
              Don't have an account?
            </Text>
            <Text
              onPress={() => navigation.navigate("register")}
              style={GlobalStyles.boldTextPrimary}
            >
              Register
            </Text>
          </View>

          <View>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
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
