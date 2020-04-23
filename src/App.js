import React, {Fragment, useState} from 'react';
import Form from './components/Form';
import Quote from './components/Quote'

function App() {

  // Arrays of quotes
  const [quotes, saveQuotes] = useState([]);

  // Function that adds current and new 'quotes'
  const createQuote = quote => {
    saveQuotes([
      ...quotes,
      quote
    ]);
  }

  return (
    <Fragment>
      <h1>Patient Management</h1>
      <div className='container'>
        <div className="row">
          <div className='one-half column'>
            <Form
              createQuote={createQuote}
             />
          </div>
          <div className='one-half column'>
            <h2>Quotes</h2>
            {quotes.map(quote => (
              <Quote
              key={quote.id}
              quote={quote}
               />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
