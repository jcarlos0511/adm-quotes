import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Form = ({ createQuote }) => {
  //creating quote's state
  const [quote, updateQuote] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    summary: "",
  });

  //creating a state for an error in the form
  const [error, updateError] = useState(false);

  //Function that runs when the user writes to the input
  const updateState = (e) => {
    updateQuote({
      ...quote,
      [e.target.name]: e.target.value,
    });
  };

  //Extracting the values
  const { pet, owner, date, time, summary } = quote;

  //When the user clicks the 'Add Quote' button
  const submitQuote = (e) => {
    e.preventDefault();

    //validations
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      summary.trim() === ""
    ) {
      updateError(true);
      return;
    }

    updateError(false);

    //assign an id
    quote.id = uuidv4();
    //console.log(quote)

    //create the 'quote'
    createQuote(quote);

    //restart the form
    updateQuote({
      pet: "",
      owner: "",
      date: "",
      time: "",
      summary: "",
    });
  };

  return (
    <Fragment>
      <h2>Create Quote</h2>

      {error ? <p className="alert-error">All fields are required</p> : null}

      <form onSubmit={submitQuote}>
        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet's name"
          onChange={updateState}
          value={pet}
        />

        <label>Owner's Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner's name"
          onChange={updateState}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />

        <label>Summary</label>
        <textarea
          className="u-full-width"
          name="summary"
          onChange={updateState}
          value={summary}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Add quote
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createQuote: PropTypes.func.isRequired,
};

export default Form;
