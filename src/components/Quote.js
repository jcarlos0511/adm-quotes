import React from 'react';

const Quote = ({quote}) => (
    <div className='quote'>
        <p>Pet: <span>{quote.pet}</span></p>
        <p>Owner: <span>{quote.owner}</span></p>
        <p>Date: <span>{quote.date}</span></p>
        <p>Time: <span>{quote.time}</span></p>
        <p>Summary: <span>{quote.summary}</span></p>
    </div>
);

export default Quote;
