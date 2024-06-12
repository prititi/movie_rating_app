import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./ParentComponent/Movies";
import Header from "./components/Header";
import MyQueue from "./ParentComponent/MyQueue";
import AllMovies from "./ParentComponent/AllMovies";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('')" }}>
          <Route path="/" element={<Movies />} />
          <Route path="/my-queue" element={<MyQueue />} />
          <Route path="/all-movies" element={<AllMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;