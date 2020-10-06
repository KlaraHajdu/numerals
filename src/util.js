import numbersObject from "./numbersObject";

const convertNumbers = (input) => {
    
    let inputNumber = Number(input);

    if (!Number.isInteger(inputNumber)) return "";

    if (numbersObject[1][inputNumber]) return numbersObject[1][inputNumber];
    else if (numbersObject['special'][inputNumber]) return numbersObject['special'][inputNumber];

    else {

        let onesTensArr = []; 
        let hundredsAboveArr = [];
        
        for (let i = 1; i <= input.length; i++){

            if (Number(input.slice(-2)) >= 10 && Number(input.slice(-2)) <= 19) {  
                onesTensArr.push(numbersObject['special'][Number(input.slice(-2))])
                i = 3;
            }

            let digit = input.charAt(input.length-i);
            
            if (i === 1 && numbersObject[i][digit]) onesTensArr.push(numbersObject[i][digit])

            if (i === 2) {
                let tens = parseInt(digit.toString() + 0);
                if (numbersObject[i][tens]) onesTensArr.push(numbersObject[i][tens])
            }

            if (i === 3) {
                hundredsAboveArr.push(numbersObject[i][100]);
                hundredsAboveArr.push(numbersObject[1][digit]);
                
            }
        }
        let onesTens = onesTensArr && onesTensArr.reverse().join("-");
        let hundredsAbove = hundredsAboveArr.reverse().join(" ");
        let result = hundredsAbove?  hundredsAbove + (onesTens && " and " + onesTens): onesTens;
        return result;
    }

};

export default convertNumbers;
