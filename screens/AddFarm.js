import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

export default function AddFarm() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titlep}>Add New Item</Text>
      </View>

      <View>
        <Text style={styles.flow}>Item Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Name of Item"
        />
      </View>
      <View>
        <Text style={styles.flow}>Category</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Category of item"
        />
      </View>

      <View>
        <Text style={styles.flow}>Quantity</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          keyboardType="numeric"
          placeholder="Number of Item (s)"
        />
      </View>

      <View>
        <Text style={styles.flow}>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          keyboardType="numeric"
          placeholder="Weight of Item"
        />
      </View>

      <View>
        <Text style={styles.flow}>Unit Price</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          keyboardType="numeric"
          placeholder="Unit Price"
        />
      </View>
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.flow}>Description</Text>
          <TextInput
            style={styles.description}
            onChangeText={(text) => console.log(text)}
            placeholder="Description"
          />
        </View>

        <View>
          <Text style={styles.flow}>Image Upload</Text>
          <TextInput
            style={styles.description}
            onChangeText={(text) => console.log(text)}
            placeholder="Description"
          />
        </View>
      </KeyboardAvoidingView>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 0,
    marginTop: 400,
  },

  flow: {
    color: "#777777",
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 5,
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
  description: {
    borderRadius: 10,
    borderWidth: 1,
    height: 125,
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingLeft: 10,
    fontSize: 14,
    borderColor: "#777777",
    textAlign: "left",
  },
  titlep: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
    paddingRight: 0,
  },
});
