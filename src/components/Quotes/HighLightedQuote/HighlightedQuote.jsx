import styles from './HighlightedQuote.module.css';

const HighlightedQuote = ({text, author}) => {
  return (
    <figure className={styles.quote}>
      {/* Text */}
      <p className={styles.text}>{text}</p>
      {/* Author */}
      <figcaption className={styles.author}>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
