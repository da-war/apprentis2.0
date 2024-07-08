import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  items: string[];
}

const SelectableList: React.FC<Props> = ({ items }) => {
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
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
  },
  selectedItem: {
    backgroundColor: "blue",
  },
  itemText: {
    color: "black",
  },
  selectedItemText: {
    color: "white",
  },
});

export default SelectableList;
