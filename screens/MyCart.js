import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MyCart({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>MyCart</Text>
      </View>
      <View style={styles.uppersection}>
        <View>
          {/* <Image source={require("../assets/Images/Tilapia.png")} /> */}

          <Text>Ghana Tilapia Seed Project</Text>
        </View>
        <View>
          <Text>054 4845 652</Text>
          <Text>ghseed@gmail.com</Text>
        </View>
      </View>

      <View>
        <View style={styles.bottomsection}>
          <Text>Discount</Text>
          <Text>-$12.80</Text>
        </View>
        <View>
          <Text>Sub-Total</Text>
          <Text>$57.00</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  uppersection: {
    borderwidth: 10,
    borderRadius: 30,
    backgroundColor: "#E3FFE8",
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginBottom: 120,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 18,
  },
  bottomsection: {
    paddingTop: 100,
  },
});
