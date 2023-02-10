import { useParams, Link, useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import DisplayInfoDetail from "./DisplayInfoDetail";

const DisplayCountryDetail = ({ data }) => {
	const { id } = useParams();
	const isCountry = data.find((country) => country.id.toString() === id); // if country exists

	const navigate = useNavigate();
	const handleClick = (e) => {
		e.preventDefault();
		navigate("/");
	};

	return (
		<>
			{!isCountry && (
				<main className="CountryNotFound">
					<p>Country Not Found</p>
					<Link to="/">Back To Homepage</Link>
				</main>
			)}
			{isCountry && data[id] && (
				<main className="AllInfoDetail">
					<button className="GoBackButton" onClick={handleClick}>
						<span className="ArrowIcon">
							<HiArrowNarrowLeft />
						</span>
						Back
					</button>
					<DisplayInfoDetail data={data} id={id} />
				</main>
			)}
		</>
	);
};

export default DisplayCountryDetail;
