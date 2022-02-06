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
    <View style={{ height: hp("21.5%")}}>
      <ScrollView horizontal={true} style={styles.scroll}>
        <FuturesForecast
          data={weatherData && weatherData.length > 0 ? weatherData : {}}
        />
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  scroll: {
    padding: wp("3%"),
  },
});

export default WheatherScroll;
