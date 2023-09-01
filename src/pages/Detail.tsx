import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import axios from 'axios';
import Navbar from '../components/Navbar';

const Detail = () => {
  const [movie, setMovie] = useState([]);
  // const dispatch = useDispatch();
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mode = useSelector((state: any) => state.mode.mode);
  const id = location?.state.id

  console.log(id, "id")

  const getMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDI0MjdjMWY3ZmYxZTY5NjE0ZTM0N2U2NGU0NWI0NCIsInN1YiI6IjY0ZGY3OTU0MzcxMDk3MDBjNTFlNzE3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bqUHQyyt9ZAbciDRqJo5fGzRnFf9o4GjojqS3-qn3GQ', // Replace with your API key
        },
      })
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="">
      <Navbar />
      <div className="my-5 rounded-md shadow-md">
        <div className="mt-5 text-center"></div>
        <div className="w-full flex m-5">
          <div className="w-64 gap-y-5">
            <img
              className="rounded my-5 shadow-md"
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title}
            />
          </div>
          <div>
            <table className="text-left m-5">
              <thead>
                <th>Detail</th>
              </thead>

              <tbody>
                <tr>
                  <td>Genres :</td>
                  {movie.genres && movie.genres.map((item: any, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                    </tr>
                  ))}
                </tr>
                <tr>
                  <td>Release :</td>
                  <td>{movie?.release_date}</td>
                </tr>
                <tr>
                  <td>Runtime :</td>
                  <td>{movie?.runtime} Minutes</td>
                </tr>
                <tr>
                  <td>Language:</td>
                  <td>{movie?.original_language} (English)</td>
                </tr>
                <tr>
                  <td>Overview:</td>
                  <td>{movie?.overview}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-left mx-5 my-10">
              <button
                className={`w-40 focus:outline-none hover:bg-orange-700 ${mode === true ? 'bg-gray-500 text-white' : 'bg-yellow-500'
                  }`}
              >
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
