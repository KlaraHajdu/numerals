import numbersObject from "./numbersObject";

const convertNumbers = (input) => {
   
    if (!Number.isInteger(Number(input))) return "";

    if (input.length === 1) return numbersObject[1][Number(input)];
    
    else if (input.length === 2) {
        return convertDiad(input);
    }

    else if (input.length === 3) {
        return convertTriad(input);
    }

    
    }


const convertTriad = (triadInput) => {
    let resultArr = [];
    let digit = triadInput.charAt(0);
    if (digit !== "0") resultArr.push(numbersObject[1][Number(digit)]);
    resultArr.push(numbersObject[3][100]);
    let textDiad = convertDiad(triadInput.slice(-2));
    if (textDiad) {
        resultArr.push("and");
        resultArr.push(textDiad);
    }

    let result = resultArr.join(" ");
    return result;
};

const convertDiad = (diadInput) => {
    
    if (diadInput.charAt(-2) === "0") return numbersObject[1][Number(diadInput.charAt(diadInput.length-1))];
    if (numbersObject["special"][diadInput]) return numbersObject["special"][diadInput];
    let resultArr = [];
    console.log(diadInput.charAt(diadInput.length-2))
    let tens = Number(diadInput.charAt(diadInput.length-2) + 0);
    console.log(tens)
    resultArr.push(numbersObject[2][tens]);
    let ones = Number(diadInput.slice(-1))
    if (ones !== 0) {
        resultArr.push("-");
        resultArr.push(numbersObject[1][ones])
    }
    return resultArr.join("");
};

export default convertNumbers;
