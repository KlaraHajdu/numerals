import React, { useState } from "react";
import convertNumbers from "../util";
import "../app.css";

export default function NumberConversion() {
    const [inputNumber, setInputNumber] = useState();
    const [textNumber, setTextNumber] = useState();

    const handleChange = (e) => {
        setInputNumber(e.target.value);
    };

    const convertNumber = (e) => {
        e.preventDefault();
        setTextNumber(convertNumbers(inputNumber));

    };

    return (
        <div>
            <form onSubmit={convertNumber}>
                <label htmlFor="input-text">Input text:</label>
                <input id="input-text" onChange={handleChange}></input>
                <button type="submit">
                    Submit
                </button>
            </form>
            <div data-testid="number-text">{textNumber}</div>
        </div>
    );
}
