import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import AppHeader from "../../../components/global/AppHeader";
import SearchTextInput from "../../../components/user/home/SearchTextInput";
import { Image } from "expo-image";
import { COLORS, FONTS } from "../../../constants/theme";
import Header from "../../../components/user/home/Header";

interface Props {
  navigation: any;
}

const communities = [
  {
    id: 1,
    name: "Community 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Community 2",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Community 3",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Community 4",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Community 5",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Community 6",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    name: "Community 7",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    name: "Community 8",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    name: "Community 9",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    name: "Community 10",
    image: "https://picsum.photos/200/300",
  },
];

const Communities: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <Header
          title="Communities"
          onPressIcon={() => navigation.goBack()}
          addText="v"
          onPressAdd={() => navigation.navigate("companyCreateCommunity")}
        />
        <View style={GlobalStyles.m10v}>
          <SearchTextInput
            placeholder="Search Communities..."
            value={search}
            onChangeValue={(text: string) => setSearch(text)}
            style={{}}
          />
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={communities}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ecommunityd")}
                style={styles.listItem}
              >
                <View>
                  <Image
                    source={require("../../../../assets/icons/companies/amazon.png")}
                    style={styles.listImage}
                    contentFit="cover"
                  />
                </View>
                <View>
                  <Text style={GlobalStyles.h6}>{item.name}</Text>
                  <View style={[GlobalStyles.horizontal, { gap: 10 }]}>
                    <Text style={styles.text}>Jacob</Text>
                    <Text style={styles.text}>-</Text>
                    <Text style={styles.text}>7 hours ago</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Communities;

const styles = StyleSheet.create({
  search: {
    marginVertical: 10,
  },
  section: {
    marginVertical: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    backgroundColor: COLORS.darkBg,
    padding: 12,
    borderRadius: 12,
  },
  listImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    color: COLORS.gray,
    fontFamily: FONTS.regular,
  },
  listContainer: {
    flex: 1,
  },
});
