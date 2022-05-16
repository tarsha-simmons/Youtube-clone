import React from "react";
import useCustomForm from "../../hooks/useCustomForm";


let initvalues = {
    text: ""
}

const CommentForm = (props) => {

    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues)


    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Text:{""}
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