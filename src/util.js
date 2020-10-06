import numbersObject from "./numbersObject";

const convertNumbers = (input) => {
    
    let inputNumber = parseInt(input);

    if (numbersObject[inputNumber]) return numbersObject[inputNumber]


    return "";
};

export default convertNumbers;
