import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0D0F1F" },
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
