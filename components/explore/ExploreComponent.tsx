import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

interface Props {
  image?: any;
  title?: string;
  onPress?: () => void;
}
const ExploreComponent: React.FC<Props> = ({
  image = require("../../../assets/images/one.jpg"),
  title = "jobs",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <ImageBackground
        style={{ opacity: 0.7, flex: 1 }}
        source={image}
        resizeMode="cover"
        blurRadius={4}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ExploreComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 90,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
});
