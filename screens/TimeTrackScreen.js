import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";
import { useDispatch } from "react-redux";
import { addLog } from "../redux/actions/logActions";

import FormDetails from "../components/FormDetails";
import Colors from "../constants/Colors";

const TimeTrackScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [time, setTime] = useState(null);

  const imageUri = {
    uri: "https://clipground.com/images/time-clock-clipart-3.png",
  };

  const { pickedCategory, pickedLabel } = route.params;

  let timer = time;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imageUri} style={styles.image}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("FormScreen")}>
            <FormDetails category={pickedCategory} label={pickedLabel} />
          </TouchableOpacity>

          <View style={styles.sectionStyle}>
            <Stopwatch
              laps
              start={isStopwatchStart}
              //To start
              reset={resetStopwatch}
              //To reset
              options={options}
              //options for the styling
              getTime={(time) => {
                timer = time;
              }}
            />
            <TouchableHighlight
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
                setTime(timer);
              }}
            >
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? "START" : "STOP"}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
              }}
            >
              <Text style={styles.buttonText}>RESET</Text>
            </TouchableHighlight>
            <View style={styles.logContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addLog(time, pickedCategory, pickedLabel));
                  setResetStopwatch(true);
                  navigation.navigate("LogScreen");
                }}
              >
                <Text style={styles.logText}>Log Time</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    color: Colors.accent,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    color: Colors.accent,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  logText: {
    color: Colors.primary,
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    textDecorationLine: "underline",
    fontSize: 24,
  },
  logContainer: {
    marginTop: 40,
  },
});

const options = {
  container: {
    backgroundColor: Colors.accent,
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};

export default TimeTrackScreen;
