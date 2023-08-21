import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

export default function AddFarm() {
  const [selected, setSelected] = React.useState("");

  const data = [
    {
      key: "1",
      value: "Customer", //disabled: true },
    },
    { key: "2", value: "Farmer" },
    { key: "3", value: "Agric Company" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.titlep}>Add New Item</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.titleadd}>Add</Text>
        </TouchableOpacity>
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
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
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
      <KeyboardAvoidingView behavior="padding">
        <View>
          <Text style={styles.flow}>Description</Text>
          <TextInput
            style={styles.description}
            onChangeText={(text) => console.log(text)}
            placeholder="Description"
          />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.flow}>
        <Text style={styles.companyLogo}>Image Upload</Text>
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
    height: 100,

    paddingLeft: 10,
    fontSize: 14,
    borderColor: "#777777",
  },
  titlep: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    paddingRight: 0,
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
    color: "#777777",
  },
  filesize: {
    color: "#777777",
    textAlign: "center",
  },
  titleadd: {
    color: "#007E23",
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
