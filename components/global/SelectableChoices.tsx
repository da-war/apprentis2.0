import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";
import AppLG from "./AppLG";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  items: string[];
}

const SelectableChoices: React.FC<Props> = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    const index = selectedItems.indexOf(item);
    if (index > -1) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleItem(item)}
          style={[
            styles.item,
            selectedItems.includes(item) && styles.selectedItem,
          ]}
        >
          <Text
            style={[
              styles.itemText,
              selectedItems.includes(item) && styles.selectedItemText,
            ]}
          >
            {item}
          </Text>
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={24}
            color={COLORS.white}
          />

          {selectedItems.includes(item) && <AppLG />}
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

export default SelectableChoices;
