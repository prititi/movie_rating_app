// For increasing the rating
export const incRating = (movie) => {
	return {
		type: "INCREMENT",
		movie: {
			...movie,
			rating: Math.min(movie.rating + 1, 5), // Ensure rating does not exceed 5
		},
	};
};

// For decreasing the rating
export const decRating = (movie) => {
	return {
		type: "DECREMENT",
		movie: {
			...movie,
			rating: Math.max(movie.rating - 1, 0), // Ensure rating does not go below 0
		},
	};
};

// For Adding movie to queue
export const addToQueue = (movie) => {
	return {
		type: "ADD_TO_QUEUE",
		movie,
	};
};
// For Removing movie to queue
export const removeFromQueue = (movie) => {
	return {
		type: "REMOVE_FROM_QUEUE",
		movie,
	};
};
