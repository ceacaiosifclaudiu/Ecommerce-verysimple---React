import cartReducer from "./cartReducer";
import wishListReducer from "./favoriteReducer";

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducerCart = persistReducer(persistConfig, cartReducer);
const persistedReducerWishList = persistReducer(persistConfig, wishListReducer);


export const store = configureStore({
  reducer: {
    cart: persistedReducerCart,
    wishList: persistedReducerWishList,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
