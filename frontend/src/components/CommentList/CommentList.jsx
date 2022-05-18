import React, {Fragment, useEffect, useState} from "react";
import Comment from "../Comment/Comment";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const CommentList = (props) => {


    return (
        <Fragment>
            {props.getAllCommentsProperty &&
                props.getAllCommentsProperty.map((postComment, index) => {
                    return(
                        <p className="form-control" key={postComment.id}>
                            <Comment postComment={postComment} />
                        </p>
                    )
                    }
            )}
        </Fragment> 
    );
}
 
export default CommentList;