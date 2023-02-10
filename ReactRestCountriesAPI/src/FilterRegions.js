const FilterRegions = ({ filteredRegion, setFilteredRegion }) => {
	return (
		<select
			name="region"
			className="FilterRegions"
			value={filteredRegion}
			onChange={(e) => setFilteredRegion(e.target.value)}
		>
			<option value="">Filter by region</option>
			<option value="Europe">Europe</option>
			<option value="Americas">Americas</option>
			<option value="Asia">Asia</option>
			<option value="Africa">Africa</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
};

export default FilterRegions;
