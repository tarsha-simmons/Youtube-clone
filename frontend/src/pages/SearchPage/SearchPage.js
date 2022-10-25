import React, {useEffect, useState} from "react";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";

let initvalues = {
    title: ""
}

const SearchPage = (props) => {
    const {searchquery} = useParams();
    const [videos, setVideos] = useState();
    const [user, token] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        const searchVideo = async () => {
            try {
                let response = await axios.get(
                    "https://www.googleapis.com/youtube/v3/search",
                    {
                        params: {
                            q: `${searchquery}`,
                            part: "snippet",
                            type: "video",
                            key: "AIzaSyDIZc7C82S2B4rtZp82r7gN2pBi5Pnv5H4",
                            maxResults: "5"
                        }
                    }
                );
                console.log(response.data)
                setVideos(response.data);
            } catch (error) {
                console.log("error with get search videos")
                
            }
        }; 
        searchVideo();
    });
    


    return ( 
        <div>   
            <h2>Search Page</h2>
        </div>

     );
}
 
export default SearchPage;