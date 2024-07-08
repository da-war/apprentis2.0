import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import { Image } from "expo-image";
import GlobalStyles from "../../constants/GlobalStyles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  item: any;
  onPress?: () => void;
}

const Product: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.companyLogoContainer}>
          <Image contentFit="contain" style={styles.logo} source={item.icon} />
          <View style={styles.companyInfoContainer}>
            <Text style={GlobalStyles.text}>{item.company}</Text>
            <Text style={[GlobalStyles.h6, {}]}>{item.jobTitle}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            contentFit="contain"
            style={styles.image}
            source={require("../../../assets/icons/tab/manage.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          size={15}
          color={COLORS.gray}
        />
        <Text style={GlobalStyles.textGray}>{item.location}</Text>
        <MaterialCommunityIcons name="circle" size={10} color={COLORS.gray} />
        <Text style={GlobalStyles.textGray}>{item.postedOn}</Text>
      </View>
      <View style={GlobalStyles.horizontalSB}>
        <View>
          <FlatList
            data={item.tags.slice(0, 2)}
            keyExtractor={(item) => item}
            horizontal
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.tagContainer}>
                <Text style={GlobalStyles.boldTextPrimary}>{item}</Text>
              </View>
            )}
          />
        </View>
        <View style={[GlobalStyles.horizontal, { gap: 20 }]}>
          <Image
            contentFit="contain"
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/icons/money.png")}
          />
          <Text style={GlobalStyles.boldTextPrimary}>{item.salary}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.darkBg,
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  companyLogoContainer: {
    padding: 10,
    borderRadius: "50%",
    flexDirection: "row",
    gap: 15,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 30,
    height: 30,
  },
  middleContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 10,
  },
  tagContainer: {
    backgroundColor: COLORS.black,
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    marginVertical: 10,
  },
});
