import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function CalendarScreen() {
  return (
    <View>
      <Calendar
        // Customize the appearance of the calendar
        style={{
          paddingTop: 50,
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
        }}
        // Specify the current date
        current={"2012-03-01"}
        // Callback that gets called when the user selects a day
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        // Mark specific dates as marked
        markedDates={{
          "2023-06-01": {
            selected: true,
            marked: true,
            selectedColor: "green",
          },
          "2012-03-02": { marked: true },
          "2012-03-03": { selected: true, marked: true, selectedColor: "blue" },
        }}
      />
    </View>
  );
}
