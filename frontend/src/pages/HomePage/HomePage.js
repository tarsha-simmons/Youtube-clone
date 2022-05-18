import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  console.log(user)
  console.log(token)


  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div>
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
        <Link to="addcar">Add Car!</Link>
        {cars &&
          cars.map((car) => (
            <p key={car.id}>
              {car.year} {car.make} {car.model}
            </p>
          ))};
      </div>
      <div className="container">
        <SearchBar />
      </div>
      
    </div>
  );
};

export default HomePage;
