export const REMOVE = "REMOVE";
export const ADD = "ADD";

export const addItem = (feature) => {
  return {
    type: ADD,
    payload: feature
  };
};

export const removeItem = (feature) => {
  return {
    type: REMOVE,
    payload: feature
  };
};
