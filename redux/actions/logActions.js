export const ADD_LOG = "ADD_LOG";

export const addLog = (time, category, label) => {
  return {
    type: ADD_LOG,
    time,
    category,
    label,
  };
};
