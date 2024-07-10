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
import { COLORS } from "../../constants/theme";
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
const Profile: React.FC<Props> = ({ navigation }) => {
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

          <View style={styles.statsContainer}>
            <View style={styles.chartContainer}>
              <PieChart
                donut
                showText
                textColor={COLORS.black}
                radius={Dimensions.get("window").width / 3.5}
                textSize={20}
                textBackgroundRadius={26}
                data={pieData}
                backgroundColor={COLORS.bg}
              />
            </View>

            <View style={styles.statsContainers}>
              <Stats
                percentage={pieData[0].text}
                title="Application rate"
                value={pieData[0].value}
                color={pieData[0].color}
              >
                <Text style={styles.someText}>
                  You’ve been matched with 24 career opportunities and applied
                  to 0 of them
                </Text>
              </Stats>
              <Stats
                percentage={pieData[1].text}
                color={pieData[1].color}
                title="Gained Skills"
                value={pieData[1].value}
              >
                <Text style={styles.someText}>
                  You have gained 5% of skills for the jobs you like
                </Text>
              </Stats>
              <Stats
                title="Total Interviews"
                value={pieData[2].value}
                percentage={pieData[2].text}
                color={pieData[2].color}
              >
                <Text style={styles.someText}>
                  You match with 34 opportunities and you viewed 0 of them.
                </Text>
              </Stats>
            </View>
          </View>

          <View style={styles.btnContainer}>
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

export default Profile;

interface StatsProps {
  title: string;
  value: Number;
  percentage?: string;
  color?: string;
  children?: React.ReactNode;
}

export const Stats: React.FC<StatsProps> = ({
  title,
  value,
  percentage,
  color,
  children,
}) => {
  return (
    <View>
      <View style={[GlobalStyles.horizontal, { gap: 30 }]}>
        <Text style={[GlobalStyles.h3, { color: color }]}>{percentage}</Text>
        <Text style={(GlobalStyles.h4, { color: color })}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
