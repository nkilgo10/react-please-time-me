import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Colors from "../constants/Colors";

const FormScreen = ({ navigation }) => {
  const [category, setCategory] = useState("Shopping");
  const [textLabel, setTextLabel] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Timer Form </Text>
      <View>
        <TextInput
          placeholder="Label Your Timer"
          style={styles.inputStyle}
          value={textLabel}
          onChangeText={(text) => setTextLabel(text)}
        />
        <Text style={styles.pickerLabel}>Choose a Category </Text>
        <Picker
          selectedValue={category}
          onValueChange={(currentCategory) => setCategory(currentCategory)}
        >
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Working Out" value="Working Out" />
          <Picker.Item label="Leisure Time" value="Leisure Time" />
          <Picker.Item label="Phone Calls" value="Phone Calls" />
          <Picker.Item label="Family Time" value="Family Time" />
          <Picker.Item label="Going Out" value="Going Out" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
        <Text
          style={{
            fontSize: 30,
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Baskerville-SemiBoldItalic",
          }}
        >
          Selected: {category}
        </Text>
        <Button
          title="Done"
          color="#fff"
          onPress={() =>
            navigation.navigate("TimeTrackScreen", {
              pickedCategory: category,
              pickedLabel: textLabel,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Baskerville-SemiBoldItalic",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#DCDCDC",
  },
  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  pickerLabel: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 40,
  },
});

export default FormScreen;
