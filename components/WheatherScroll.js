import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import moment from "moment-timezone";
import FuturesForecast from "./FuturesForecast";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import CurrentTemp from "./CurrentTemp";

const WheatherScroll = ({ weatherData }) => {
  return (
    <View style={{marginTop: wp('-5%'), flex: 1, paddingBottom: wp('3%')}}>
      <Text style={styles.hoy}>Pronóstico días siguientes</Text>
      <ScrollView style={styles.scroll}
      showsVerticalScrollIndicator={false}>
        <FuturesForecast
          data={weatherData && weatherData.length > 0 ? weatherData : {}}
        />
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  scroll: {
    padding: wp("1%"),
    paddingLeft: wp('3%'),
  },
  hoy: {
    paddingLeft: wp("3%"),
   marginBottom: wp("1.5%"),
    fontWeight: "bold",
    fontSize: hp("2.1%"),
  },
});

export default WheatherScroll;
