import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import moment from "moment-timezone";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WeatherIcon from "./WeatherIcon";

//ScrollHorizontal
const HourlyScroll = ({ hourly, details }) => {
  // console.log('soy hourly en hourlyScroll', hourly)
  // console.log('info en details', details)
  return (
    <View style={{height: hp("23.5%"), flex: 1}} >
       <Text style={styles.hoy}>
          Hoy,{" "}
          {moment(details[0].dt * 1000)
            .locale("es")
            .format("dddd LL")
            .split("de 2022")}
        </Text>
      <ScrollView horizontal={true} 
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}>
        <Hourly hour={hourly && hourly.length > 0 ? hourly : {}} />
      </ScrollView>
    </View>
  );
};

//map de las distintas horas
const Hourly = ({ hour }) => {
  // console.log('soy hour en hourly', hour)
  return (
    <View style={{ flexDirection: "row", marginRight: wp("10%") }}>
      {hour && hour.length > 0 ? (
        hour
          .slice([1], [9])
          .map((hours, idx) => (
            <HourlyForecast key={idx} hourlyForecast={hours} />
          ))
      ) : (
        <View style={styles.containerActivity}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

const HourlyForecast = ({ hourlyForecast }) => {
  //console.log('EY SOY HOURS', hourlyForecast)
  return (
    <View  style={styles.currentContainer}>
      <Text style={styles.hour}>
      {moment(hourlyForecast.dt * 1000).format('LT')}
      </Text>
      <WeatherIcon icon={hourlyForecast.weather[0].icon} />
      <Text style={styles.temp}>{Math.ceil(hourlyForecast.temp)}°</Text>
    </View>
  );
};
export default HourlyScroll;

const styles = StyleSheet.create({
  scroll: {
    padding: wp("3%"), 
  },
  hour:{
    fontWeight: 'bold',
    fontSize: hp('1.6%'),
    marginBottom: wp('2%'),
   color: 'black'
  },
  hoy: {
    paddingLeft: wp("3%"),
   // marginBottom: wp("1%"),
    fontWeight: "bold",
    fontSize: hp("2.1%"),
  },
  currentContainer: {
    backgroundColor: 'white',//"#F7F7F7",
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     borderRadius: wp("3%"),
     borderColor: "#EDEDED",
     borderWidth: wp("0.5%"),
     padding: wp("1%"),
     marginLeft: wp("2%"),
     width: wp('21%'),
     height: hp('15%'),
    shadowOpacity: 3,
     elevation: 2,
   },
   temp:{
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
    marginTop: wp('2%')
   }
});
