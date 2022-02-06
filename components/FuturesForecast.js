import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import moment from "moment-timezone";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import icon_01d from "../assets/iconosdelclima/01d.png";
// import icon_10d from "../assets/iconosdelclima/10d.png";
// import icon_02d from "../assets/iconosdelclima/02d.png";
import WeatherIcon from "./WeatherIcon";

const FuturesForecast = ({ data }) => {
  return (
    <View style={{ flexDirection: "row", marginRight: wp("10%") }}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
        )
      ) : (
        <View style={styles.containerActivity}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

const FutureForecastItem = ({ forecastItem }) => {

  return (
    <View style={styles.currentContainer}>
      <Text style={{ color: '#2C394B',  textTransform:'uppercase'}}>
        {moment(forecastItem.dt * 1000).format("dddd")}
      </Text>
      <WeatherIcon icon={forecastItem.weather[0].icon} />
      <Text style={{color: '#2C394B', textTransform: 'capitalize'}}>{forecastItem.weather[0].description}</Text>
      <Text style={{ color: '#2C394B' }}>
        {Math.round(forecastItem.temp.max)}° | {Math.round(forecastItem.temp.min)}°
      </Text>
    </View>
  );
};

export default FuturesForecast;

const styles = StyleSheet.create({
  currentContainer: {
    backgroundColor: '#F6F6F6',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp('3%'),
    borderColor:  '#EDEDED',
    borderWidth: wp('0.5%'),
    padding: wp("2%"),
    marginLeft: wp("2%"),
  },
  containerActivity: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp('20%'),
    flex: 1
  },
});
