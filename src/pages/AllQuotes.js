import React, { useEffect } from 'react';
import useHttp from '../helpers/useHttp'; 
import { getAllQuotes } from '../_api/api';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import QuoteList from '../components/Quotes/QuoteList/QuoteList';
import NoQuotesFound from '../components/Quotes/NoQuotesFound/NoQuotesFound';

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(
        getAllQuotes, 
        true,
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return(
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    };
 
    if (error) {
        return <p className='centered focused'>{error}</p>;
    }
    
    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }

    return <QuoteList quotes={loadedQuotes}/>
};

export default AllQuotes;