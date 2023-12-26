import { createSlice } from "@reduxjs/toolkit";
import { fetchCity } from "./CityView";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default citySlice.reducer;
