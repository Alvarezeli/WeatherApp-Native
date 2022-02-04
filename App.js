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
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("-34.61315", "-58.37723")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])


  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
      //console.log('soy info api', data)
      setData(data)
      })
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
        <WheatherScroll />
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
