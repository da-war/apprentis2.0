import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { Image } from "expo-image";
import { COLORS } from "../../constants/theme";

interface Props {}

const CourseVideoComponent: React.FC<Props> = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          source={require("../../../assets/images/woman.jpg")}
          style={styles.image}
          contentFit="cover"
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={GlobalStyles.text}>Rian Mendella</Text>
        <Text style={GlobalStyles.h6}>
          Rian Mendella:Apa itu UI/UX Designer?, dan Apa tugas seorang UI/UX
          Designer?
        </Text>
      </View>
    </View>
  );
};

export default CourseVideoComponent;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.darkBg,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  rightContainer: {
    paddingRight: 15,
  },
});
