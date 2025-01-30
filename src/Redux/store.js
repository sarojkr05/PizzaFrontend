import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import productSlice from "./Slices/ProductSlice"
import OrderSlice from "./Slices/OrderSlice"
import CartSliceReducer from "./Slices/CartSlice";
export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        product: productSlice,
        cart: CartSliceReducer,
        order: OrderSlice
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});