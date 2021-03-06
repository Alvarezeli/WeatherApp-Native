import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import moment from "moment-timezone";
import "moment/locale/es";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WeatherIcon from "./WeatherIcon";

const FuturesForecast = ({ data }) => {
  //console.log('data en futures', data)
  return (
    <View>
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
  //console.log(forecastItem)
  return (
    <View style={styles.currentContainer}>
      <Text style={styles.textDay}>
        {moment(forecastItem.dt * 1000)
          .locale("es")
          .format("dddd")}
      </Text>
      <WeatherIcon icon={forecastItem.weather[0].icon} />
      {/* <Text style={styles.Description}>
        {forecastItem.weather[0].description}
      </Text> */}
      <View style={styles.viewTemp}>
        <Text style={{ color: "#2C394B", fontWeight: 'bold', fontSize: hp('2.2%') }}>
          {Math.ceil(forecastItem.temp.max)}° |
        </Text>
        <Text style={{ color: "#2C394B", fontSize: hp('2%') }}> {Math.ceil(forecastItem.temp.min)}°</Text>
      </View>
    </View>
  );
};

export default FuturesForecast;

const styles = StyleSheet.create({
  currentContainer: {
    flexDirection: 'row',
   backgroundColor: 'white',//"#F7F7F7",
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: wp("3%"),
    borderColor: "#EDEDED",
   borderWidth: wp("0.5%"),
    padding: wp("3.75%"),
    marginLeft: wp("2%"),
    width: wp('90%'),
    height: hp('7.5%'),
    marginBottom: wp('2.2%'),
   shadowOpacity: 3,
    elevation: 2,
  },
  containerActivity: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp("20%"),
    flex: 1,
  },
  textDay: { 
    color: "#2C394B", 
    textTransform: "capitalize",
    fontWeight: 'bold',
    fontSize: hp('2%'),
   // marginBottom: wp('1.25%')
  },
  viewTemp: {
    flexDirection: "row",
    alignItems: 'center'
  },
  Description: {
    color: "#2C394B",
    textTransform: "capitalize",
    fontSize: hp("1.4%"),
    marginTop: wp("1%"),
  },
});
