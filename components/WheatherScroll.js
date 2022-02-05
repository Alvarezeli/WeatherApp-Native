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
    <View style={{ height: hp("25%"), marginTop: wp("50%") }}>
      <ScrollView horizontal={true} style={styles.scroll}>
        {/* <CurrentTemp
          data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
        /> */}
        <FuturesForecast
          data={weatherData && weatherData.length > 0 ? weatherData : {}}
        />
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  scroll: {
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
