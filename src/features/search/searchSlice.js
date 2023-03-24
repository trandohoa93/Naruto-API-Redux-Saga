import { createSlice } from "@reduxjs/toolkit";
import { put, call } from "redux-saga/effects";
import { fetchListPokemon } from "../../api";

// const API_BASE_URL = "https://naruto-api.fly.dev/api/v1/characters";

// export const fetchListPokemon = createAsyncThunk(
//   "pokemon/fetchListPokemon",
//   async () => {
//     const response = await fetch(`${API_BASE_URL}`);
//     const ListPokemons = await response.json();
//     return ListPokemons;
//   }
// );

const initialState = {
  searchTerm: "",
  loading: true,
  ListPokemons: [],
  filteredPokemons: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchListPokemonPending: (state) => {
      state.loading = true;
    },
    setListPokemon: (state, action) => {
      state.loading = false;
      state.ListPokemons = action.payload;
      state.filteredPokemons = action.payload;
    },
    selectInput: (state, action) => {
      state.filteredPokemons = state.ListPokemons;
      if (action.payload !== "all") {
        state.filteredPokemons = state.ListPokemons.filter((item) => {
          return item.info["Afiliação"] === action.payload;
        });
      }
    },
    searchItem: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchListPokemon.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchListPokemon.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.ListPokemons = action.payload;
  //       state.filteredPokemons = action.payload;
  //     })
  //     .addCase(fetchListPokemon.rejected, (state) => {
  //       state.loading = false;
  //     });
  // },
});
export const {
  searchItem,
  selectInput,
  fetchListPokemonPending,
  setListPokemon,
} = searchSlice.actions;

export const FETCH_LIST_POKEMON_PENDING = fetchListPokemonPending.type;

export function* fetchListPokemonSaga() {
  try {
    const data = yield call(fetchListPokemon);
    yield put(setListPokemon(data));
  } catch (error) {
    console.log(error);
  }
}

export default searchSlice.reducer;
