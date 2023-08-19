import {
  View,
  Text,
  Image,
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
      <View style={styles.flow}>
        <Text style={styles.companyLogo}>Company Logo</Text>
        <View style={styles.uploadImage}>
          <TouchableOpacity>
            <Image
              style={{ alignSelf: "center", marginBottom: 10 }}
              source={require("../assets/Images/upload.png")}
            />
          </TouchableOpacity>

          <Text style={styles.imageContent}>Browse files to upload image</Text>
          <Text style={styles.filesize}>Maximum file size: 10Mb</Text>
        </View>
      </View>

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
    marginTop: 50,
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
  filesize: {
    color: "#777777",
    textAlign: "center",
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
  imageContent: {
    textAlign: "center",
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
  uploadImage: {
    backgroundColor: "#d2f7c2",
    paddingVertical: 5,
    marginVertical: 5,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 150,
    marginBottom: 50,
    alignItems: "center",
  },
  companyLogo: {
    marginTop: 0,
    paddingLeft: 0,
    paddingBottom: 15,
  },
});
