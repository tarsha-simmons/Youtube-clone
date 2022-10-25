import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const refreshPage = () => {
      navigate(0);
    }
  console.log(user)
  console.log(token)


  useEffect(() => {
    const homePageVideos = async() => {
      try {
          let response = await axios.get(
              "https://www.googleapis.com/youtube/v3/search",
              {
                  params: {
                      part: "snippet",
                      type: "video",
                      key: "AIzaSyDSathvk7VH3JW5fPPeAET4wk-R5do7eic",
                      maxResults: "5"
                  }
              }
          );
          console.log(response.data)
          setVideos(response.data);
      } catch (error) {
          console.log("error with get search video")
          
      }
    };
    homePageVideos();
  }, [token])
  return (
    <div>
      <div className="container">
        <h1>Welcome to YouTube {user.username}!</h1>
      </div>
      <div className="container">
        <VideoPlayer />
        {videos.maxResults}
      </div>
    </div>
  );
};

export default HomePage;
