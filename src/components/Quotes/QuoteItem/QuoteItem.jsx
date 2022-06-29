import styles from './QuoteItem.module.css';

const QuoteItem = ({text, author}) => {
  return (
    <li className={styles.item}>
      {/* Figure */}
      <figure className={styles.figure}>
        {/* Blockquote */}
        <blockquote className={styles.blockquote}>
            {/* Text */}
            <p className={styles.text}>{text}</p>
        </blockquote>

        <figcaption className={styles.figacaption}>
            {author}
        </figcaption>
      </figure>

      {/* Link */}
      <a className={styles.link}>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
