import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import { Image } from "expo-image";
import { COLORS } from "../../constants/theme";
import { apprentises, companies } from "../../constants/data";
import MatchBox from "../../components/user/MatchBox";
import HomeSections from "../../components/user/HomeSections";
import { Stats } from "../user/Profile";
import { PieChart } from "react-native-gifted-charts";

const pieData = [
  { value: 54, color: "#0DD7B4", text: "54%" },
  { value: 40, color: "#9933FF", text: "30%" },
  { value: 20, color: "#fff", text: "26%" },
];

interface Props {
  navigation: any;
}
const HomeCompany: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <ScrollView>
        <View style={[GlobalStyles.horizontalSB, styles.topHeader]}>
          <Image
            contentFit="cover"
            style={{ width: 40, height: 40 }}
            source={require("../../../assets/icon.png")}
          />
          <View
            style={[GlobalStyles.horizontal, { gap: 20, marginHorizontal: 10 }]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("hnotifications")}
            >
              <Image
                contentFit="cover"
                style={{ width: 22, height: 22 }}
                source={require("../../../assets/icons/notification.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("hmessages")}>
              <Image
                contentFit="cover"
                style={{ width: 22, height: 22 }}
                source={require("../../../assets/icons/chat.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={GlobalStyles.screenContainer}>
          <View style={styles.companies}>
            <Text style={GlobalStyles.h5}>Trending Companies</Text>
            <FlatList
              data={companies.slice(0, 8)}
              keyExtractor={(item) => item.id.toString()}
              numColumns={4}
              contentContainerStyle={{
                paddingVertical: 10,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              renderItem={({ item }) => (
                <TouchableOpacity style={{ width: "25%", marginBottom: 10 }}>
                  <View style={styles.company}>
                    <Image
                      contentFit="cover"
                      style={styles.companyImage}
                      source={item.image}
                    />
                  </View>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />
            <Text
              style={[GlobalStyles.boldTextPrimary, { textAlign: "right" }]}
            >
              View More
            </Text>
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

          <View style={styles.bottom}>
            <HomeSections
              title="Your Jobs"
              onViewMore={() => navigation.navigate("companyJobs")}
            />
            <HomeSections
              imageSection={require("../../../assets/icons/apprentis.png")}
              title="Your Apprenticeships"
              onViewMore={() => navigation.navigate("companyApps")}
            />
            <HomeSections
              imageSection={require("../../../assets/icons/event.png")}
              title="Your Events"
              onViewMore={() => navigation.navigate("companyEvents")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeCompany;

const styles = StyleSheet.create({
  topHeader: {
    padding: 20,
  },
  companyImage: {
    width: 30,
    height: 30,
  },
  company: {
    backgroundColor: COLORS.darkBg,
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
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
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  statsContainer: {
    marginTop: 20,
  },
});
