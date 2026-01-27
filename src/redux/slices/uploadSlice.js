import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { showSuccess, showError } from "@/lib/toast";

const initialState = {
  url: null,
  loading: false,
};

export const uploadImage = createAsyncThunk(
  "upload/uploadImage",
  async (image, { rejectWithValue }) => {
    try {
      const response = await api.post("/upload", image);
      if (response.data.success) {
        return response.data.url;
      } else {
        showError(response.data.error);
        return rejectWithValue(response.data.error);
      }
    } catch (error) {
      showError(error.response.data.error);
      return rejectWithValue(error);
    }
  },
);

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.url = action.payload;
    });
  },
});

export default uploadSlice.reducer;
