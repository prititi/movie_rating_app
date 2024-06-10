

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incRating, decRating, addToQueue } from "../redux/actions/index";
import Btn from "./Btn";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Moviecard({ movie }) {
  const dispatch = useDispatch();
  const [localRating, setLocalRating] = useState(movie.rating);
  const [addedToQueue, setAddedToQueue] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const addMovieToQueue = (movie) => {
    if (!addedToQueue) {
      dispatch(addToQueue(movie));
      setAddedToQueue(true);
      setSnackbarMessage("Movie added to Queue.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage("You already have this movie in the queue.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleDecrement = () => {
    if (localRating > 0) {
      dispatch(decRating(movie));
      setLocalRating(localRating - 1);
    }
  };

  const handleIncrement = () => {
    if (localRating < 5) {
      dispatch(incRating(movie));
      setLocalRating(localRating + 1);
    }
  };

  const stars = Array(5).fill(0);

  return (
    <div
      className={`w-80 text-white max-w-sm  bg-white border border-gray-200 m-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 movie-card ${
        isShown ? "show" : ""
      }`}
      onMouseEnter={() => setIsShown(true)}
    >
      <img
        className="p-4 rounded-t-lg m-auto movie-poster backdrop-blur-sm hover:backdrop-blur-lg img"
        style={{ opacity: "0.8" }}
        src={movie.Poster || noimage}
        alt="Movie poster"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-white dark-text-white">{movie.Title}</h5>
        <div className="flex items-center mt-2.5 mb-5 justify-between">
          <div className="flex items-center justify-between">
            <button className=" text-4xl text-red-600" onClick={handleDecrement}>
              -
            </button>
            {stars.map((_, index) => (
              <span
                key={index}
                className={`text-2xl m-2 ${
                  index < localRating ? "text-yellow-300" : "text-gray-200 dark-text-gray-600"
                }`}
              >
                {index < localRating ? "★" : "☆"}{" "}
              </span>
            ))}
            <button className="text-4xl text-green-500" onClick={handleIncrement}>
              {" "}
              +{" "}
            </button>
          </div>
          <span className="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark-bg-blue-200 dark-text-blue-800 ml-3">
            {localRating}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <Btn item="Add to Queue" onClick={() => addMovieToQueue(movie)} />
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Moviecard;


