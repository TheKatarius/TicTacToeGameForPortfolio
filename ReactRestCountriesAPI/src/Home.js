import SearchCountry from "./SearchCountry";
import FilterRegions from "./FilterRegions";
import DisplayDataHome from "./DisplayDataHome";

const Home = ({
	searchedCountry,
	setSearchedCountry,
	filteredRegion,
	setFilteredRegion,
	data,
	fetchError,
	isLoading,
}) => {
	return (
		<>
			<section className="SearchAndFilter">
				<SearchCountry
					searchedCountry={searchedCountry}
					setSearchedCountry={setSearchedCountry}
				/>
				<FilterRegions
					filteredRegion={filteredRegion}
					setFilteredRegion={setFilteredRegion}
				/>
			</section>
			<DisplayDataHome
				data={data}
				fetchError={fetchError}
				isLoading={isLoading}
			/>
		</>
	);
};

export default Home;
