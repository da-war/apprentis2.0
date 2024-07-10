import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import { Image } from "expo-image";
import { COLORS, FONTS } from "../../../constants/theme";
import ProfileButton from "../../../components/user/profile/ProfileButton";

interface EditProfileProps {
  navigation: any;
}

const EditProfile: React.FC<EditProfileProps> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <AppHeader title="Edit Profile" onPressIcon={() => navigation.goBack()} />
      <View style={GlobalStyles.screenContainer}>
        <View style={styles.infoContainer}>
          <Image
            style={styles.image}
            contentFit="cover"
            source={require("../../../../assets/images/woman.jpg")}
          />
          <Text style={styles.name}>Maria Doe</Text>
          <Text style={styles.email}>mariadb@gmail.com</Text>
        </View>
        <View>
          <ProfileButton
            title="Edit Profile"
            onPress={() => navigation.navigate("ppersonal")}
          />
          <ProfileButton
            title="Study Details"
            onPress={() => navigation.navigate("ChangePassword")}
          />
          <ProfileButton
            title="Bio"
            onPress={() => navigation.navigate("pbio")}
          />
          <ProfileButton
            title="Social Accounts"
            onPress={() => navigation.navigate("psocial")}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: "center",
    marginTop: 15,
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
});
