import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { showSuccess, showError } from "@/lib/toast";

const initialState = {
  property: null,
  loading: false,
  properties: [],
  featuredProperties: [],
  pagination: {
    total: 0,
    page: 1,
    limit: 6,
    totalPages: 0,
  },
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
  async (filters = {}, { rejectWithValue }) => {
    try {
      // Build query string from filters
      const queryParams = new URLSearchParams();

      if (filters.location) queryParams.append("location", filters.location);
      if (filters.type) queryParams.append("type", filters.type);
      if (filters.listingType)
        queryParams.append("listingType", filters.listingType);
      if (filters.minPrice) queryParams.append("minPrice", filters.minPrice);
      if (filters.maxPrice) queryParams.append("maxPrice", filters.maxPrice);
      if (filters.beds) queryParams.append("beds", filters.beds);
      if (filters.baths) queryParams.append("baths", filters.baths);
      if (filters.page) queryParams.append("page", filters.page);
      if (filters.limit) queryParams.append("limit", filters.limit);
      if (filters.sortBy) queryParams.append("sortBy", filters.sortBy);
      if (filters.isFeatured)
        queryParams.append("isFeatured", filters.isFeatured);
      if (filters.garage) queryParams.append("garage", filters.garage);
      if (filters.swimmingPool)
        queryParams.append("swimmingPool", filters.swimmingPool);
      if (filters.balcony) queryParams.append("balcony", filters.balcony);
      if (filters.garden) queryParams.append("garden", filters.garden);

      const queryString = queryParams.toString();
      const url = queryString ? `/property?${queryString}` : "/property";

      const response = await api.get(url);
      if (response.data.success) {
        return response.data; // Return full data including pagination
      }
    } catch (error) {
      showError(error.response.data.error);
      return rejectWithValue(error);
    }
  },
);

export const getFeaturedProperties = createAsyncThunk(
  "property/getFeaturedProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/property?isFeatured=true&limit=3");
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
      state.properties = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    });
    builder.addCase(getFeaturedProperties.fulfilled, (state, action) => {
      state.featuredProperties = action.payload;
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
      // Update the property in the list as well
      const index = state.properties.findIndex(
        (p) => p.id === action.payload.id,
      );
      if (index !== -1) {
        state.properties[index] = action.payload;
      }
    });
    builder.addCase(updateProperty.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default propertySlice.reducer;
