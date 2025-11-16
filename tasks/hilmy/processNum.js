// Process Numbers
/**
 * Function to process an array of numbers by filtering odd numbers
 * and calculating their product. If no odd numbers are found, returns 1.
 * @param {number[]} arr - The array of numbers to process
 */


export function processNumbers(arr){

    let ganjil = arr.filter(num => num % 2 !== 0);
    let row = '';

    if(ganjil.length === 0){
        return console.log(1);
    }

    console.log(ganjil.reduce((acc, curr) => acc * curr));

    return row;
}

