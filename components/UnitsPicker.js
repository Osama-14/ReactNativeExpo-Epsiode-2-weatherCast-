import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
  const [label, setLabel] = useState("C°");
  const [isLabel, showLabel] = useState(false);
  return (
    <View style={styles.unitsSystem}>
      {/* <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker> */}
      <Text style>WeatherCast</Text>

      {!isLabel ? (
        <TouchableOpacity
          style={{ margin: 5, marginLeft: 10 }}
          onPress={() => showLabel(true)}
        >
          <Text style={{ fontSize: 12 }}>{label}</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ margin: 5, width:"100%" }}>
          <TouchableOpacity
            style={{ padding: 10, width: "100%" }}
            onPress={() => {
              setLabel("C°");
              showLabel(false);
              setUnitsSystem("metric");
            }}
          >
            <Text>C°</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, width: "100%" }}
            onPress={() => {
              setLabel("F°");
              showLabel(false);
              setUnitsSystem("imperial");
            }}
          >
            <Text>F°</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 40,
      },
    }),
    height: 50,
    width: 100,
    left: 20,
  },
});
