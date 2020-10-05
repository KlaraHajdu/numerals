import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberConversion from "../src/components/NumberConversion";

it("smoke test", () => {
    expect(true).toEqual(true);
});

it("provides one for 1", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '1');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("one");
});
