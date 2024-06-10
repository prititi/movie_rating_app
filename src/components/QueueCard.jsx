import React from "react";
import { useDispatch } from "react-redux";
import Btn from "./Btn";
import { removeFromQueue } from "../redux/actions";

function QueueCard({ movie }) {
	const dispatch = useDispatch();

	// remove movie from queue
	const removeFromTheQueue = (movie) => {
		dispatch(removeFromQueue(movie));
	};

	return (
		<div className="w-80 text-white m-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 movie-card">
			<a href="#" className="m-auto">
				<img
					className="p-4 rounded-t-lg m-auto movie-poster img"
					src={movie.Poster || noimage}
					alt="Movie poster"
				/>
			</a>
			<div className="px-5 pb-5">
				{movie.Title ? ( // Check if movie data is available
					<>
						<h5 className="text-xl font-semibold tracking-tight text-white dark-text-white">
							{movie.Title}
						</h5>
						<div className="flex items-center justify-center m-4">
							<Btn item="Remove" onClick={() => removeFromTheQueue(movie)} />
						</div>
					</>
				) : (
					// Display a loader when there's no data
					<div className="text-center text-white ">
						<svg
							className="animate-spin h-8 w-8 mx-auto my-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 4v7m0 0v7m0-7h-7m7 0h7"
							/>
						</svg>
						Loading...
					</div>
				)}
			</div>
		</div>
	);
}

export default QueueCard;
