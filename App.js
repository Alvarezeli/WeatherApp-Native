import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState}from 'react';
import * as Location from 'expo-location';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DataTime from "./components/DataTime";
import WheatherScroll from "./components/WheatherScroll";
const API_KEY = '773d7b318020f69f1015e27434c7cc58'

export default function App() {
  //Guarda info futura y por hora
  const [data, setData] = useState({});

  //Guarda info actual
  const [current, setCurrent] = useState({});
  //console.log('soy lo que esta en el estado', current)
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("-34.61315", "-58.37723")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      //console.log(location)

      const latitude = location.coords.latitude
      const longitude =  location.coords.longitude

      //obtiene datos futuros y el minuto a minuto
      fetchDataFromApi(latitude, longitude);
      //obtiene datos presentes
      getDataApiCurrent(latitude, longitude)
    })();
  }, [])

  //ONE CALL 
  //get current, forecast and historical weather data: Minute forecast for 1 hour, Hourly forecast for 48 hours, Daily forecast for 7 days
  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
      //console.log('soy info api', data)
      setData(data)
      })
    }
    
  };

  //Current Weather Data
  //Access current weather data for any location including over 200,000 cities
  const getDataApiCurrent = (latitude, longitude) => {
    if(latitude && longitude){
      try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
        setCurrent(data)
       // console.log('info actual api', data)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("./assets/noche.jpg")}
        style={styles.img}
      >
        <DataTime current={data.current} lat={data.lat} lon={data.lon} timezone={data.timezone}/>
        <WheatherScroll weatherData={data.daily}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
