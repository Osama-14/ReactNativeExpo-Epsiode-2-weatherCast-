import { View, Text, StyleSheet, Image } from "react-native";
import React from "react"
import { colors } from "../utils/index";



const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.WeatherInfo}>
      <Text style={styles.cityName}>{name}</Text>
      <Image style={styles.WeatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherdescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  WeatherInfo: {
    alignItems: "center",
  },
  weatherdescription: {
      textTransform: "capitalize",
  },

  WeatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
      fontSize: 40,
      color: PRIMARY_COLOR,
  },
  textSecondary: {
      fontSize: 28,
      color: SECONDARY_COLOR,
      fontWeight: '500',
      marginTop: 18,

  },
  cityName: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "san-sarif"

  }
});
