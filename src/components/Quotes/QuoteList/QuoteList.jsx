import { Fragment } from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';

import styles from './QuoteList.module.css';

const QuoteList = ({quotes}) => {
    return (    
        <Fragment>
            <ul className={styles.list}>
                {quotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;
