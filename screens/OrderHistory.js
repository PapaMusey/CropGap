import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

export default function OrderHistory() {
  const orders = [
    {
      id: 1,
      name: "Cart #4513254 has been completed",
    },
  ];
  const oneOrder = ({ item }) => <Text>{item.name}</Text>;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Order History</Text>
      </View>
      <View>
        <FlatList data={orders} renderItem={oneOrder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: "500",
    fontSize: 22,

    paddingTop: 50,
  },
});
