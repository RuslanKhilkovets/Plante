import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/CartSlice";


export const rootReducer = combineReducers({
  cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];