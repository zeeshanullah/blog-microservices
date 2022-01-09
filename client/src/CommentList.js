import React from "react";

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content;

        switch (comment.status) {
            case 'rejected':
                content = 'This comment has been rejected'; 
                break;
            case 'pending':
                content = 'This comment is awaiting approval';
                break;
            default:
                content = comment.content; 
                break;
        }

        return <div key={comment.id}>
            <li>{content}</li>
        </div>
    });
    return <ul>
        {renderedComments}
        </ul>;
};

export default CommentList;