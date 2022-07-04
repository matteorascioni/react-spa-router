import React, { useRef, useEffect, useState } from 'react';
import useHttp from '../../../helpers/useHttp';
import { addComment } from '../../../_api/api';
import Button from '../../Button/Button';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

import styles from './NewCommentForm.module.css';

const NewCommentForm = ({ onAddedComment, quoteId }) => {
    const[textArea, setTextArea] = useState('');
    const commentTextRef = useRef();

    const { sendRequest, status, error } = useHttp(addComment);

    useEffect(() => {
        if(status === 'completed' && !error) {
            onAddedComment();
        }
    }, [status, error, onAddedComment]);

    const submitFormHandler = (event) => {
        event.preventDefault();
        setTextArea('');
        const enteredText = commentTextRef.current.value;

        sendRequest({
            commentData: { text: enteredText, }, 
            quoteId: quoteId,
        });
    };

    return (
        <form 
            className={styles.container} 
            onSubmit={submitFormHandler}
        >
            {status === 'peding' && (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            )}
            {/* Control */}
            <div 
                className={styles.control} 
                onSubmit={submitFormHandler}
            >
                {/* Label */}
                <label
                    className={styles.label}
                    htmlFor='comment'
                >
                    Your Comment
                </label>
                {/* Textarea */}
                <textarea 
                    value={textArea}
                    onChange={e => setTextArea(e.target.value)}
                    className={styles.textarea}
                    id='comment'
                    rows='5'
                    ref={commentTextRef}
                ></textarea>
            </div>
            {/* Button Container */}
            <div>
                <Button
                    className={styles.button}
                >
                    Add Comment
                </Button>
            </div>
        </form>
    );
};

export default NewCommentForm;
