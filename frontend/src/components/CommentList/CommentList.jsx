import React, {Fragment} from "react";
import Comment from "../Comment/Comment";

const DisplayPosts = (props) => {

    return ( 
        <Fragment>
            {props.element.map((commentRecord, index) => {
                return(
                     <div className="form-control">
                         <Comment commentRecord={commentRecord} />
                     </div>
                )
                }
            )}
        </Fragment>
    );
}
 
export default DisplayPosts;