
## Numerals

This is an assessment project, aiming to meet the provided requirements of converting arabic numbers to English text without using any external libraries, as well as testing the application. 

The developed application accepts integers between zero and 10<sup>12</sup>-1 (as it is mostly usual to spell out numbers in that range maximum). Only very basic styling is added to the app, as it was not part of the assignment. 

## Testing

Tests are written with the help of the react-testing-library run by the Jest test runner that comes with the react app as bootstrapped with create-react-app. Integration tests are written to best mimic the user's interactions with the app. The conversion utility function is developed in TDD style.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

`npm start` - it runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test` - it launches the test runner.

## Reflection

Developing the conversion utility function with TDD proved outmost helpful to prevent regression and simplify the process in some regards. 
