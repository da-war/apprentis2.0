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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { jobs } from "../../constants/data";
import Product from "../../components/global/Product";
import SearchTextInput from "../../components/user/home/SearchTextInput";

interface Props {
  navigation: any;
}

const data = ["Saved", "Applied", "Interviews", "Offers"];
const Manage: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = React.useState<string>("Saved");
  const [clicked, setClicked] = React.useState<boolean>(false);
  return (
    <View style={GlobalStyles.parentContainer}>
      <View style={GlobalStyles.screenContainer}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => setClicked(!clicked)}
            style={[GlobalStyles.horizontal, { gap: 5 }]}
          >
            <Text style={GlobalStyles.h4}>{selected}</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          {clicked && (
            <View style={GlobalStyles.shadow}>
              <FlatList
                data={data}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(item);
                      setClicked(false);
                    }}
                  >
                    <Text style={GlobalStyles.text}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}

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

export default Manage;

const styles = StyleSheet.create({
  search: {
    marginVertical: 20,
  },
  section: {
    marginTop: 20,
  },
});
