import React, {useState, useEffect} from "react"
import axios from "axios"

const RelatedVideos = (props) => {
    const [relatedVideos, setRelatedVideos] = useState()

    useEffect(() => {
        const getRelatedVideo = async () => {
            try {
                let response = await axios.get(
                    "https://www.googleapis.com/youtube/v3/search",
                    {
                        params: {
                            relatedToVideoId: "kqtD5dpn9C8",
                            part: "snippet",
                            type: "video",
                            key: "AIzaSyDSathvk7VH3JW5fPPeAET4wk-R5do7eic",
                            maxResults: "5"
                        }
                    }
                );
                console.log(response.data)
                setRelatedVideos(response.data); 
            } catch (error) {
                console.log("error with get search video")
                
            }
        };
        getRelatedVideo();
    }, []);

    return ( 
        <h2>RelatedVideos</h2>
     );
}
 
export default RelatedVideos;