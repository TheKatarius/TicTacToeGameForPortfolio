import { useState, useEffect } from "react";
import useFetchHome from "./hooks/useFetchHome";

function App() {
	const API_URL_ALL = "https://restcountries.com/v3.1/all";
	const [data, setData] = useState([]);
	const { fetchedData, fetchError, isLoading } = useFetchHome(API_URL_ALL);

	useEffect(() => {
		setData(fetchedData);
	}, [fetchedData]);
	if (!isLoading) console.log(data[0]);
	data.forEach((country, index) => {
		if (index === 0) console.log(country);
	});
	return (
		<div className="App">
			{isLoading && <p>Loading...</p>}
			{!isLoading && fetchError && (
				<p className="statusMsg" style={{ color: "red" }}>
					{fetchError}
				</p>
			)}
			{!isLoading && !fetchError && data[0] && <p>{data[0].name.official}</p>}
		</div>
	);
}

export default App;
