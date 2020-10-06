import numbersObject from "./numbersObject";

const convertNumbers = (input) => {
    if (!Number.isInteger(Number(input)) || input.length > 15) return "";

    if (input.length === 1) return numbersObject[1][Number(input)];
    else if (input.length === 2) {
        return convertDiad(input);
    } else if (input.length === 3) {
        return convertTriad(input);
    } else if (input.length === 4) {
        let endConverted = convertDiad(input.slice(-2));
        let beginningConverted = convertDiad(input.slice(0, 2));
        return beginningConverted + " hundred and " + endConverted;
    } else if (input.length > 4) {
        let numberOfTriads = Math.floor(input.length / 3);
        let triadArr = [];

        for (let i = 1; i <= numberOfTriads; i++) {
            if (i === 1) triadArr.push(input.slice(-i * 3));
            else triadArr.push(input.slice(-i * 3, -i * 3 + 3));
        }

        let convertedTriadArr = [];
        triadArr.forEach((triad) => convertedTriadArr.push(convertTriad(triad)));

        let resultArr = [];
        for (let i = 0; i < numberOfTriads; i++) {
            if (convertedTriadArr[i] !== "") {
                resultArr.push(convertedTriadArr[i]);
            }
            if (i === 0 && triadArr[0].charAt(0) === "0" && convertedTriadArr[i] !== "") resultArr.push("and");
            if (i !== numberOfTriads - 1 && convertedTriadArr[i + 1] !== "") {
                resultArr.push(numbersObject[i * 3 + 4]);
            }
        }

        if (input.length % 3 > 0) {
            let beginningOfInput = input.slice(0, -numberOfTriads * 3);
            let convertedBeginningOfInput;
            if (beginningOfInput.length === 1) convertedBeginningOfInput = numbersObject[1][beginningOfInput];
            else if (beginningOfInput.length === 2) convertedBeginningOfInput = convertDiad(beginningOfInput);
            resultArr.push(numbersObject[numberOfTriads * 3 + 1]);
            resultArr.push(convertedBeginningOfInput);
        }
        resultArr.reverse();
        return resultArr.join(" ");
    }
};

const convertTriad = (triadInput) => {
    if (triadInput === "000") return "";

    if (triadInput.charAt(0) === "0") {
        return convertDiad(triadInput.slice(-2));
    } else {
        let resultArr = [];
        resultArr.push(numbersObject[1][Number(triadInput.charAt(0))]);
        resultArr.push(numbersObject[3]);
        let textDiad = convertDiad(triadInput.slice(-2));
        if (textDiad) {
            resultArr.push("and");
            resultArr.push(textDiad);
        }

        let result = resultArr.join(" ");
        return result;
    }
};

const convertDiad = (diadInput) => {
    if (diadInput === "00") return "";

    if (diadInput.charAt(diadInput.length - 2) === "0") {
        return numbersObject[1][Number(diadInput.charAt(diadInput.length - 1))];
    }
    if (numbersObject["special"][diadInput]) return numbersObject["special"][diadInput];
    let resultArr = [];
    let tens = Number(diadInput.charAt(diadInput.length - 2) + 0);
    resultArr.push(numbersObject[2][tens]);
    let ones = Number(diadInput.slice(-1));
    if (ones !== 0) {
        resultArr.push("-");
        resultArr.push(numbersObject[1][ones]);
    }
    return resultArr.join("");
};

export default convertNumbers;
