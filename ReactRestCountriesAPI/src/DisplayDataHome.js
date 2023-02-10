import { useNavigate } from "react-router-dom";

function DisplayDataHome({ data }) {
	const navigate = useNavigate();

	return (
		<main className="Countries">
			{data.map((country) => (
				<section
					key={country.id}
					className="CountryInfo"
					onClick={() => navigate(`/country/${country.id}`)}
				>
					<img
						src={country.flags.png}
						alt={`Flag of ${country.name.official}`}
						className="CountryFlagHome"
					/>
					<ul>
						<li className="CountryNameHome">{country.name.official}</li>
						<li>
							<span className="InfoSectionHome">Population:</span>{" "}
							{country.population}
						</li>
						<li>
							<span className="InfoSectionHome">Region:</span> {country.region}
						</li>
						<li>
							<span className="InfoSectionHome">Capital:</span>{" "}
							{country.capital}
						</li>
					</ul>
				</section>
			))}
		</main>
	);
}

export default DisplayDataHome;
