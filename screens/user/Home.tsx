import {
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

interface Props {
  navigation: any;
}
const Home: React.FC<Props> = ({ navigation }) => {
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

          <View>
            <MatchBox />
          </View>

          <View style={styles.bottom}>
            <HomeSections
              title="Jobs"
              onViewMore={() => navigation.navigate("hjobs")}
            />
            <HomeSections
              imageSection={require("../../../assets/icons/apprentis.png")}
              title="Apprenticeships"
              onViewMore={() => navigation.navigate("happrentices")}
            />
            <HomeSections
              imageSection={require("../../../assets/icons/event.png")}
              title="Events"
              onViewMore={() => navigation.navigate("hevents")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
});
