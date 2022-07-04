import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/Quotes/QuoteForm/QuoteForm';
import useHttp from '../helpers/useHttp';
import { addQuote } from '../_api/api';
 
const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(()=> {
        if(status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
        history.push('/quotes');
    }

    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
}

export default NewQuote;