const initialState = 0;

const handleRating = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state < 5 ? state + 1 : state;

		case "DECREMENT":
			return state > 0 ? state - 1 : state;

		default:
			return state;
	}
};

export default handleRating;
