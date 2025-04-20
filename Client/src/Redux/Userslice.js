import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("userdata")) || null,
  isAuthenticated: JSON.parse(sessionStorage.getItem("isAuthenticated")) || false,
};
const initialRoomState = {
  roomData: null,
  vacantRoom: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("userdata", JSON.stringify(action.payload));
      sessionStorage.setItem("isAuthenticated", JSON.stringify(true));
      
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      sessionStorage.clear();
    },
  },
});

const roomSlice = createSlice({
  name: "room",
  initialState: initialRoomState,
  reducers: {
    setRoom: (state, action) => {
      state.roomData = action.payload;
    },
    setVacant: (state,action) => {
    state.vacantRoom = action.payload;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export const {setRoom, setVacant } = roomSlice.actions;

export const userReducer = userSlice.reducer;
export const roomReducer = roomSlice.reducer;