import { createSlice } from "@reduxjs/toolkit";
import { put, call } from "redux-saga/effects";

import { fetchPokemon } from "../../api";

// const API_BASE_URL = "https://naruto-api.fly.dev/api/v1/characters/";
// export const fetchPokemon = createAsyncThunk(
//   "pokemon/fetchPokemon",
//   async (id) => {
//     const response = await fetch(`${API_BASE_URL}${id}`);
//     const Pokemon = await response.json();
//     return Pokemon;
//   }
// );

const initialState = {
  loading: true,
  Pokemon: [],
};

export const CardSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    fetchPokemonPending: (state) => {
      state.loading = true;
    },
    setPokemonSuccess: (state, action) => {
      state.loading = false;
      state.Pokemon = action.payload;
      console.log(action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchPokemon.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchPokemon.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.Pokemon = action.payload;
  //     })
  //     .addCase(fetchPokemon.rejected, (state) => {
  //       state.loading = false;
  //     });
  // },
});

export const { setPokemon, fetchPokemonPending } = CardSlice.actions;

export const FETCH_POKEMON_PENDING = fetchPokemonPending.type;

export function* fetchPokemonSaga(action) {
  try {
    const data = yield call(fetchPokemon, action);
    yield put(CardSlice.actions.setPokemonSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default CardSlice.reducer;
