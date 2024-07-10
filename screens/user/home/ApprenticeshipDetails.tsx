import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import Header from "../../../components/user/home/Header";
import { COLORS } from "../../../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import JobSection from "../../../components/user/home/JobSection";
import AppButton from "../../../components/AppButton";
import { Image } from "expo-image";

import YoutubePlayer from "react-native-youtube-iframe";
import StarRating from "react-native-star-rating-widget";
import CourseVideoComponent from "../../../components/global/CourseVideoComponent";
import ApprenticeBtn from "../../../components/global/ApprenticeBtn";

interface Props {
  navigation: any;
  route: any;
}

const courseData = [1, 2, 3, 4, 5];
const ApprenticeshipDetails: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <Header title="Apprenticeship" onPressIcon={() => navigation.goBack()} />
      <View style={GlobalStyles.screenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={GlobalStyles.horizontalSB}>
            <Text style={GlobalStyles.h4}>How to Succeed?</Text>
            <View style={[GlobalStyles.horizontal, { gap: 10 }]}>
              <Text style={GlobalStyles.h6}>Intermediate</Text>
              <Image
                source={require("../../../../assets/icons/tab/manage.png")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </View>
          </View>
          <View style={[GlobalStyles.horizontalSB, { marginVertical: 14 }]}>
            <View style={[GlobalStyles.horizontal, { gap: 20 }]}>
              <Text style={GlobalStyles.text}>By Company</Text>
              <Text style={GlobalStyles.text}>2-3 Months</Text>
            </View>
            <View style={[GlobalStyles.horizontal, { gap: 20 }]}>
              <Image
                contentFit="contain"
                style={{ width: 20, height: 20 }}
                source={require("../../../../assets/icons/money.png")}
              />
              <Text style={GlobalStyles.boldTextPrimary}>$1500-2500</Text>
            </View>
          </View>
          <Text style={styles.grayText}>
            Lorem ipsum dolor sit amet consectetur. Vel neque vitae pellentesque
            egestas cursus egestas et in. Pulvinar nam commodo eget et justo
            netus viverra. Nisl sollicitudin porta est amet adipiscing. Purus
            cursus amet sollicitudin eget morbi. Vitae tempus risus est nunc. Et
            nunc iaculis feugiat varius ut massa porttitor feugiat. Suspendisse
            dolor amet augue eu vestibulum vehicula malesuada. A feugiat sapien
            morbi dignissim in neque amet elementum. Nibh consectetur tempor
            suspendisse orci. Egestas lacus morbi eget vel mauris egestas.
            Semper.
          </Text>
          <View style={GlobalStyles.m10v}>
            <YoutubePlayer
              videoId="LXb3EKWsInQ"
              height={225}
              play={false}
              onChangeState={(state) => console.log(state)}
            />
          </View>

          <View style={GlobalStyles.horizontal}>
            <Text style={GlobalStyles.textGray}>4.9</Text>
            <StarRating
              rating={5}
              starSize={15}
              color="#FFD700"
              starStyle={{ marginHorizontal: 2 }}
              onChange={(rating) => console.log(rating)}
            />
            <Text style={GlobalStyles.textGray}>
              {"("}300{")"}
            </Text>
          </View>

          <View>
            <FlatList
              data={courseData}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => <CourseVideoComponent />}
            />
          </View>

          <View style={styles.bottomContainer}>
            <ApprenticeBtn
              title="Resources"
              onPress={() => navigation.navigate("hresource")}
            />
            <ApprenticeBtn
              title="Certificate"
              onPress={() => navigation.navigate("hcertificate")}
            />
            <ApprenticeBtn
              title="Notes"
              onPress={() => navigation.navigate("hnotes")}
            />
            <ApprenticeBtn
              title="Announcements"
              onPress={() => navigation.navigate("hanouncements")}
            />
            <ApprenticeBtn
              title="Share"
              onPress={() => navigation.navigate("hshare")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ApprenticeshipDetails;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.black,
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 60,
  },
  title: {
    textAlign: "center",
    marginVertical: 5,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  grayText: {
    color: COLORS.gray,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    marginVertical: 10,
  },
  bottomContainer: {
    marginVertical: 15,
  },
});
