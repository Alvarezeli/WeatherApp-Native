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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Intento = ({ current, actual, weatherData }) => {
  if (current && actual && weatherData) {
    return (
      <View style={{ flex: 1 }}>
        <DataTime current={actual} />
        <CurrentTemp current={current} />
        <WheatherScroll weatherData={weatherData} />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', }}>
        <Image
          source={require("../assets/loading-9.gif")}
          style={{width: wp('60%'), height: hp('30%'), alignItems: 'center', alignContent: 'center', marginTop: wp('73%')}}
        />
      </View>
    );
  }
};

export default Intento;

const styles = StyleSheet.create({});
