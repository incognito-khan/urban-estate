import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

const initialState = {
  loading: false,
  success: false,
  error: null,
  message: "",
  subscribers: [],
};

export const subscribeToNewsletter = createAsyncThunk(
  "newsletter/subscribe",
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.post("/newsletter", { email });
      if (response.data.success) {
        return response.data.message;
      } else {
        return rejectWithValue(response.data.error);
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error ||
          "Failed to subscribe. Please try again later.",
      );
    }
  },
);

export const getNewsletters = createAsyncThunk(
  "newsletter/getNewsletters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/newsletter");
      if (response.data.success) {
        return response.data.data;
      } else {
        return rejectWithValue(response.data.error);
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to fetch subscribers.",
      );
    }
  },
);

export const deleteNewsletter = createAsyncThunk(
  "newsletter/deleteNewsletter",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete("/newsletter", { data: { id } });
      if (response.data.success) {
        return id;
      } else {
        return rejectWithValue(response.data.error);
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to remove subscriber.",
      );
    }
  },
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    resetNewsletterStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToNewsletter.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(subscribeToNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload;
      })
      .addCase(subscribeToNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(getNewsletters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewsletters.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = action.payload;
      })
      .addCase(getNewsletters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteNewsletter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.subscribers = state.subscribers.filter(
          (s) => s.id !== action.payload,
        );
      })
      .addCase(deleteNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetNewsletterStatus } = newsletterSlice.actions;
export default newsletterSlice.reducer;
