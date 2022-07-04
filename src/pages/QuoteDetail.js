import React, { useEffect, Fragment } from 'react';
import { Route, Link, useParams, useRouteMatch} from 'react-router-dom';
import useHttp from '../helpers/useHttp';
import { getSingleQuote } from '../_api/api';
import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighLightedQuote/HighlightedQuote';

import styles from '../components/Button/Button.module.css';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch(); 

    const { quoteId } = params;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if(error) {
        return <p className="centered">{error}</p>;
    }

    if(!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return(
        <Fragment>
            <HighlightedQuote 
                text={loadedQuote.text}
                author={loadedQuote.author}
            />

            <Route 
                path={match.path} 
                exact
            >
                <Link 
                    className={styles.containerFlat}
                    to={`${match.url}/comments`}
                >
                    Load Comments
                </Link>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;