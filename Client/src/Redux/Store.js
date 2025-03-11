import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Userslice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
