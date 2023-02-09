import { useState, useEffect } from "react";
import useFetchHome from "./hooks/useFetchHome";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import DisplayCountryDetail from "./DisplayCountryDetail";

function App() {
	const API_URL_ALL = "https://restcountries.com/v3.1/all";
	const [data, setData] = useState([]);
	const [searchedCountry, setSearchedCountry] = useState("");
	const [filteredRegion, setFilteredRegion] = useState("");
	const { fetchedData, fetchError, isLoading } = useFetchHome(API_URL_ALL);

	useEffect(() => {
		setData(fetchedData);
	}, [fetchedData]);

	const handleFilterData = () => {
		const searchData = data.filter((country) =>
			country.name.official
				.toLowerCase()
				.includes(searchedCountry.toLowerCase())
		);
		const filterData = searchData.filter((country) =>
			country.region.includes(filteredRegion)
		);
		return filterData;
	};

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							searchedCountry={searchedCountry}
							setSearchedCountry={setSearchedCountry}
							setFilteredRegion={setFilteredRegion}
							data={handleFilterData()}
							fetchError={fetchError}
							isLoading={isLoading}
						/>
					}
				/>
				<Route
					path="/country/:id"
					element={<DisplayCountryDetail data={data} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
