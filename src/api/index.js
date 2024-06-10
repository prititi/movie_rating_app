import axios from "axios";

// fetching data
export const AllMoviesData = async () => {
	try {
		const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
