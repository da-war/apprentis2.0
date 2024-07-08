import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Product from "../global/Product";
import { COLORS, FONTS } from "../../constants/theme";
import { jobs } from "../../constants/data";
import GlobalStyles from "../../constants/GlobalStyles";

interface Props {
  data?: any;
  title?: string;
  imageSection?: any;
  onViewMore?: () => void;
}
const HomeSections: React.FC<Props> = ({
  data = jobs,
  title = "Jobs",
  imageSection = require("../../../assets/icons/jobs.png"),
  onViewMore,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={GlobalStyles.horizontalSB}>
        <View style={[GlobalStyles.horizontal, GlobalStyles.m15v]}>
          <Image
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
            source={imageSection}
          />
          <Text style={[GlobalStyles.h3, { marginLeft: 15 }]}>{title}</Text>
        </View>
        <Text
          onPress={onViewMore}
          style={[GlobalStyles.boldTextPrimary, { marginLeft: 15 }]}
        >
          View More
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => <Product item={item} />}
      />
    </View>
  );
};

export default HomeSections;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    marginVertical: 10,
    color: COLORS.white,
  },
});
