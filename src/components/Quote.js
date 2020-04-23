import React from "react";
import PropTypes from "prop-types";

const Quote = ({ quote, deleteQuote }) => (
  <div className="quote">
    <p>
      Pet: <span>{quote.pet}</span>
    </p>
    <p>
      Owner: <span>{quote.owner}</span>
    </p>
    <p>
      Date: <span>{quote.date}</span>
    </p>
    <p>
      Time: <span>{quote.time}</span>
    </p>
    <p>
      Summary: <span>{quote.summary}</span>
    </p>

    <button
      className="button delete u-full-width"
      onClick={() => deleteQuote(quote.id)}
    >
      Delete &times;
    </button>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  deleteQuote: PropTypes.func.isRequired,
};

export default Quote;
