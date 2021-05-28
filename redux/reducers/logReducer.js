import Log from "../../models/log";
import { ADD_LOG } from "../actions/logActions";

const initialState = {
  logs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG:
      const newLog = new Log(
        new Date().toString(),
        action.time,
        action.category,
        action.label,
        new Date().toLocaleDateString("en-EN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      return {
        ...state,
        logs: state.logs.concat(newLog),
      };
  }

  return state;
};
