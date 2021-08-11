import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { gempyModelApi } from "./services/surfacePoints";

export const store = configureStore({
  reducer: {
    [gempyModelApi.reducerPath]: gempyModelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gempyModelApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
