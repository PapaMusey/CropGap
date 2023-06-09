import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function FarmListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.farmtitle}>Farm List</Text>
      </View>
      <View style={styles.containerwraper}>
        <View>
          <Text style={styles.title}>Create New Farm</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Location | Size of Land</Text>
          <View>
            <Text style={styles.subtitle}>
              Create farm and fill in required details
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.greenbutton}
              onPress={() => navigation.navigate("CalendarScreen")}
            >
              <Text style={styles.buttonText}>Enter Farm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerwraper}>
        <View>
          <Text style={styles.title}>Create New Farm</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            Create farm and fill in required details
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddFarm")}
          >
            <Text style={styles.buttonText}>Add Farm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
    padding: 5,
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#898989",
    borderRadius: 0,
    padding: 10,
    marginTop: 20,
  },
  subtitle: {
    color: "#666666",
    fontSize: 15,
    paddingBottom: 5,
  },
  title: {
    fontWeight: "500",
    paddingBottom: 5,
    fontSize: 18,
  },
  containerwraper: {
    borderWidth: 1,
    borderColor: "#F1F1F1",
    backgrounColor: "#FBFBFB",
    paddingHorizontal: 45,
    paddingVertical: 15,
    marginBottom: 20,
  },
  greenbutton: {
    backgroundColor: "#007E23",
    borderRadius: 0,
    padding: 10,
    marginTop: 20,
  },
  farmtitle: {
    fontSize: 25,
    paddingTop: 50,
    paddingBottom: 20,
    textAlign: "center",
    fontWeight: "500",
  },
});
