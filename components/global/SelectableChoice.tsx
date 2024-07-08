import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";
import AppLG from "./AppLG";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  items: string[];
  whatPressed?: (item: string) => void;
}

const SelectableChoice: React.FC<Props> = ({ items, whatPressed }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            toggleItem(item);
            whatPressed(item);
          }}
          style={[styles.item, item === selectedItem && styles.selectedItem]}
        >
          <Text
            style={[
              styles.itemText,
              item === selectedItem && styles.selectedItemText,
            ]}
          >
            {item}
          </Text>
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={24}
            color={COLORS.white}
          />

          {item === selectedItem && <AppLG />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    margin: 5,
    padding: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: COLORS.white,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectedItem: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.white,
    paddingHorizontal: 25,
    overflow: "hidden",
  },
  itemText: {
    color: COLORS.gray,
  },
  selectedItemText: {
    color: COLORS.white,
  },
});

export default SelectableChoice;
