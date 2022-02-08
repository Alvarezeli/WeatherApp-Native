import {
  requireNativeComponent,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import WheatherScroll from "./WheatherScroll";
import CurrentTemp from "./CurrentTemp";
import DataTime from "./DataTime";
import DataTemp from "./DataTemp";
import HourlyScroll from "./HourlyScroll";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Intento = ({ current, actual, weatherData, hourly}) => {
  if (current && actual && weatherData && hourly) {
    return (
      <View style={{ flex: 1 }}>
        <DataTime current={actual} />
        <CurrentTemp current={current} />
        <HourlyScroll hourly={hourly} details={weatherData}/>
        <WheatherScroll weatherData={weatherData} />
      </View>
    );
   
  } else {
    return (
      <View style={{ flex: 1, alignContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/cargando.png")}
          style={{ height: hp("100%"), width: wp("100%") }}
        />
      </View>
    );
  }
};


export default Intento;

const styles = StyleSheet.create({});
