import { StatusBar } from "expo-status-bar";
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

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("./assets/noche.jpg")}
        style={styles.img}
      >
        <DataTime />
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
