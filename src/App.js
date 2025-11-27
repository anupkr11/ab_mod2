import React, { Component, useEffect, useState } from "react";
import axios from "axios";



//CLASS BASED COMPONENT
// import Data from "./Data";
// class App extends Component {
//   state = [
//     {
//       id: 1,
//       name: "Alice",
//     },
//     {
//       id: 2,
//       name: "Bob",
//     },
//   ];

//   onClickEve = () => {
//     const updatedState = [...this.state];
//     updatedState[1] = {
//       ...updatedState[1],
//       name: "Alice Cooper",
//     };

//     this.setState(updatedState);
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.onClickEve}>
//           Name change {this.state[1].name}
//         </button>
//         <Data users={this.state}/>
//       </>
//     );
//   }
// }

const App = () => {

  //FUNCTION BASED COMPONENT WITH HOOKS USING MOVIES DATA
  // const [movies, setMovies] = useState([
  //   {
  //   id: 1,
  //   title: "Inception",
  //   year: 2010,
  //   genre: ["Sci-Fi", "Action"],
  //   rating: 8.8,
  //   duration: "2h 28m",
  //   description: "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his past crimes.",
  //   poster: "https://via.placeholder.com/300x450?text=Inception"
  // },
  // {
  //   id: 2,
  //   title: "Interstellar",
  //   year: 2014,
  //   genre: ["Sci-Fi", "Drama"],
  //   rating: 8.6,
  //   duration: "2h 49m",
  //   description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  //   poster: "https://via.placeholder.com/300x450?text=Interstellar"
  // },
  // {
  //   id: 3,
  //   title: "The Dark Knight",
  //   year: 2008,
  //   genre: ["Action", "Crime"],
  //   rating: 9.0,
  //   duration: "2h 32m",
  //   description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
  //   poster: "https://via.placeholder.com/300x450?text=Dark+Knight"
  // },
  // {
  //   id: 4,
  //   title: "Avengers: Endgame",
  //   year: 2019,
  //   genre: ["Action", "Adventure"],
  //   rating: 8.4,
  //   duration: "3h 2m",
  //   description: "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
  //   poster: "https://via.placeholder.com/300x450?text=Endgame"
  // },
  // {
  //   id: 5,
  //   title: "Parasite",
  //   year: 2019,
  //   genre: ["Thriller", "Drama"],
  //   rating: 8.6,
  //   duration: "2h 12m",
  //   description: "A poor family schemes to become employed by a wealthy household by infiltrating their lives.",
  //   poster: "https://via.placeholder.com/300x450?text=Parasite"
  // }
  // ]);

  //FUNCTION BASED COMPONENT WITH HOOKS USING AXIOS TO FETCH DATA FROM API
  const [movies, setMovies] = useState([]);
  
  useEffect(() =>{
    axios.get("https://api.tvmaze.com/search/shows?q=office").then(
      async(res) =>{
        let fetchedMovies = await res.data;
        setMovies(fetchedMovies);
      }
    ).catch((err)=>{
      console.log("Error fetching data:", err);
    });
  },[])

  const userList = movies.map((movie) => (
    <div className="flex flex-wrap justify-center gap-6 p-6">
        {movies.map((movie) => (
          <div
            key={movie.show.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-72"
          >
            <img
              src={
                movie.show.image
                  ? movie.show.image.medium
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.show.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-bold text-gray-800">
                {movie.show.name}
              </h2>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">Genre:</span>{" "}
                {movie.show.genres.join(", ")}
              </p>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">Rating:</span>{" "}
                {movie.show.rating.average || "N/A"}
              </p>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">Duration:</span>{" "}
                {movie.show.runtime || "N/A"} mins
              </p>

              <div
                className="text-sm text-gray-700 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: movie.show.summary }}
              />
            </div>
          </div>
        ))}
      </div>


  ));

  const handleSubmit = () =>{
    const updatedMovies = [...movies];
    updatedMovies[1] = {
      ...updatedMovies[1],
      title: "Interstellar 2.0"
    };
    setMovies(updatedMovies);
  }
  return (
    <>
      {userList}
      <button onClick={handleSubmit}>
        Change
      </button>
    </>
  )
}

export default App;
