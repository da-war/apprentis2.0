import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Stack } from "expo-router";

import { Provider } from "react-redux";
import store from "@/store";

const _layout = () => {
  return (
    <>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </Provider>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
