import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React from "react";
import moment from "moment-timezone";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";

const WeatherItem = ({ title, value, unit}) => {
  return (
    <View style={styles.containerDetails}>
      <Text>{title}</Text>
      <View>
      <Text>
        {value}
        {unit}
      </Text>   
      </View>
    </View>
  );
};

const CurrentTemp = ({ current }) => {
  if (current && current.current && current.daily) {
    return (
      <View style={{ flex: 1, padding: wp('3%')}}>
        <Text>Detalles</Text>
        <View style={{flexDirection: 'row'}}>
        <WeatherItem title='Feels like' value={Math.round(current.current.feels_like)} unit='°'/>     
        <WeatherItem title='Humedad' value={current.current.humidity} unit='°'/>
        <WeatherItem title='Viento' value={ Math.round(current.current.wind_speed) } unit=' km/h'/>
        </View>
        <View View style={{flexDirection: 'row'}}>
        <WeatherItem title='Amanecer' value={moment(current.daily[0].sunrise * 1000).format('LT')} unit=' a.m'/>
        <WeatherItem title='Atardecer' value={moment(current.daily[0].sunset * 1000).format('LT')} unit=' p.m'/>
        <WeatherItem title='Indice UV' value={ Math.round(current.current.uvi) } unit=' uv'/>
        </View>
      
      </View>
    );
  } else {
    return (
      <View style={styles.containerActivity}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
};

export default CurrentTemp;

const styles = StyleSheet.create({
  containerActivity: {
    marginTop: wp("20%"),
  },
  containerDetails: {
    flex: 1,
    padding: wp('1.5%'),
    margin: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
    borderColor: "#eeeeee",
    borderWidth: wp('0.5'),
    height: hp('10%'),
    backgroundColor: "#00000005"


    
  }
});
