
/*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    let breadCount=0;
    // Write your code here
    for(let i=0;i<B.length;i++){
        
        if(B[i] % 2 !== 0){
            let elementToIncrement;

            if(i>0 && B[i-1] %2 !== 0){
                elementToIncrement = i-1;
            }else if(i < B.length - 1){
                elementToIncrement = i+1;
            }else{
                return 'NO';
            }

            B[i]++;
            B[elementToIncrement]++;
            breadCount += 2;
        }
     
    }
return breadCount;  
}

const A = [4,5,6,7];
const B = [2,3,4,5,6];
console.log(fairRations(A));
console.log(fairRations(B));
