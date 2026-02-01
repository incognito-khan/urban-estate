import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

const initialState = {
  loading: false,
  stats: {
    totalLeads: 0,
    newLeads: 0,
    convertedLeads: 0,
    pendingLeads: 0,
    totalProperties: 0,
    totalSubscribers: 0,
  },
  recentLeads: [],
  statusSummary: [],
  error: null,
};

export const fetchDashboardStats = createAsyncThunk(
  "dashboard/fetchStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/dashboard/stats");
      if (response.data.success) {
        return response.data.data;
      }
      return rejectWithValue(response.data.error);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Something went wrong",
      );
    }
  },
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.recentLeads = action.payload.recentLeads;
        state.statusSummary = action.payload.statusSummary;
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
