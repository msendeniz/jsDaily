/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */
//start by value 3, and it decrements until 1 and the value is 
//multiplied by starting phase value again until the first 3 cycles

function strangeCounter(t) {
    // Write your code here
let cycleLength = 3;

    while(t>cycleLength){
        t-=cycleLength;
        cycleLength=cycleLength*2;
    }
return cycleLength-t+1;
}


console.log(strangeCounter(4));
