import { useState, useEffect } from "react";

const useFetchHome = (dataURL) => {
	let [fetchedData, setFetchedData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async (url) => {
			try {
				const response = await fetch(url, { signal: controller.signal });
				const jsonData = await response.json();
				setIsLoading(false);
				setFetchedData(jsonData);
			} catch (err) {
				if (err.name === "AbortError") {
					setFetchError(err.message);
					setFetchedData([]);
				}
			}
		};
		fetchData(dataURL);

		return () => {
			controller.abort();
		};
	}, [dataURL]);
	return { fetchedData, fetchError, isLoading };
};

export default useFetchHome;
