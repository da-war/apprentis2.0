import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";
import AppLG from "./AppLG";

interface Props {
  items: string[];
}

const SelectableListTexts: React.FC<Props> = ({ items }) => {
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
          {selectedItems.includes(item) && <AppLG />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  item: {
    margin: 5,
    padding: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
    borderRadius: 25,
  },
  selectedItem: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
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

export default SelectableListTexts;
