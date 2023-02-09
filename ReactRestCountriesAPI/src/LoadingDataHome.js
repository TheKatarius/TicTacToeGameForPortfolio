import DisplayDataHome from "./DisplayDataHome";

const LoadingDataHome = ({ data, fetchError, isLoading }) => {
	return (
		<>
			{isLoading && <p>Loading...</p>}
			{!isLoading && fetchError && (
				<p className="statusMsg" style={{ color: "red" }}>
					{fetchError}
				</p>
			)}
			{!isLoading && !fetchError && <DisplayDataHome data={data} />}
		</>
	);
};

export default LoadingDataHome;
