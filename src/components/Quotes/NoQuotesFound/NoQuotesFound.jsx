import styles from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={styles.noquotes}>
        {/* Message */}
        <p className={styles.message}>
            No quotes found!
        </p>

        {/* Link */}
        <a className={styles.link}>
            Add a Quote
        </a>
    </div>
  );
};

export default NoQuotesFound;
