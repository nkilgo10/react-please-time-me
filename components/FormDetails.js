import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const FormDetails = ({ category, label }) => {
  return (
    <View>
      <View style={styles.category}>
        <Text style={styles.text}>
          Category: <Text style={styles.secondaryText}>{category}</Text>
        </Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.text}>
          Label: <Text style={styles.secondaryText}>{label}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  label: {
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
    color: Colors.primary,
    fontFamily: "Baskerville-SemiBoldItalic",
  },
  secondaryText: {
    color: Colors.accent,
    position: "relative",
    top: 20,
  },
});

export default FormDetails;
