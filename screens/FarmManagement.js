import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function FarmManagement({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.navbar}>
            <View>
              <Feather
                name="menu"
                size={25}
                color="black"
                style={styles.hmenu}
              />
            </View>

            <View>
              <Text style={styles.farmtitle}>Farm Management</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.famname}>Aburi Mounatins Farm</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            Monitor management practices applied to your farm
          </Text>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>50 gallons of water</Text>
          </View>
          <View>
            <Text style={styles.category}>Irrigation</Text>
          </View>
          <View>
            <Text style={styles.date}>24-Jun-2023</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>200 crops harvest</Text>
          </View>
          <View>
            <Text style={styles.category}>Harvested Crops</Text>
          </View>
          <View>
            <Text style={styles.date}>24-Jun-2023</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>123 crops planted</Text>
          </View>
          <View>
            <Text style={styles.category}>Crops Planted</Text>
          </View>
          <View>
            <Text style={styles.date}>24-Jun-2023</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>₵120 spent on irrigation</Text>
          </View>
          <View>
            <Text style={styles.category}>Expenditure</Text>
          </View>
          <View>
            <Text style={styles.date}>24-Jun-2023</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>120 mango seeds planted</Text>
          </View>
          <View>
            <Text style={styles.category}>Crop Type</Text>
          </View>
          <View>
            <Text style={styles.date}>24-Jun-2023</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>200 crops harvest</Text>
          </View>
          <View>
            <Text style={styles.category}>Harvested Crops</Text>
          </View>
          <View>
            <Text style={styles.date}>24-Jun-2023</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
      </ScrollView>
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
  navbar: {
    flexDirection: "row",
  },
  hmenu: {
    paddingTop: 5,
  },
  famname: {
    fontSize: 22,
    fontWeight: "500",
  },
  farmtitle: {
    fontSize: 24,
    paddingBottom: 20,
    paddingLeft: 55,
    textAlign: "center",
    fontWeight: "500",
  },
  imagecontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  image: {},
  subtitle: {
    color: "#666666",
    fontSize: 15,
    paddingBottom: 5,
  },
  // category: {
  //   borderRadius: 10,
  //   borderColor: "black",
  //   borderWidth: 1,
  //   justifyContent: "right",
  // },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  containerwraper: {
    borderWidth: 1,
    borderColor: "#C6C6C6",
    backgrounColor: "white",

    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    marginVertical: 0,
  },
  date: {
    color: "#666666",
  },
});
