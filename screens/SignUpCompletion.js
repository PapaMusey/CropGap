import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

export default function SignUpCompletion({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titlep}>Almost there </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>
          Fill in your details to complete profile
        </Text>
      </View>
      <View>
        <Text>Confirm Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter your phone number" />
      </View>
      <View>
        <Text style={styles.flow}>Address</Text>
        <TextInput style={styles.input} placeholder="Enter your address" />
      </View>
      <TouchableOpacity onPress={() => console.log("navigation")}>
        <Text style={styles.fpassword}> Forgot Password</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Complete & Login</Text>
        </TouchableOpacity>
      </View>

      {/*//WRAP IT AND MAKE IT APPEAR IN ONE ROW// */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bText: {
    color: "#007E23",
    fontWeight: "500",
  },
  fpassword: {
    textAlign: "right",
    paddingTop: 10,
    paddingBottom: 40,
    color: "#777777",
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    paddingRight: 50,
    fontSize: 14,
    borderColor: "#777777",
  },
  flow: {
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 5,
  },
  titlep: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "left",
    paddingTop: 50,
  },
  subtitle: {
    color: "#777777",
    marginBottom: 30,
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
  inputContainer: {
    flexDirection: "row",

    marginTop: 160,

    justifyContent: "center",
  },
  bottomtext: {
    color: "#777777",
    paddingLeft: 20,
  },
});
