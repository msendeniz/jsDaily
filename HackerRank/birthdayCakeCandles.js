/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let max=-10000;

    for(let i=0;i<candles.length;i++){
        if(candles[i]>max){
            max=candles[i];
        }
    }
    let counter=0;
    for(let i=0;i<candles.length;i++){
        if(candles[i]===max){
            counter++;
        }
    }
return counter;    
}

let candlesArr = [3,2,1,3];
console.log(birthdayCakeCandles(candlesArr));
