import React, { useState } from "react";

export default function NumberConversion() {
    const [inputNumber, setInputNumber] = useState();
    const [textNumber, setTextNumber] = useState();

    const handleChange = (e) => {
        setInputNumber(e.target.value);
    };

    const convertNumber = (e) => {
        e.preventDefault();
        if (inputNumber === "1") setTextNumber("one");

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
