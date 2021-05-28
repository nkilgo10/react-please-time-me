import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, Text, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { logout } from "../redux/actions/loginActions";

import HomeScreen from "../screens/HomeScreen";
import TimeTrackScreen from "../screens/TimeTrackScreen";
import FormScreen from "../screens/FormScreen";
import LoginScreen from "../screens/LoginScreen";
import LogScreen from "../screens/LogScreen";

import Colors from "../constants/Colors";

const TimeStack = createStackNavigator();

const defaultNavOptions = {
  headerTitleStyle: {
    fontFamily:
      Platform.OS === "android" ? "Roboto" : "Baskerville-SemiBoldItalic",
    color: Colors.primary,
    fontSize: 20,
  },
};

const AppContainer = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <TimeStack.Navigator screenOptions={defaultNavOptions}>
        {!isLoggedIn ? (
          <TimeStack.Screen
            name="LoginScreen"
            options={{
              title: "Login",
            }}
            component={LoginScreen}
          />
        ) : (
          <>
            <TimeStack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Welcome",
                headerRight: () => (
                  <TouchableOpacity onPress={() => dispatch(logout())}>
                    <Text
                      style={{
                        fontFamily:
                          Platform.OS === "android"
                            ? "monospace"
                            : "AvenirNextCondensed-DemiBoldItalic",
                        color: Colors.accent,
                        fontSize: 20,
                        paddingRight: 5,
                      }}
                    >
                      Logout
                    </Text>
                  </TouchableOpacity>
                ),
              }}
            />
            <TimeStack.Screen
              name="TimeTrackScreen"
              component={TimeTrackScreen}
              options={{ title: "Time Tracker" }}
            />
            <TimeStack.Screen
              name="FormScreen"
              component={FormScreen}
              options={{ title: "Timer Details" }}
            />
            <TimeStack.Screen
              name="LogScreen"
              component={LogScreen}
              options={{ title: "Your Time Logs" }}
            />
          </>
        )}
      </TimeStack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
