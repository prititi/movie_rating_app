const initialState = {
	queue: [],
};

const handleQueue = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_QUEUE":
			// Check if the movie with the same imdbID already exists in the queue
			const isMovieInQueue = state.queue.some(
				(movie) => movie.imdbID === action.movie.imdbID
			);

			if (isMovieInQueue) {
				// Movie with the same imdbID already in the queue, return current state
				return state;
			}

			// Movie not in the queue, add it to the queue
			return {
				...state,
				queue: [...state.queue, action.movie],
			};

		case "REMOVE_FROM_QUEUE":
			return {
				...state,
				queue: state.queue.filter(
					(movie) => movie.imdbID !== action.movie.imdbID
				),
			};

		default:
			return state;
	}
};

export default handleQueue;
