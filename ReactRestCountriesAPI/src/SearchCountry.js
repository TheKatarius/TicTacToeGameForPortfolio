import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const SearchCountry = ({ searchedCountry, setSearchedCountry }) => {
	return (
		<form className="SearchCountryForm" onSubmit={(e) => e.preventDefault()}>
			<i className="SearchIcon">
				<MdOutlineSearch />
			</i>
			<input
				type="text"
				autoFocus
				required
				placeholder="Search for a country..."
				value={searchedCountry}
				onChange={(e) => setSearchedCountry(e.target.value)}
			/>
		</form>
	);
};

export default SearchCountry;
