import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Company({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Images/Ghtilapia.png")} />

      <Text>Ghana Tilapia Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
});
