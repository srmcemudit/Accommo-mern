import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("userdata")) || null,
  isAuthenticated: JSON.parse(sessionStorage.getItem("isAuthenticated")) || false,
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

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
