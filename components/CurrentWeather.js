import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

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

const CurrentWeather = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({});
