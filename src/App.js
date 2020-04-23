import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Quote from "./components/Quote";

function App() {
  // Quotes in local storage
  let quotesInitials = JSON.parse(localStorage.getItem("quotes"));
  if (!quotesInitials) {
    quotesInitials = [];
  }

  // Arrays of quotes
  const [quotes, saveQuotes] = useState(quotesInitials);

  //Another hook(useEffect) to perform certain operations when the state changes
  useEffect(() => {
    if (quotesInitials) {
      localStorage.setItem("quotes", JSON.stringify(quotes));
    } else {
      localStorage.setItem("quotes", JSON.stringify([]));
    }
  }, [quotes, quotesInitials]);

  // Function that adds current and new 'quotes'
  const createQuote = (quote) => {
    saveQuotes([...quotes, quote]);
  };

  // Function that delete a quote by id
  const deleteQuote = (id) => {
    const newQuotes = quotes.filter((quote) => quote.id !== id);
    saveQuotes(newQuotes);
  };

  // Conditional message
  const title = quotes.length === 0 ? "No quotes" : "Manage your quotes";

  return (
    <Fragment>
      <h1>Patient Management</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createQuote={createQuote} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {quotes.map((quote) => (
              <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
