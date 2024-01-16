/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */


// Test Case 1 - 10,2,5 Output 6
function chocolateFeast(n, c, m) {
    // Write your code here
    let chocolateBought = Math.floor(n/c);
    let rest = chocolateBought;

    while(rest>=m){
        let extraChocolate = Math.floor(rest/m);
        rest %= m; // Need to extract all the chocolate we can buy with our wrappers each time
        chocolateBought += extraChocolate;
        rest += extraChocolate;
    }
return chocolateBought;
}

console.log(chocolateFeast(6,2,2))
