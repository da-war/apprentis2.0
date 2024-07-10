import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import Header from "../../../components/user/home/Header";
import { COLORS } from "../../../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import JobSection from "../../../components/user/home/JobSection";
import AppButton from "../../../components/AppButton";

interface Props {
  navigation: any;
  route: any;
}
const JobDetails: React.FC<Props> = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={GlobalStyles.parentContainer}>
      <Header title="Job Details" onPressIcon={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.screenContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.icon} style={{ width: 80, height: 80 }} />
          </View>
          <Text style={[GlobalStyles.h3, styles.title]}>{item.jobTitle}</Text>
          <View style={[GlobalStyles.horizontal, styles.centered]}>
            <Text style={[GlobalStyles.h6, styles.title]}>{item.company}</Text>
            <Image
              style={{ width: 18, height: 18, marginLeft: 10 }}
              source={require("../../../../assets/icons/job/verified.png")}
            />
          </View>

          <View style={[GlobalStyles.horizontal, styles.centered]}>
            <Text style={GlobalStyles.textGray}>{item.type}</Text>
            <MaterialCommunityIcons
              name="circle"
              color={COLORS.gray}
              size={10}
            />
            <Text style={GlobalStyles.textGray}>{item.location}</Text>
            <MaterialCommunityIcons
              name="circle"
              color={COLORS.gray}
              size={10}
            />
            <Text style={GlobalStyles.textGray}>{item.workMode}</Text>
          </View>
          <Text style={GlobalStyles.h1}>{item.salary}</Text>

          <JobSection title="Responsiblities" data={item.responsiblities} />
          <JobSection title="Responsiblities" data={item.qualifications} />
          <JobSection title="Responsiblities" data={item.benefits} />

          <View style={GlobalStyles.horizontalSB}>
            <AppButton
              title="Refer a Friend"
              color={COLORS.gray}
              gradient={false}
              onPress={() => navigation.navigate("Refer")}
            />
            <AppButton
              title="Apply Now!"
              color={COLORS.gray}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobDetails;

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
});
