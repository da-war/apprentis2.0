import {
  Alert,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { Image } from "expo-image";

import { PieChart } from "react-native-gifted-charts";
import { COLORS, FONTS } from "../../constants/theme";
import ProfileButton from "../../components/user/profile/ProfileButton";
import AppButton from "../../components/AppButton";

interface Props {
  navigation: any;
}

const pieData = [
  { value: 54, color: "#0DD7B4", text: "54%" },
  { value: 40, color: "#9933FF", text: "30%" },
  { value: 20, color: "#fff", text: "26%" },
];
const ProfileCompany: React.FC<Props> = ({ navigation }) => {
  const name = "Maria Doe";
  const email = "maria@gmail.com";

  const logout = () => {
    //alert user to logout or not
    //if yes, then logout
    //if no, then do nothing

    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => navigation.navigate("login") },
    ]);
  };
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <ScrollView>
          <Text style={GlobalStyles.h4}>Profile</Text>

          <View style={[GlobalStyles.horizontal, { gap: 20, marginTop: 20 }]}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/woman.jpg")}
              contentFit="cover"
            />
            <View>
              <Text style={GlobalStyles.h6}>{name}</Text>
              <Text style={GlobalStyles.lightGreyText}>{email}</Text>
            </View>
          </View>

          <View style={styles.companyDetailsContainer}>
            <Text style={GlobalStyles.h6}>About</Text>
            <Text
              style={[
                GlobalStyles.textGray,
                { fontSize: 12, marginBottom: 12 },
              ]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat
            </Text>
            <Text style={GlobalStyles.h6}>Company Culture</Text>
            <Text
              style={[
                GlobalStyles.textGray,
                { fontSize: 12, marginBottom: 12 },
              ]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat
            </Text>
            <View style={styles.innerContainer}>
              <Text style={styles.heading}>More Information</Text>
              <InfoComponent
                title="123-456-789"
                icon={require("../../../assets/icons/company/call.png")}
              />
              <InfoComponent
                title="companyname@gmail.com"
                icon={require("../../../assets/icons/company/email.png")}
              />
              <InfoComponent
                title="www.companyname.com"
                icon={require("../../../assets/icons/company/world.png")}
              />
              <InfoComponent
                title="www.linkedin.com"
                icon={require("../../../assets/icons/company/linkedin.png")}
              />
              <View style={{ marginTop: 10 }}>
                <Text style={styles.heading}>Company Size</Text>
                <InfoComponent
                  title="20-50"
                  icon={require("../../../assets/icons/company/companysize.png")}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.heading}>Founded in</Text>
                <InfoComponent
                  title="21 January 2023"
                  icon={require("../../../assets/icons/company/calendar.png")}
                />
              </View>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <ProfileButton
              title="Applications"
              onPress={() => navigation.navigate("pedit")}
            />
            <ProfileButton
              title="CVs"
              onPress={() => navigation.navigate("pedit")}
            />
            <ProfileButton
              title="Edit Profile"
              onPress={() => navigation.navigate("pedit")}
            />
            <ProfileButton
              title="Terms of use"
              onPress={() => navigation.navigate("pterms")}
            />
            <ProfileButton
              title="Data Privacy"
              onPress={() => navigation.navigate("pdata")}
            />
            <ProfileButton
              title="Explore"
              onPress={() => navigation.navigate("pexplore")}
            />
            <ProfileButton
              title="Saved"
              onPress={() => navigation.navigate("psaved")}
            />
            <ProfileButton
              title="Prepare for an interview"
              onPress={() => navigation.navigate("pprepare")}
            />
            <ProfileButton
              title="Contact us"
              onPress={() => navigation.navigate("pcontact")}
            />
            <ProfileButton
              title="Notifications"
              onPress={() => navigation.navigate("pnotifications")}
              style={{ borderBottomWidth: 0 }}
            />

            <View style={{ marginTop: 30 }}>
              <AppButton
                color={COLORS.danger}
                gradient={false}
                title="Sign Out"
                onPress={() => logout()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileCompany;

const InfoComponent = ({
  title = "title",
  icon = require("../../../assets/icons/company/call.png"),
}: {
  title: string;
  icon: any;
}) => {
  return (
    <View style={[GlobalStyles.horizontal, { gap: 10, marginVertical: 5 }]}>
      <Image contentFit="contain" style={styles.iconic} source={icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  companyDetailsContainer: {
    backgroundColor: COLORS.darkBg,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  statsContainer: {
    marginTop: 20,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  statsTitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  statsValue: {
    fontSize: 16,
    color: COLORS.black,
  },

  statsContainers: {
    marginVertical: 20,
  },
  someText: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 20,
    marginTop: -2,
  },

  iconic: {
    width: 16,
    height: 16,
  },
  title: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },
  heading: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});
