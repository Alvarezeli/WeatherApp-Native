import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const DataTime = ({ current, lat, lot, timezone, name }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      // const ampm = hour >=12 ? 'pm' : 'am'

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes)
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerHour}>
        <Text>{name}</Text>
        <Text style={styles.textDay}>{date}</Text>
      </View>
    </View>
  );
};

export default DataTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("2%"),
  },
  containerHour: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: wp("20%"),
  },
  textHour: {
    fontSize: hp("5%"),
    padding: wp("1%"),
    color: "black",
  },
  textDay: {
    fontSize: hp("2%"),
    color: "black",
  },
});
