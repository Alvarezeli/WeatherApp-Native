import { StyleSheet, Text, View } from "react-native";
import React, {useEffect, useState} from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DataTime = ({current, lat, lot, timezone}) => {

  const[date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
      const minutes = time.getMinutes();
     // const ampm = hour >=12 ? 'pm' : 'am'
  
      setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)) 
  
      setDate(days[day] + ', ' + date+ ' ' + months[month]) 
  
  }, 1000);
  }, []);
  

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerHour}>     
            <Text style={styles.textHour}>{time}</Text>
            <Text style={styles.textDay}>{date}</Text>
        </View>
        <View>
          <WeatherItem title="Humedad" value="79" unidad="%" />
          <WeatherItem title="Presión" value="79" unidad="hPA" />
          <WeatherItem title="Amanecer" value="06:00" unidad="am" />
          <WeatherItem title="Atardecer" value="06:30" unidad="pm" />
        </View>
      </View>
      <View>
        <Text>{timezone}</Text>
      </View>
    </View>
  );
};

export default DataTime;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    padding: wp('2%')
   // flexDirection: "row",
  //  justifyContent: "space-between",
  },
  containerHour:{
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: wp('20%'),
  },
  textHour:{
    fontSize: hp('5%'),
    padding: wp('1%'),
    color: 'white'
  },
  textDay:{
    fontSize: hp('2%'),
    color: 'white'
  }
});
