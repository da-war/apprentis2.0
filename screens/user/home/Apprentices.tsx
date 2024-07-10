import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import Header from "../../../components/user/home/Header";
import { jobs } from "../../../constants/data";
import Product from "../../../components/global/Product";

interface Props {
  navigation: any;
}

const Apprentices: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <Header
          title="Apprentices"
          onPressIcon={() => {
            navigation.goBack();
          }}
        />
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Product
              item={item}
              onPress={() => navigation.navigate("happrenticedetails")}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Apprentices;

const styles = StyleSheet.create({});
