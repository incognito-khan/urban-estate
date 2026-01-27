import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { showSuccess, showError } from "@/lib/toast";

const initialState = {
  loading: false,
  leads: [],
};

export const addLead = createAsyncThunk(
  "lead/addLead",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/lead", formData);
      if (response.data.success) {
        showSuccess(response.data.message);
        return response.data.data;
      } else {
        showError(response.data.error);
        return rejectWithValue(response.data.error);
      }
    } catch (error) {
      showError(error.response.data.error || "Something went wrong");
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const getLeads = createAsyncThunk(
  "lead/getLeads",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/lead");
      if (response.data.success) {
        return response.data.data;
      }
      return rejectWithValue(response.data.error);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const updateLeadStatus = createAsyncThunk(
  "lead/updateLeadStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch("/lead", { id, status });
      if (response.data.success) {
        showSuccess("Status updated successfully");
        return { id, status };
      }
      return rejectWithValue(response.data.error);
    } catch (error) {
      showError(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const delLead = createAsyncThunk(
  "lead/delLead",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete("/lead", { data: { id } });
      if (response.data.success) {
        showSuccess("Lead deleted successfully");
        return id;
      }
      return rejectWithValue(response.data.error);
    } catch (error) {
      showError(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  },
);

const leadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addLead.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLead.fulfilled, (state, action) => {
        state.loading = false;
        state.leads.push(action.payload);
      })
      .addCase(addLead.rejected, (state) => {
        state.loading = false;
      })
      // getLeads
      .addCase(getLeads.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLeads.fulfilled, (state, action) => {
        state.loading = false;
        state.leads = action.payload;
      })
      .addCase(getLeads.rejected, (state) => {
        state.loading = false;
      })
      // updateLeadStatus
      .addCase(updateLeadStatus.fulfilled, (state, action) => {
        const index = state.leads.findIndex((l) => l.id === action.payload.id);
        if (index !== -1) {
          state.leads[index].status = action.payload.status;
        }
      })
      // delLead
      .addCase(delLead.fulfilled, (state, action) => {
        state.leads = state.leads.filter((l) => l.id !== action.payload);
      });
  },
});

export default leadSlice.reducer;
