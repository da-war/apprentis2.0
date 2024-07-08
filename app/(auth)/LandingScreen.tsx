import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { Image } from "expo-image";
import AppButton from "../../components/AppButton";

interface Props {
  navigation: any;
}
const LandingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <View style={styles.topContainer}>
          <Image
            contentFit="contain"
            style={styles.image}
            source={require("../../assets/icon.png")}
          />
          <Text style={GlobalStyles.h2}>Welcome to Apprentis</Text>
        </View>

        <View style={styles.bottomContainer}>
          <AppButton
            title="Register"
            onPress={() => navigation.navigate("register")}
          />
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("login")}
          />
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  topContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
