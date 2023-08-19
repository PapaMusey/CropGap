import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";

export default function CompanyBuyerPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Ionicons name="md-chevron-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.companyname}>Melavor Farm Consult</Text>
        </View>
      </View>
      <View style={styles.searchbar}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}
            placeholder="Search"
          />
        </View>
        <View style={styles.background}>
          <EvilIcons
            name="search"
            size={40}
            color="white"
            style={styles.iconStyle}
          />
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.subheader}> Fish Farming</Text>
        <TouchableOpacity>
          <Text style={styles.subheader1}> View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.c}>
        <View style={styles.card}>
          <View>
            <Image
              source={require("../assets/Images/CheckoutCardImage.png")}
              style={styles.cart}
            />
          </View>
          <View>
            <Text style={styles.bolden}> Ghana Tilapia Seed Project</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 7,
  },
  cart: {
    borderWidth: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 180,
    width: 180,
    resizeMode: "cover",
    marginTop: 0,
  },
  c: {
    flexDirection: "row",
  },

  bolden: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 0,
  },

  totalprice: {
    color: "#7F8184",
    textAlign: "right",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "500",
  },
  subheader1: {
    color: "#A3A3A2",
    fontSize: 17,
  },
  search: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    width: 320,
  },
  searchbar: {
    marginHorizontal: 5,
    flexDirection: "row",
  },
  iconStyle: {
    margin: 5,
    paddingTop: 3,
  },
  background: {
    backgroundColor: "green",
    borderRadius: 10,
    marginLeft: 18,
  },
  navbar: {
    flexDirection: "row",
  },
  companyname: {
    marginLeft: 60,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  card: {},
});
