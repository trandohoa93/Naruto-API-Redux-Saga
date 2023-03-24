import axios from "axios";

const API_BASE_URL = "https://naruto-api.fly.dev/api/v1/characters/";

export async function fetchPokemon(action) {
  const id = action.payload;
  const response = await axios
    .get(`${API_BASE_URL}${id}`)
    .then((response) => response.data);
  return response;
}

export async function fetchListPokemon() {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
}
