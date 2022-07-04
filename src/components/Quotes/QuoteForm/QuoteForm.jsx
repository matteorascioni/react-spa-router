import React, { useState, useRef } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../../Card/Card';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Button from '../../Button/Button';

import styles from './QuoteForm.module.css';

const QuoteForm = ({onAddQuote, isLoading}) => {
  const[isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsEntering(true);
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  }

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) => `Are you sure you want leave this page (${location.pathname})? all your entered data will be lost!`
        }
      />
      <Card>
        <form 
          className={styles.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusHandler}
        >
          {/* Loading */} 
          {isLoading && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={styles.control}>
            <label className={styles.label} htmlFor='author'>Author</label>
            <input className={styles.input} type='text' id='author' ref={authorInputRef} />
          </div>

          <div className={styles.control}>
            <label htmlFor='text'>Text</label>
            <textarea className={styles.textarea} id='text' rows='5' ref={textInputRef}></textarea>
          </div>

          {/* Button Container */}
          <div className={styles.buttonContainer}>
              {/* Button */}
              <Button
                onClick={finishEnteringHandler}
                className={styles.button}
              >
                  Add Quote
              </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
