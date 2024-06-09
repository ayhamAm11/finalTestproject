import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../intialStates/user/index";

import { system_layout_actions } from "../actions/systemEvent";

import { authExtraReducers } from "../actions/auth";
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...system_layout_actions,
  },
  extraReducers(builder) {
    authExtraReducers(builder);
  },
});
export const getStatus = (state) => state.user.status;
export const {
  addUser,
} = userSlice.actions;
export default userSlice.reducer;
