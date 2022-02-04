import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import moment from "moment-timezone";
import FuturesForecast from "./FuturesForecast";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WheatherScroll = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scroll}>
      <CurrentTemp
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FuturesForecast data={weatherData && weatherData.length > 0 ? weatherData : {}} />
    </ScrollView>
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
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  scroll: {
    flex: 0.5,
    backgroundColor: "#18181bcc",
    padding: wp("3%"),
  },
  currentContainer: {
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: wp("3%"),
  },
});

export default WheatherScroll;
