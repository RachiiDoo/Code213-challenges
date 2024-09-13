// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import videosReducer from "./videoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    videos: videosReducer,
  },
});

export default store;
