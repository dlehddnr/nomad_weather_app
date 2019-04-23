import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00c6fb", "#005bea"],
    title: "Raining Suppper PowerFul",
    subtitle: "For more info look outside",
    icon: "ios-rainy"
  },
  Clear: {
    colors: ["#fef253", "#ff7300"],
    title: "Sunnnnnnnnnnnnnnnnnnnny",
    subtitle: "For more info look outside",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors: ["#00ecbc", "#007adf"],
    title: "TTTTTTTTTTTThunderSSSSSSSSStorm",
    subtitle: "For more info look outside",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors: ["#d7d2cc", "#304352"],
    title: "Cllllllllllloooooouuuuuuuuddddd",
    subtitle: "For more info look outside",
    icon: "ios-cloudy"
  },
  Snow: {
    colors: ["#7de2fc", "#b9b6e5"],
    title: "SSSSSSSSNNNNNNNOOOOOOOOOOWWWWWW",
    subtitle: "For more info look outside",
    icon: "ios-snow"
  },
  Drizzle: {
    colors: ["#89f7fe", "#66a6ff"],
    title: "Rain not much",
    subtitle: "For more info look outside",
    icon: "ios-rainy-outline"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
