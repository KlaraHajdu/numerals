import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberConversion from "../src/components/NumberConversion";

afterEach(cleanup)

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

it("provides two for 2", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '2');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("two");
});

it("provides thirteen for 13", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '13');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("thirteen");
});

it("provides twenty-seven for 27", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '27');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("twenty-seven");
});

it("provides empty string for 45dkfvdf", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '45dkfvdf');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("");
});

it("provides four hundred and fifty-six for 456", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '456');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("four hundred and fifty-six");
});

it("provides four hundred  for 400", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '400');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("four hundred");
});

it("provides one hundred and twelve  for 112", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '112');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("one hundred and twelve");
});