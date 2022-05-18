import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";



let initvalues = {
    title: ""
}

const SearchBar = (props) => {
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, searchVideo)
    const navigate = useNavigate()
    const [videos, setVideos] = useState()
    
    async function searchVideo() {
        try {
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search",
                {
                    params: {
                        q: formData.title,
                        part: "snippet",
                        type: "video",
                        key: "AIzaSyDSathvk7VH3JW5fPPeAET4wk-R5do7eic",
                        maxResults: "5"
                    }
                }
            );
            console.log(response.data)
            setVideos(response.data);
            navigate("/search");
        } catch (error) {
            console.log("error with get search video")
            
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    title:{""}
                    <input
                    type="text" 
                    name="title" 
                    value={formData.title}
                    onChange={handleInputChange}
                    />    
                </label>
            </div>
            <button type='submit'>Search</button>
        </form>
    );
}
 
export default SearchBar;