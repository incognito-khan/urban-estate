import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import uploadReducer from "./slices/uploadSlice";
import propertyReducer from "./slices/propertySlice";
import leadReducer from "./slices/leadSlice";
import dashboardReducer from "./slices/dashboardSlice";
import publicReducer from "./slices/publicSlice";
import newsletterReducer from "./slices/newsletterSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  upload: uploadReducer,
  property: propertyReducer,
  lead: leadReducer,
  dashboard: dashboardReducer,
  public: publicReducer,
  newsletter: newsletterReducer,
});

const persistConfig = {
  key: "urban-estate",
  storage,
  whitelist: ["auth"], // ONLY these get persisted
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
