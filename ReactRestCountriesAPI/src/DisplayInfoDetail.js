const DisplayInfoDetail = ({ data, id }) => {
	const handleCountryBorders = (border) => {
		const borders = data.filter((country) => country.cca3 === border);
		const bordersNames = borders[0].name.common;
		return bordersNames;
	};

	return (
		<section className="MainInfoDetail">
			<img src={data[id].flags.png} alt={`Flag of ${data[id].name.official}`} />
			<article>
				<p className="MainNameDetail">{data[id].name.official}</p>
				<ul>
					<div className="LeftSideInfoDetail">
						<li key="Native Name">
							<span className="FontDetail">Native Name: </span>
							{Object.values(data[id].name.nativeName)[0].official}
						</li>
						<li key="Population">
							<span className="FontDetail">Population: </span>
							{data[id].population}
						</li>
						<li key="Region">
							<span className="FontDetail">Region:</span> {data[id].region}
						</li>
						<li key="Sub Region">
							<span className="FontDetail">Sub Region: </span>
							{data[id].subregion}
						</li>
						<li key="Capital">
							<span className="FontDetail">Capital: </span>
							{data[id].capital && data[id].capital[0]}
						</li>
					</div>
					<div className="RightSideInfoDetail">
						<li key="Top Level Domain">
							<span className="FontDetail">Top Level Domain: </span>
							{data[id].tld[0]}
						</li>
						<li key="Currencies">
							<span className="FontDetail">Currencies: </span>
							{data[id].currencies &&
								Object.values(data[id].currencies)
									.map((currency) => currency.name)
									.join(",")}
						</li>
						<li key="Languages">
							<span className="FontDetail">Languages:</span>{" "}
							{Object.values(data[id].languages).join(",")}
						</li>
					</div>
				</ul>
				<div className="BorderCountries">
					<span className="BorderCountriesString">Border Countries:</span>
					<ul>
						{data[id].borders &&
							data[id].borders.map((border, id) => (
								<li key={id}>{handleCountryBorders(border)}</li>
							))}
					</ul>
				</div>
			</article>
		</section>
	);
};

export default DisplayInfoDetail;
