import "react-native-gesture-handler";
import React from "react";
import AppContainer from "./navigation/AppNavigation";
import { combineReducers, createStore } from "redux";
import logReducer from "./redux/reducers/logReducer";
import authReducer from "./redux/reducers/loginReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  logs: logReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
