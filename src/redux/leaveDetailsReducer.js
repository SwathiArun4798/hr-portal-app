import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLeaveDetails = createAsyncThunk("user/fetchLeaveDetails", async () => {
  const response = await axios.get("http://localhost:8000/leaveDetails");
  return response.data;
});

export const addLeaveDetails = createAsyncThunk("user/addLeaveDetails", async (data) => {
  const response = await axios.post("http://localhost:8000/leaveDetails", data);
  return response.data;
});

export const updateLeaveDetails = createAsyncThunk("data", async (data) => {
  const response = await axios.put(
    `http://localhost:8000/leaveDetails/${data.id}`,
    data
  );
  return response.data;
});

const leaveDetailsSlice = createSlice({
  name: "leaveDetails",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchLeaveDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLeaveDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(fetchLeaveDetails.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
      state.error = true;
    });

    builder.addCase(addLeaveDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addLeaveDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = false;
    });
    builder.addCase(addLeaveDetails.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = true;
    });


    builder.addCase(updateLeaveDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateLeaveDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(updateLeaveDetails.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = true;
    });
  },
});


export default leaveDetailsSlice.reducer;

