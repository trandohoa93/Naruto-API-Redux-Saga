import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { fetchListPokemon } from "../../features/search/searchSlice";
import Loading from "../../components/App/Loading";
import Pagination from "../../components/App/Pagination";
import SearchForm from "../../components/App/SearchFrom";
import SelectInput from "../../components/App/SelectInput";
import { fetchListPokemonPending } from "../../features/search/searchSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListPokemonPending());
  }, []);

  const loading = useSelector((state) => state.search.loading);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <div className="pt-10 pr-10 pf-10">
        <SearchForm />
        <SelectInput />
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
