import { configureStore} from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";



const store = configureStore ({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reduxImmutableStateInvariant()),
  devTools: process.env.NODE_ENV !== "production" // Only use DevTools in development
});

export default store;

