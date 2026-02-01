import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

const initialState = {
  loading: false,
  stats: {
    totalProperties: 2847,
    verifiedAgents: 156,
    clientSatisfaction: 98,
    awardsWon: 12,
    activeListings: 0,
  },
  error: null,
};

export const fetchPublicStats = createAsyncThunk(
  "public/fetchStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/public-stats");
      if (response.data.success) {
        return response.data.data;
      }
      return rejectWithValue(response.data.error);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to fetch public stats",
      );
    }
  },
);

const publicSlice = createSlice({
  name: "public",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPublicStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = { ...state.stats, ...action.payload };
      })
      .addCase(fetchPublicStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default publicSlice.reducer;
