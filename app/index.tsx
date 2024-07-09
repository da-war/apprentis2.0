import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import GlobalStyles from "@/constants/GlobalStyles";

import { useRouter } from "expo-router";
import AppButton from "@/components/AppButton";

import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";
import AppLG from "@/components/global/AppLG";
import { COLORS } from "@/constants/theme";

interface Props {
  navigation: any;
}
const LandingScreen: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <View style={styles.topContainer}>
          <Animatable.View
            animation="zoomIn"
            duration={2000}
            style={[
              styles.image,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Image
              contentFit="contain"
              style={styles.image}
              source={require("../assets/icon.png")}
            />
          </Animatable.View>
          <Text style={[GlobalStyles.h4, { marginTop: -20 }]}>
            Welcome to Apprentis
          </Text>
        </View>

        <Animatable.View
          duration={2000}
          animation="fadeIn"
          style={styles.bottomContainer}
        >
          <AppButton
            title="Register"
            onPress={() => router.push("/register")}
          />
          <AppButton title="Login" onPress={() => router.push("/login")} />
        </Animatable.View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  image: {
    width: "66%",
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
