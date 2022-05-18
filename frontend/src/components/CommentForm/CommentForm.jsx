import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


let initvalues = {
    text: ""
}

const CommentForm = (props) => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, postNewComment)

    async function postNewComment() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/comments/",
            formData,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            );
        } catch (error) {
            console.log("error with posting a comment")
            
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Comment:{""}
                    <input
                     type="text" 
                     name="text" 
                     value={formData.text}
                     onChange={handleInputChange}
                     />    
                </label>
            </div>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CommentForm;