import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { showSuccess, showError } from "@/lib/toast";

const initialState = {
  isAuthenticated: false, // { id, email }
  token: null,
  token: null,
  user: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, router }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      console.log(response, "response");
      if (response.data.success) {
        showSuccess(response.data.message);
        router.push("/admin/dashboard");
      } else {
        showError(response.data.error);
        rejectWithValue(response.data.error);
      }
      return response.data;
    } catch (error) {
      showError(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.admin = action.payload.admin;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.admin = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      });
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
