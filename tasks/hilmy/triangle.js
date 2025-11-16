// Triangle of Numbers
/**
 * Function to print a triangle of numbers
 * @param {number} n - The number of rows in the triangle
 */

export function triangle(n){
    const row = "";
    for(let i=1; i<=n; i++){
        let row = "";
        for(let j=1; j<=i; j++){
            row += j + " ";
        }
        console.log(row);
    }
    
    return row;
}

