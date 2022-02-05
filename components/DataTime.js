import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const DataTime = ({current}) => {

 
 if (current.weather !== undefined) {

  const img = {
    uri:
      "http://openweathermap.org/img/wn/" + current.weather[0].icon + "@4x.png",
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.textName}>{current.name}</Text>
        <Image Image source={img} style={{ width: wp("60%"), height: hp("25%") }} />
        <Text>{Math.round(current.main.temp)}°</Text>
      </View>
    </View>
  );
 } else {
  return(
    <View style={styles.containerActivity}>
    <ActivityIndicator size="large"  color="#00ff00" />
  </View>
  )
 }

 
};


export default DataTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("2%"),
  },
  containerName:{
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: wp("15%"),
  },
  textName: {
    fontSize: hp("3.3%"),
    color: "black",
    fontWeight: 'bold'
  },
  textDay: {
    fontSize: hp("2.1%"),
    color: "black",
    
  },
});
