import React, { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentList from "../../components/CommentList/CommentList";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const VideoPage = (props) => {
    const [comments, setAllComments] = useState()
    const [user, token] = useAuth()

    useEffect(() => {
        const getComments = async() => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/comments/all/", {
                    headers: {
                        Authorization: "Bearer" + token,
                    },
                });
                console.log(response.data)
                setAllComments(response.data)
            } catch (error) {
                console.log("error with get all comments")
            }
        };
        getComments();
    }, [token])


    return ( 
        <div>
            <h2>VideoPage</h2>
            <VideoPlayer />
            <RelatedVideos />
            <CommentList getAllCommentsProperty={comments}/>
        </div>
     );
}
 
export default VideoPage;