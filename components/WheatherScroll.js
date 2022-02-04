import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import FuturesForecast from './FuturesForecast';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const WheatherScroll = () => {
  return (
    <ScrollView 
    horizontal={true}
    style={styles.scroll}>
      <CurrentTemp />
      <FuturesForecast />
    </ScrollView>
  );
};

const CurrentTemp = () => {
    return(
        <View style={styles.currentContainer}>
            <Text style={{fontSize: hp('3%'), color: 'white', fontWeight: 'bold' }}>Sunday</Text>
            <Image 
             source={require("../assets/sunny.png")}
             style={{width: wp('20%'), height: hp('10%')}}
            />
            <View>
                <Text style={{color: 'white'}}>Night - 28.8%</Text>
                <Text style={{color: 'white'}}>Day - 35.8%</Text>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    scroll: {
       flex: 0.4,
        backgroundColor: '#18181bcc',
        padding: wp('3%'),
       
    },
    currentContainer:{
        backgroundColor: '#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: wp('3%')
    }
})

export default WheatherScroll;
