import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { showSuccess, showError } from "@/lib/toast";

const initialState = {
  isAuthenticated: false,
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

        const token = response.data.token;
        const user = response.data.data;

        // Set token in cookie for middleware
        document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;

        // Set token and user in localStorage for client-side usage (Axios etc)
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        router.push("/admin/dashboard");
      } else {
        showError(response.data.error);
        rejectWithValue(response.data.error);
      }
      return response.data;
    } catch (error) {
      showError(error.response?.data?.error || "Login failed");
      return rejectWithValue(error.response?.data?.error);
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async ({ router }, { dispatch }) => {
    try {
      // Call backend to clear cookie
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout API call failed", error);
    } finally {
      // Always cleanup client side
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      document.cookie = "token=; path=/; max-age=0";

      dispatch(logout());
      if (router) router.push("/admin/login");
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
