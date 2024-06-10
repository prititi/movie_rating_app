import React from "react";

function AllMoviesCard({ movie }) {
	return (
		<div className="min-h-full my-20 mx-2 flex flex-col justify-center sm:py-12">
			<div className="py-3 sm:max-w-xl sm:mx-auto">
				<div className="shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-8 flex space-x-8 ">
					<div className="h-48 overflow-visible w-1/2 movie-card">
						<img
							className="rounded-3xl shadow-lg .img"
							src={movie.Poster}
							alt="movie-img"
						/>
					</div>
					<div className="flex flex-col w-1/2 space-y-4">
						<div className="flex justify-between items-start">
							<h2 className="text-3xl text-white font-bold">{movie.Title}</h2>
						</div>
						<div>
							<div className="text-sm text-white text-gray-400">
								{movie.Type}
							</div>
							<div className="text-lg text-white">{movie.Year}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllMoviesCard;
