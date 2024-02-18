import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const android = Platform.OS === "android";
const { width, height } = Dimensions.get("window");

export default function ChatScreen() {
  return (
    <SafeAreaView
      style={{
        paddingTop: android ? hp(3) : 0,
      }}
    >
      <Text>ChatScreen</Text>
    </SafeAreaView>
  );
}
