/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

/*
Complete the marsExploration function in the editor below.

marsExploration has the following parameter(s):

string s: the string as received on Earth
Returns

int: the number of letters changed during transmission
Input Format

There is one line of input: a single string, .
*/

function marsExploration(s) {
    // Write your code here
let defaultMessage = 'SOS';
let counter=0;
for(let i=0;i<s.length;i++){
    if(s.charAt(i) !== defaultMessage.charAt(i%3)){
        counter++;
    }
}
return counter;
}

//Test 1 
let s = "SOSSPSSQSSOR";
console.log(marsExploration(s));

//Test 2
let s2 = "SOSSOT";
console.log(marsExploration(s2));
