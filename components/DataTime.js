import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import WeatherIcon2 from "./WeatherIcon2";

const DataTime = ({ current }) => {
  if (current && current.weather && current.main) {
    return (
      <View style={styles.container}>
        <View style={styles.containerName}>
          <Icon name="location-sharp" size={28} />
          <Text style={styles.textName}>{current.name}</Text>
        </View>
        <View style={styles.viewImgTemp}>
          <View style={styles.viewImg}>
            <WeatherIcon2 icon={current.weather[0].icon} />
          </View>
          <View style={{ flexDirection: "column", paddingLeft: wp("7%") }}>
            <Text style={styles.textTempCurr}>
              {Math.ceil(current.main.temp)}°
            </Text>
            <Text style={styles.textDescription}> {current.weather[0].description}
            </Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: wp("13%"),
  },
  textDescription: {
    textTransform: "capitalize",
    fontSize: hp('2.25%')
  },
  viewImgTemp: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp("2%"),
  },
  viewImg: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp("3%"),
  },
  textName: {
    fontSize: hp("3.3%"),
    color: "black",
    fontWeight: "bold",
    marginLeft: wp("2%"),
  },
  textActual: {
    fontSize: hp("2%"),
    marginTop: wp("-2%"),
  },
  textTempCurr: {
    fontSize: hp("11%"),
    fontWeight: "bold",
    marginBottom: wp('-4%'),
  },
  textFells: {
    fontSize: hp("2.60%"),
    textAlign: "center",
  },
});
