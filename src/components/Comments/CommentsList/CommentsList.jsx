import React from 'react';
import CommentItem from '../CommentItem/CommentItem';

import styles from './CommentsList.module.css';

const CommentsList = ({comments}) => {
    return (
        <ul className={styles.container}>
            {comments.map((comment) => (
                <CommentItem 
                    key={comment.id} 
                    text={comment.text}
                />
            ))}
        </ul>
    );
};

export default CommentsList;
