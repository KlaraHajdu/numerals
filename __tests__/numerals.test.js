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

it("provides thirteen hundred and thirty-six  for 1336", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '1336');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("thirteen hundred and thirty-six");
});

it("provides twenty-one thousand three hundred and thirty-six  for 21,336", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '21336');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("twenty-one thousand three hundred and thirty-six");
});

it("provides two hundred and eleven thousand three hundred and thirty-six  for 211,336", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '211336');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("two hundred and eleven thousand three hundred and thirty-six");
});

it("provides two million one hundred and eleven thousand three hundred and thirty-six  for 2,111,336", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '2111336');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("two million one hundred and eleven thousand three hundred and thirty-six");
});

it("provides two billion one hundred and eleven million one hundred and thirteen thousand three hundred and thirty-six  for 2,111,113,336", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '2111113336');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("two billion one hundred and eleven million one hundred and thirteen thousand three hundred and thirty-six");
});

it("provides nine billion for 9,000,000,000", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '9000000000');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("nine billion");
});

it("provides twelve million and one for 12,000,001", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '12000001');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("twelve million and one");
});

it("provides two million nineteen thousand for 2,019,000", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '2019000');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("two million nineteen thousand");
});

it("provides two billion nineteen million for 2,019,000,000", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '2019000000');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("two billion nineteen million");
});

it("provides three hundred and fifty-four trillion two billion nineteen million and twenty-five for 354,002,019,000,025", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '354002019000025');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("three hundred and fifty-four trillion two billion nineteen million and twenty-five");
});

it("provides thirty-six for +36", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '+36');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("thirty-six");
});

it("provides empty string for minus numbers", () => {
    const { getByTestId } = render(<NumberConversion />);
   
    const inputNode = screen.getByLabelText(/Input text:/i)
    userEvent.type(inputNode, '-36');

    userEvent.click(screen.getByText('Submit'))

    expect(getByTestId("number-text").textContent).toEqual("");
});