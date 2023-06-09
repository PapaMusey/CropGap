import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function CreateAccountScreen({ navigation }) {
  const [isSelected, setSelection] = useState(true);

  const handleCheckboxChange = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titlep}>Create an account</Text>
      </View>
      <View>
        <Text style={styles.subtitle}> Enter your details to sign up</Text>
      </View>
      <View>
        <Text style={styles.flow}>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your full name"
        />
      </View>
      <View>
        <Text style={styles.flow}>Email address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your email"
        />
      </View>

      <View>
        <Text style={styles.flow}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Password"
        />
      </View>
      <View>
        <Text style={styles.flow}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Confirm your Password"
        />
      </View>
      <View></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.bottomtext}>Already have an account ? </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.bText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FINISH PASSWORD */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  titlep: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "left",
    paddingTop: 50,
  },
  subtitle: {
    marginBottom: 30,

    color: "#777777",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 18,
  },
  bText: {
    color: "#007E23",
    fontWeight: "500",
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 100,
    paddingLeft: 10,
    fontSize: 14,
    borderColor: "#777777",
  },
  flow: {
    color: "#777777",
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 5,
  },
  flowD: {
    textAlign: "center",
  },
  belowconfirm: {
    textAlign: "right",
    paddingTop: 10,
    paddingBottom: 40,
    color: "#777777",
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
