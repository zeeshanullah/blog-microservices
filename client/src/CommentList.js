import React from "react";

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(comment => {
        return <div key={comment.id}>
            <li>{comment.content}</li>
        </div>
    });
    return <ul>
        {renderedComments}
        </ul>;
};

export default CommentList;