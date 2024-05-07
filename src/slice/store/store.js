import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slice";

const store = configureStore({
  reducer: formReducer,
});

export default store;
