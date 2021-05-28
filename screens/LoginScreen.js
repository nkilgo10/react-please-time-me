import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import { login } from "../redux/actions/loginActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [validateChecked, setValidateChecked] = useState(false);

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let em = email;
    let pass = password;

    if (
      em.trim().length === "" ||
      pass.trim().length === "" ||
      em.trim().length < 5 ||
      pass.trim().length <= 4 ||
      !validateEmail(em)
    ) {
      Alert.alert(
        "Form is incorrect",
        "Please enter a valid email and/or password must be at least 5 characters"
      );
      setFormIsValid(false);
      setValidateChecked(true);
    } else {
      setFormIsValid(true);
      setValidateChecked(true);
      dispatch(login(email, password));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginInfo}>
        <Text style={styles.loginText}>
          Please login using your creditials. New to Time Me?
        </Text>
        <TouchableOpacity onPress={() => setSignUp(!signUp)}>
          <Text style={styles.signUpText}>{signUp ? "Login" : "Sign Up"}</Text>
        </TouchableOpacity>
      </View>
      {!formIsValid && validateChecked && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Please correct form errors</Text>
        </View>
      )}
      <Text style={styles.formLabel}> {signUp ? "Sign Up" : "Login"} </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Email"
          autoCapitalize="none"
          style={styles.inputStyle}
          value={email}
          autoFocus
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Enter Password"
          style={styles.inputStyle}
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <Button
          title="Submit"
          onPress={() => {
            validateForm();
          }}
          color="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: "#fff",
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: Colors.primary,
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
  inputContainer: {
    marginBottom: 20,
  },
  errorContainer: {
    paddingBottom: 40,
  },
  errorText: {
    color: "red",
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    fontSize: 18,
  },
  loginInfo: {
    position: "absolute",
    top: 50,
  },
  loginText: {
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    fontSize: 18,
    color: "#fff",
  },
  signUpText: {
    fontFamily:
      Platform.OS === "android" ? "monospace" : "Baskerville-SemiBoldItalic",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
