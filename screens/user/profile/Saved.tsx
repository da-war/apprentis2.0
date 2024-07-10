import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import GlobalStyles from "../../../constants/GlobalStyles";
import SearchTextInput from "../../../components/user/home/SearchTextInput";
import Product from "../../../components/global/Product";
import { jobs } from "../../../constants/data";
import AppHeader from "../../../components/global/AppHeader";

interface Props {
  navigation: any;
}

const data = ["Saved", "Applied", "Interviews", "Offers"];
const Saved: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = React.useState<string>("Saved");
  const [clicked, setClicked] = React.useState<boolean>(false);
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <ScrollView>
          <AppHeader title="Saved" onPressIcon={() => navigation.goBack()} />

          <View style={styles.search}>
            <SearchTextInput />
          </View>

          <View style={styles.section}>
            <Text style={GlobalStyles.h4}>Jobs</Text>
            <View style={{ marginVertical: 14 }}>
              <FlatList
                data={jobs.slice(0, 2)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Product
                    item={item}
                    onPress={() => navigation.navigate("jobDetails", { item })}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={GlobalStyles.h4}>Apprenticeships</Text>
            <View style={{ marginVertical: 14 }}>
              <FlatList
                data={jobs.slice(0, 2)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Product
                    item={item}
                    onPress={() => navigation.navigate("jobDetails", { item })}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={GlobalStyles.h4}>Events</Text>
            <View style={{ marginVertical: 14 }}>
              <FlatList
                data={jobs.slice(0, 2)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Product
                    item={item}
                    onPress={() => navigation.navigate("jobDetails", { item })}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  search: {
    marginVertical: 20,
  },
  section: {
    marginTop: 20,
  },
});
