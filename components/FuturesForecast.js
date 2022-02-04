import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment-timezone";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const FuturesForecast = ({ data }) => {
  return (
    <View style={{ flexDirection: "row", marginRight: wp("8%") }}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({ forecastItem }) => {
  const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
  return (
    <View style={styles.currentContainer}>
      <Text style={{ color: "white" }}>  {moment(forecastItem.dt * 1000).format("dddd")}</Text>
      <Image 
             source={img}
             style={{width: wp('20%'), height: hp('10%')}}
            />
      <Text style={{ color: "white" }}>{forecastItem.temp.max}° | {forecastItem.temp.min}°</Text>
    </View>
  );
};

export default FuturesForecast;

const styles = StyleSheet.create({
  currentContainer: {
    flex: 1,
    backgroundColor: "#00000019",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: wp("4%"),
    marginLeft: wp("5%"),
  },
});
