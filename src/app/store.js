import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import cardSlice from "../features/card/cardSlice";
import searchSlice from "../features/search/searchSlice";
import mySaga from "./saga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    search: searchSlice,
    card: cardSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);
