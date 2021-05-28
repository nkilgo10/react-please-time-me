import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";

const HomeScreen = ({ navigation }) => {
  const userEmail = useSelector((state) => state.auth.email);

  const imageUri = {
    uri: "https://clipground.com/images/time-clock-clipart-3.png",
  };

  return (
    <View style={styles.center}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
          Welcome: <Text style={styles.emailText}>{userEmail}</Text>
        </Text>
      </View>

      <Image source={imageUri} style={styles.image} />

      <TouchableOpacity
        onPress={() => navigation.navigate("FormScreen")}
        style={styles.startContainer}
      >
        <Text style={styles.text}>Start Tracking Your Time</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logTextContainer}
        onPress={() => navigation.navigate("LogScreen")}
      >
        <Text style={styles.text}>View Your Logs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  text: {
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    color: Colors.accent,
    fontSize: 18,
    textDecorationLine: "underline",
  },
  welcomeContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  welcomeText: {
    color: Colors.accent,
    fontSize: 20,
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
  },
  emailText: {
    color: Colors.primary,
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
  },
  logTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 250,
  },
  image: {
    width: "50%",
    height: "30%",
    marginTop: 50,
  },
  startContainer: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    bottom: 100,
  },
});

export default HomeScreen;
