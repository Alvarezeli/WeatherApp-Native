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
        <Text style={styles.title}>{title}</Text>    
      <View >
      <Text style={styles.values}>
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
      <View style={{ flex: 0.80, padding: wp('3%')}}>
        <Text style={styles.detalle}>Detalles</Text>
        <View style={{flexDirection: 'row'}}>
        <WeatherItem title='Feels like' value={Math.round(current.current.feels_like)} unit='°'/>     
        <WeatherItem title='Humedad' value={current.current.humidity} unit='°'/>
        <WeatherItem title='Viento' value={ Math.round(current.current.wind_speed) } unit=' km/h'/>
        </View>
        <View View style={{flexDirection: 'row'}}>
        <WeatherItem title='Amanecer' value={moment(current.daily[0].sunrise * 1000).format('LT')} unit=' am'/>
        <WeatherItem title='Atardecer' value={moment(current.daily[0].sunset * 1000).format('LT')} unit=' pm'/>
        <WeatherItem title='Indice UV' value={ Math.round(current.current.uvi / 10) } unit=' uv'/>
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
    marginTop: wp("25%"),
  },
  detalle:{
    paddingLeft: wp('1%'),
    marginBottom: wp('1%'),
    //textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: hp('2.1%')
  },
  containerDetails: {
    flex: 1,
    padding: wp('2%'),
    margin: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
    borderColor: "#eee",
    borderWidth: wp('0.5'),
    height: hp('8%'),
    backgroundColor: 'white', //"#F7F7F7",
    shadowOpacity: 3,
    elevation: 2
  },
  title: {
    fontSize: hp('1.7%'),
    color: '#525252'
  },
  values: {
    fontWeight: 'bold',
    fontSize: hp('2.1%'),
  }
});
