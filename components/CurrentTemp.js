import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import moment from "moment-timezone";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const WeatherItem = ({ title, value, unit }) => {
    return (
      <View>
        <Text>{title}</Text>
        <Text>
          {value}
          {unit}
        </Text>
      </View>
    );
  };


  const CurrentTemp = ({ data }) => {
    if (data && data.weather) {
      const img = {
        uri:
          "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png",
      };
      return (
        <View style={styles.currentContainer}>
          <Text
            style={{ fontSize: hp("3%"), color: "white", fontWeight: "bold" }}
          >
            {moment(data.dt * 1000).format("dddd")}
          </Text>
          <Image source={img} style={{ width: wp("20%"), height: hp("10%") }} />
          <View>
            <Text style={{ color: "white" }}>Night - {data.temp.night}%</Text>
            <Text style={{ color: "white" }}>Day - {data.temp.day}%</Text>
          </View>
        </View>
      );
    } else {
      return(
        <View style={styles.containerActivity}>
        <ActivityIndicator size="large"  color="#00ff00" />
      </View>
      )
    }
  };

export default CurrentTemp;

const styles = StyleSheet.create({
  currentContainer: {
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: wp("3%"),
    marginTop: wp('20%')
  },
  containerActivity:{
    marginTop: wp('20%')
  }
});
