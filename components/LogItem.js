import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";

const LogItem = ({ time, date, category, label }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.summary}>
        <Text style={styles.time}>Time: {time}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? "Hide Details" : "Show Details"}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailContainer}>
          <Text style={styles.headerText}>
            Category: <Text style={styles.subheaderText}>{category}</Text>
          </Text>
          <Text style={styles.headerText}>
            Label: <Text style={styles.subheaderText}>{label}</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  time: {
    fontFamily: "Baskerville-SemiBoldItalic",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  detailContainer: {
    marginTop: 10,
    padding: 15,
  },
  headerText: {
    fontSize: 22,
    fontFamily: "Baskerville-SemiBoldItalic",
    color: Colors.primary,
  },
  subheaderText: {
    fontSize: 18,
    fontFamily: "Baskerville-SemiBoldItalic",
    color: Colors.accent,
  },
});

export default LogItem;
