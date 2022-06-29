import { useRef } from 'react';
import Card from '../../Card/Card';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

import styles from './QuoteForm.module.css';

const QuoteForm = ({isLoading}) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitFormHandler}>
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

        {/* Actions */}
        <div className={styles.actions}>
            {/* Button */}
            <Button className={styles.button}>
                Add Quote
            </Button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
