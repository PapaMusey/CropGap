import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setseePassword] = useState(true);
  const [checkValidEmail, setcheckValidEmail] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titlep}>Hi, Welcome Back! 👋</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Fill in your details to login</Text>
      </View>
      <View>
        <Text style={styles.flow}>Email address</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter your email"
        />
      </View>
      <View>
        <Text style={styles.flow}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={seePassword}
          placeholder="Enter your Password"
          icon={
            <TouchableOpacity>
              <AntDesign name="eye" size={24} color="black" />
            </TouchableOpacity>
          }
        />
      </View>
      <TouchableOpacity onPress={() => console.log("navigation")}>
        <Text style={styles.fpassword}> Forgot Password</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CustomerHomePage")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.bottomtext}>Don't have an account ? </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.bText}>Sign Up</Text>
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
    color: "#777777",
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
  cart: {
    backgroundColor: "blue",
  },
  imageBackground: {
    color: "blue",
    height: 100,
    width: 100,
    // border,
  },
});
