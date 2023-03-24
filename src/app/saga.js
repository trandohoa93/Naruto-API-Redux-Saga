import { takeLatest } from "redux-saga/effects";
import {
  fetchPokemonSaga,
  FETCH_POKEMON_PENDING,
} from "../features/card/cardSlice";

import {
  fetchListPokemonSaga,
  FETCH_LIST_POKEMON_PENDING,
} from "../features/search/searchSlice";
function* mySaga() {
  yield takeLatest(FETCH_LIST_POKEMON_PENDING, fetchListPokemonSaga);
  yield takeLatest(FETCH_POKEMON_PENDING, fetchPokemonSaga);
}
export default mySaga;
