import React from 'react';
import { useHistory, useLocation, } from 'react-router-dom';
import { sortQuotes } from '../../../helpers/sortQuotes';
import QuoteItem from '../QuoteItem/QuoteItem';
import Button from '../../Button/Button';

import styles from './QuoteList.module.css';


const QuoteList = ({ quotes }) => {
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(quotes, isSortingAscending);

    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`,
        });
    };

    return (    
        <>
            {/* Sorting */}
            <div className={styles.sorting}>
                <Button
                    className={styles.button}
                    onClick={changeSortingHandler}
                >
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
                </Button>
            </div>

            {/* List */}
            <ul className={styles.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </>
    );
};

export default QuoteList;
