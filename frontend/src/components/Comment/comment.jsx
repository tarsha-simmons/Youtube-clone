import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Comment = (props) => {
    const { postComment } = props

    const [user, token] = useAuth() 
    const [likedButton, setLikedButton] = useState("inactive");
    const [dislikedButton, setDislikedButton] = useState("inactive");

  


    function handleClick() {
        if(likedButton === "inactive"){
          setLikedButton("liked")
          setDislikedButton("inactive")
        }
        else if (dislikedButton === "inactive"){
          setDislikedButton('disliked')
          setLikedButton("inactive")
        }
      }
    return ( 
        <div>
        <table>
        <tbody>
            <tr>
                <td>
                    {user.username}
                    {postComment.text}
                </td>
            </tr>
            <div>
            <button className={likedButton} onClick={handleClick}></button>
            <button className={dislikedButton} onClick={handleClick}></button>
            </div>
        </tbody>
        </table>
      </div>
     );
}
 
export default Comment;