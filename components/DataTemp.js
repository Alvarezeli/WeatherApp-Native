import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import moment from "moment-timezone";
import "moment/locale/es";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WeatherIcon from "./WeatherIcon";

const ItemTemp = ({ title, value, feel, unit}) => {
    return (
      <View style={styles.containerDetails}>
          <Text style={styles.title}>{title}</Text>    
        <View >
        <Text style={styles.values}>
          {value}
          {unit}
          {feel}
        </Text>   
        </View>
      </View>
    );
  };

const DataTemp = ({ details }) => {
  if (details && details.length > 0) {
    return (
      <View styles={{ flex: 1, padding: wp('3%')}}>
        <Text style={styles.hoy}>
          Hoy,{" "}
          {moment(details[0].dt * 1000)
            .locale("es")
            .format("dddd LL")
            .split("de 2022")}
        </Text>
        <View style={{flexDirection: 'row'}}>
        <ItemTemp title='Mañana' value={Math.round(details[0].temp.morn)} unit='°' feel={Math.round(details[0].feels_like.morn)}/>
        <ItemTemp title='Mediodia' value={Math.round(details[0].temp.day)} unit='°' feel={Math.round(details[0].feels_like.day)}/>
        <ItemTemp title='Tarde' value={Math.round(details[0].temp.eve)} unit='°' feel={Math.round(details[0].feels_like.eve)}/>
        <ItemTemp title='Noche' value={Math.round(details[0].temp.night)} unit='°' feel={Math.round(details[0].feels_like.night)}/>     
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

const styles = StyleSheet.create({
  hoy: {
    paddingLeft: wp("3%"),
    marginBottom: wp("1%"),
    fontWeight: "bold",
    fontSize: hp("2.1%"),
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
    elevation: 2,
    width: wp('20%')
  },
});

export default DataTemp;
