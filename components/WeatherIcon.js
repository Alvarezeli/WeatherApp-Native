import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import icon_01d from "../assets/iconosdelclima/01d.png";
import icon_01n from "../assets/iconosdelclima/01n.png";
import icon_02d from "../assets/iconosdelclima/02d.png";
import icon_02n from "../assets/iconosdelclima/02n.png";
import icon_03d from "../assets/iconosdelclima/03d.png";
import icon_03n from "../assets/iconosdelclima/03n.png";
import icon_04d from "../assets/iconosdelclima/04d.png";
import icon_04n from "../assets/iconosdelclima/04n.png";
import icon_09d from "../assets/iconosdelclima/09d.png";
import icon_09n from "../assets/iconosdelclima/09n.png";
import icon_10d from "../assets/iconosdelclima/10d.png";
import icon_10n from "../assets/iconosdelclima/10n.png";
import icon_11d from "../assets/iconosdelclima/11d.png";
import icon_11n from "../assets/iconosdelclima/11n.png";
import icon_13d from "../assets/iconosdelclima/13d.png";
import icon_13n from "../assets/iconosdelclima/13n.png";
import icon_50d from "../assets/iconosdelclima/50d.png";
import icon_50n from "../assets/iconosdelclima/50n.png";

//para cambiar los iconos
function WeatherIcon({ icon }) {
  switch (icon) {
    case "01d":
      return (
        <Image
          source={icon_01d}
          style={styles.img}
        />
      );
    case "01n":
      return (
        <Image
          source={icon_01n}
          style={styles.img}
        />
      );
    case "02d":
      return (
        <Image
          source={icon_02d}
          style={styles.img}
        />
      );
    case "02n":
      return (
        <Image
          source={icon_02n}
          style={styles.img}
        />
      );
    case "03d":
      return (
        <Image
          source={icon_03d}
          style={styles.img}
        />
      );
    case "03n":
      return (
        <Image
          source={icon_03n}
          style={styles.img}
        />
      );
    case "04d":
      return (
        <Image
          source={icon_04d}
          style={styles.img}
        />
      );
    case "04n":
      return (
        <Image
          source={icon_04n}
          style={styles.img}
        />
      );
    case "09d":
      return (
        <Image
          source={icon_09d}
          style={styles.img}
        />
      );
    case "09n":
      return (
        <Image
          source={icon_09n}
          style={styles.img}
        />
      );
    case "10d":
      return (
        <Image
          source={icon_10d}
          style={styles.img}
        />
      );
    case "10n":
      return (
        <Image
          source={icon_10n}
          style={styles.img}
        />
      );
    case "11d":
      return (
        <Image
          source={icon_11d}
          style={styles.img}
        />
      );
    case "11n":
      return (
        <Image
          source={icon_11n}
          style={styles.img}
        />
      );
    case "13d":
      return (
        <Image
          source={icon_13d}
          style={styles.img}
        />
      );
    case "13n":
      return (
        <Image
          source={icon_13n}
          style={styles.img}
        />
      );
    case "50d":
      return (
        <Image
          source={icon_50d}
          style={styles.img}
        />
      );
    case "50n":
      return (
        <Image
          source={icon_50n}
          style={styles.img}
        />
      );
    default:
      return (
        <View>
          <Text>Img not found</Text>
        </View>
      );
  }
}

export default WeatherIcon;

const styles = StyleSheet.create({
  img:  { width: wp("11.7%"), height: hp("6%")}
});
