

import React, { useEffect, useState } from "react";
import { AllMoviesData } from "../api";
import Moviecard from "../components/Moviecard";

const Movies = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// console.log(moviesData);

	// Fetch All Movies data using AllMovies API
	const fetchMoviesData = async () => {
		try {
			const res = await AllMoviesData();
			const moviesWithRatings = res.Search.map((movie) => ({
				...movie,
				rating: 0, // Initial rating
			}));
			setMoviesData(moviesWithRatings);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching Movies data:", error);
			setIsLoading(false);
		}
	};

	// Call All Movies when the All Movies component mounts
	useEffect(() => {
		fetchMoviesData();
	}, []);

	return (
		<>
			<h1 class="mb-4 text-3xl text-center  mt-12 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span className="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
					Movies
				</span>
			</h1>
			{isLoading ? (
				<div className="text-center text-white text-2xl mt-16 font-semibold">
					Loading...
				</div>
			) : (
				<div className="flex flex-wrap justify-center px-2">
					{moviesData.map((item) => (
						<Moviecard key={item.id} movie={item} />
					))}
				</div>
			)}
		</>
	);
};

export default Movies;


