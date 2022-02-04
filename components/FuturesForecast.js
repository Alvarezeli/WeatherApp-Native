import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const FuturesForecast = () => {
  return (
    <View style={{flexDirection: 'row', marginRight: wp('8%')}}>
      <FutureForecastItem/>
      <FutureForecastItem/>
      <FutureForecastItem/>
    </View>
  );
};

const FutureForecastItem = () => {
    return(
        <View style={styles.currentContainer} >
            <Text style={{color: 'white'}}>Lunes</Text>
            <Image 
             source={require("../assets/sunny.png")}
             style={{width: wp('20%'), height: hp('10%')}}
            />
            <Text style={{color: 'white'}}>20° | 30°</Text>
        </View>
    )
}

export default FuturesForecast;

const styles = StyleSheet.create({
    currentContainer:{
        flex: 1,
        backgroundColor: '#00000019',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: wp('4%'),
        marginLeft: wp('5%')
    }
});
