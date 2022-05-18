import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const VideoPage = (props) => {
    return ( 
        <div>
            <h2>VideoPage</h2>
            <VideoPlayer />
            <RelatedVideos />
        </div>
     );
}
 
export default VideoPage;