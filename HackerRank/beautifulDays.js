/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function reverseNum(num){

    let numStr = num.toString();
    let reversedStr = '';
    for(let i= numStr.length - 1;i >= 0 ;i--){
        reversedStr += numStr[i];
    }
return parseInt(reversedStr);    
}

function beautifulDays(i, j, k) {
    let count=0;
    // Write your code here
    for(let x = i; x <= j ; x++){
        if(Math.abs( x- reverseNum(x)) % k === 0){
            count++;
        }

    }
return count;    
}


console.log(beautifulDays(20,23,6));
