import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import GlobalStyles from "../../../constants/GlobalStyles";
import { COLORS } from "../../../constants/theme";

interface SearchTextInputProps {
  placeholder?: string;
  value?: string;
  onChangeValue?: (text: string) => void;
  style?: any;
  icon?: any;
}

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  placeholder = "Search",
  value,
  onChangeValue = () => {},
  style,
  icon = require("../../../../assets/icons/search.png"),
  ...props
}) => {
  return (
    <View style={[GlobalStyles.horizontal, styles.mainContainer, style]}>
      {icon && (
        <Image source={icon} style={styles.searchIcon} contentFit="contain" />
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={COLORS.white}
        onChangeText={(text: string) => onChangeValue(text)}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default SearchTextInput;

const styles = StyleSheet.create({
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  mainContainer: {
    borderWidth: 2,
    padding: 13,
    borderRadius: 13,
    borderColor: COLORS.border,
  },
  input: {
    flex: 1,
    color: COLORS.white,
  },
});
