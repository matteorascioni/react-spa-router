import React from 'react';
import { Link } from 'react-router-dom';

import styles from './QuoteItem.module.css';

const QuoteItem = ({text, author, id}) => {
  return (
    <li className={styles.item}>
      {/* Figure */}
      <figure className={styles.figure}>
        {/* Blockquote */}
        <blockquote className={styles.blockquote}>
            {/* Text */}
            <p className={styles.text}>{text}</p>
        </blockquote>

        {/* Figacaption */}
        <figcaption className={styles.figacaption}>
            {author}
        </figcaption>
      </figure>

      {/* Link */}
      <Link 
        className={styles.link}
        to={`/quotes/${id}`}
      >
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
