import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/GlobalStyles";
import SearchTextInput from "../../components/user/home/SearchTextInput";
import ExploreComponent from "../../components/explore/ExploreComponent";

interface Props {
  navigation: any;
}

const Explore: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={[GlobalStyles.screenContainer, { marginTop: 70 }]}>
      <SearchTextInput
        placeholder="Search"
        onChangeText={(text) => console.log(text)}
      />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ExploreComponent
            title="Communities"
            onPress={() => navigation.navigate("ecommunities")}
          />

          <ExploreComponent image={require("../../../assets/images/two.jpg")} />
          <ExploreComponent />
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
