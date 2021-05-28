import React from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";

import LogItem from "../components/LogItem";
import Colors from "../constants/Colors";

const LogScreen = ({ navigation }) => {
  const logs = useSelector((state) => state.logs.logs);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <LogItem
            time={itemData.item.time}
            date={itemData.item.date}
            category={itemData.item.category}
            label={itemData.item.label}
          />
        )}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  buttonText: {
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    color: Colors.primary,
    fontSize: 22,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogScreen;
