import numbersObject from "./numbersObject";

const convertNumbers = (input) => {
    
    let inputNumber = Number(input);

    if (!Number.isInteger(inputNumber)) return "";

    if (numbersObject[1][inputNumber]) return numbersObject[1][inputNumber];
    else if (numbersObject['special'][inputNumber]) return numbersObject['special'][inputNumber];

    else {

        let numberTextArr = []; 
        
        for (let i = 1; i <= input.length; i++){

            let digit = input.charAt(input.length-i);
            console.log(digit)
            
            if (i === 1) numberTextArr.push(numbersObject[i][digit])

            if (i === 2) {
                let tens = parseInt(digit.toString() + 0);
                console.log(tens);
                numberTextArr.push(numbersObject[i][tens])
            }
        }
        let result = numberTextArr.reverse().join("-");
        return result;
    }

};

export default convertNumbers;
