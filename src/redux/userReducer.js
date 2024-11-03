import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("http://localhost:8000/users");
  return response.data;
});

export const addUser = createAsyncThunk("user/addUser", async (data) => {
  const response = await axios.post("http://localhost:8000/users", data);
  return response.data;
});

export const updateUser = createAsyncThunk("data", async (data) => {
  const response = await axios.put(
    `http://localhost:8000/users/${data.id}`,
    data
  );
  console.log(response);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = true;
    });

    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = false;
    });
    builder.addCase(addUser.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = true;
    });


    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = true;
    });
  },
});


export default userSlice.reducer;

