import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Text className="tex-3xl">index!!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
}
