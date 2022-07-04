import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={styles.noquotes}>
        {/* Message */}
        <p className={styles.message}>
            No quotes found!
        </p>

        {/* Link */}
        <Link
          className={styles.link}
          to='/new-quote'
        >
          Add a Quote
        </Link>
    </div>
  );
};

export default NoQuotesFound;
