import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navbar}>
          <View>
            <Ionicons name="ios-arrow-back-outline" size={30} color="black" />
          </View>

          <View>
            <Text style={styles.farmtitle}>Settings</Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.image}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Theme</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Security</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>FAQ</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  farmtitle: {
    fontSize: 24,
    paddingBottom: 20,
    paddingLeft: 115,

    fontWeight: "500",
  },
  navbar: {
    flexDirection: "row",
  },
});
