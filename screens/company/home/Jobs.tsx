import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import Header from "../../../components/user/home/Header";
import { jobs } from "../../../constants/data";
import Product from "../../../components/global/Product";

interface Props {
  navigation: any;
}

const Jobs: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <Header
          title="Jobs"
          onPressIcon={() => {
            navigation.goBack();
          }}
          addText="Search Jobs"
          onPressAdd={() => navigation.navigate("companyCreateJobs")}
        />
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Product
              item={item}
              onPress={() => navigation.navigate("hjobDetails", { item })}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Jobs;

const styles = StyleSheet.create({});
