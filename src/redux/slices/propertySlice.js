import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { showSuccess, showError } from "@/lib/toast";

const initialState = {
  property: null,
  loading: false,
  properties: [],
};

export const addProperty = createAsyncThunk(
  "property/addProperty",
  async (formData, { rejectWithValue }) => {
    try {
      console.log(formData.formData, "formData");
      const response = await api.post("/property", formData.formData);
      if (response.data.success) {
        showSuccess(response.data.message);
        return response.data.data;
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

export const getProperties = createAsyncThunk(
  "property/getProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/property");
      if (response.data.success) {
        return response.data.data;
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

export const delProperty = createAsyncThunk(
  "property/delProperty",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/property`, {
        data: { id },
      });
      if (response.data.success) {
        showSuccess(response.data.message);
        return response.data.data;
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

export const getProperty = createAsyncThunk(
  "property/getProperty",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/property/${id}`);
      if (response.data.success) {
        return response.data.data;
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

export const updateProperty = createAsyncThunk(
  "property/updateProperty",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await api.patch("/property", { id, ...formData });
      if (response.data.success) {
        showSuccess(response.data.message);
        return response.data.data;
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

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProperty.fulfilled, (state, action) => {
      state.property = action.payload;
    });
    builder.addCase(getProperties.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProperties.fulfilled, (state, action) => {
      state.properties = action.payload;
      state.loading = false;
    });
    builder.addCase(getProperties.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(delProperty.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(delProperty.fulfilled, (state, action) => {
      state.loading = false;
      state.properties = state.properties.filter(
        (property) => property.id !== action.payload.id,
      );
    });
    builder.addCase(delProperty.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getProperty.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProperty.fulfilled, (state, action) => {
      state.property = action.payload;
      state.loading = false;
    });
    builder.addCase(getProperty.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateProperty.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProperty.fulfilled, (state, action) => {
      state.property = action.payload;
      state.loading = false;
    });
    builder.addCase(updateProperty.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default propertySlice.reducer;
