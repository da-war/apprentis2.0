import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";
import GlobalStyles from "../../../constants/GlobalStyles";
import { Image } from "expo-image";

interface Props {
  title: string;
  onPressIcon: () => void;
  image?: any;
  addText?: string;
  onPressAdd?: () => void;
}

const Header: React.FC<Props> = ({
  title,
  onPressIcon,
  image = require("../../../../assets/icons/jobs.png"),
  addText,
  onPressAdd,
}) => {
  return (
    <View style={[GlobalStyles.horizontalSB]}>
      <View style={[GlobalStyles.horizontal, { paddingVertical: 20 }]}>
        <TouchableOpacity onPress={onPressIcon}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={COLORS.white}
          />
        </TouchableOpacity>
        <Image
          contentFit="contain"
          style={{ width: 25, height: 25, marginHorizontal: 10 }}
          source={image}
        />
        <Text style={GlobalStyles.h3}>{title}</Text>
      </View>
      {addText && (
        <TouchableOpacity
          onPress={onPressAdd}
          style={[GlobalStyles.horizontal, { gap: 10 }]}
        >
          <MaterialCommunityIcons
            name="plus-box-outline"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
