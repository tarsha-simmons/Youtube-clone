import React, { useState } from "react";

const CreateComment = (props) => {
    const [text, setText] = useState(' ');
    const [likes, setLikes] = useState(' ');
    const [dislikes, setDislikes] = useState(' ')

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {
            text: text,
            likes: likes,
            dislike: dislikes
        };
        console.log(newComment)

    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label></label>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
            </div>
            <div>
                <label>Likes</label>
                <input type="integer" value={likes} onChange={(event) => setLikes(event.target.value)} />
            </div>
            <div>
                <label>Dislikes</label>
                <input type="integer" value={dislikes} onChange={(event) => setDislikes(event.target.value)} />
            </div>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreateComment;