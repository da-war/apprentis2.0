import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import { Image } from "expo-image";
import { COLORS } from "../../../constants/theme";

interface Props {
  navigation: any;
}
const SocialAccounts: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <AppHeader
        title="Social Accounts"
        onPressIcon={() => navigation.goBack()}
      />

      <View style={GlobalStyles.screenContainer}>
        <SocialButton title="LinkedIn" />
      </View>
    </View>
  );
};

interface PropsThis {
  title?: string;
  onPress?: () => void;
}
const SocialButton: React.FC<PropsThis> = ({
  title = "Some title",
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[GlobalStyles.horizontalSB, styles.mainCont]}
    >
      <View style={GlobalStyles.horizontal}>
        <Image
          style={styles.image}
          contentFit="cover"
          source={require("../../../../assets/icons/companies/linkedin.png")}
        />
        <Text style={GlobalStyles.h5}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialAccounts;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  mainContainer: {
    borderWidth: 2,
    padding: 13,
    borderRadius: 13,
    borderColor: COLORS.border,
  },
  input: {
    flex: 1,
    color: COLORS.white,
  },

  mainCont: {
    backgroundColor: COLORS.darkBg,
    padding: 13,
    borderRadius: 12,
  },
});
