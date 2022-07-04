import React from 'react';

import styles from './CommentItem.module.css';

const CommentItem = ({text}) => {
    return (
        <li className={styles.container}>
            <p>{text}</p>
        </li>
  );
};

export default CommentItem;
