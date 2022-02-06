import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WeatherIcon from "./WeatherIcon";
import Icon from "react-native-vector-icons/Ionicons";
import WeatherIcon2 from "./WeatherIcon2";

const DataTime = ({ current }) => {
  if (current.weather !== undefined) {
    return (
      <View style={styles.container}>
        <View style={styles.containerName}>
          <Text style={styles.textName}>{current.name}</Text>
          <View style={styles.viewImg}>
            <WeatherIcon2 icon={current.weather[0].icon} />
            <View style={{ flexDirection: "column", paddingLeft: wp("7%") }}>
              <Text style={styles.textTempCurr}>
                {Math.round(current.main.temp)}°
              </Text>
              <Text style={styles.textActual}>
                Sensación térmica de {Math.round(current.main.feels_like)}°
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.containerActivity}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
};

export default DataTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("2%"),
  },
  containerName: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: wp("15%"),
  },
  viewImg: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: wp("8%"),
    justifyContent: "center",
  },
  textName: {
    fontSize: hp("3.3%"),
    color: "black",
    fontWeight: "bold",
  },
  textActual: {
    fontSize: hp('2%')
  },
  textTempCurr: {
    fontSize: hp("11%"),
    fontWeight: "bold",
  },
  textFells: {
    fontSize: hp("2.75%"),
    textAlign: "center",
  },
});
