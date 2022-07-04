import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import NewCommentForm from './NewCommentForm/NewCommentForm';
import useHttp from '../../helpers/useHttp';
import { getAllComments } from '../../_api/api';
import CommentsList from '../../components/Comments/CommentsList/CommentsList';
import Button from '../Button/Button';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import styles from './Comments.module.css';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments, } = useHttp(getAllComments);
  
  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId]); 
  
  let comments;

  if(status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>  
    );
  };
  
  if(status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p>No comments were added yet!</p>
  }

  return (
    <section className={styles.container}>
        {/* Headline */}
        <h2 className={styles.headline}>User Comments</h2>

        {/* Button */}
        {!isAddingComment && (
            <Button
              className={styles.button}
              onClick={startAddCommentHandler}
            >
              Add a Comment
            </Button>
        )}

        {isAddingComment && (
          <NewCommentForm
            onAddedComment={onAddedCommentHandler} 
            quoteId={quoteId} 
          />
        )}
        
        {comments}
    </section>
  );
};

export default Comments;
