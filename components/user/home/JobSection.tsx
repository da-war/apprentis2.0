import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../constants/GlobalStyles";
import { COLORS } from "../../../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  title: string;
  data: string[];
}

const JobSection: React.FC<Props> = ({ title, data }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={[GlobalStyles.h5, { marginBottom: 15 }]}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={[GlobalStyles.horizontal, GlobalStyles.m5v, { gap: 10 }]}
          >
            <MaterialCommunityIcons
              name="circle"
              size={15}
              color={COLORS.gray}
            />
            <Text style={GlobalStyles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default JobSection;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
  },
});
