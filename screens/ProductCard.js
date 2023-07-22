import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function ProductCard({ navigation }) {
  return (
    <View>
      <Image source={require("../assets/Images/Ghtilapia.png")} />

      <Text>ProductCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
