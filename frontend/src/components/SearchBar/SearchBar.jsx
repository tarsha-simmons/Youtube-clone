import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import "./SearchBar.css"

let initvalues = {
    title: ""
}



const SearchBar = (props) => {
    const [formData, handleInputChange] = useCustomForm(initvalues);
    const [videos, setVideos] = useState();
    const [user, token] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        searchVideo(formData);
      };

   async function searchVideo() {
            try {
                let response = await axios.get(
                    "https://www.googleapis.com/youtube/v3/search",
                    {
                        params: {
                            q: `${formData.title}`,
                            part: "snippet",
                            type: "video",
                            key: "AIzaSyDIZc7C82S2B4rtZp82r7gN2pBi5Pnv5H4",
                            maxResults: "5"
                        }
                    }
                );
                console.log(response.data)
                setVideos(response.data);
                navigate(`/searchpage/${formData.title}`);
            } catch (error) {
                console.log("error with get search videos")
                
            }
        }; 

    return ( 
        <form className="m-2" onSubmit={handleSubmit}>
                <div>
                    <label>
                        Search:{""}
                        <input
                        type="text" 
                        name="title" 
                        value={formData.title}
                        onChange={handleInputChange}
                        />    
                    </label>
                </div>
                <button type="submit">Search</button>
        </form>
     );
}    
 
export default SearchBar;

