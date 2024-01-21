/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function bubbleSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            
        }
    }
return arr;    
}

var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
console.log(bubbleSort(arr));
function findMedian(arr) {
    // Write your code here
    bubbleSort(arr);
    let middleIndex = Math.floor(arr.length/2);
    if(arr.length % 2 !== 0){
        return arr[middleIndex];
    }else if(arr.length % 2 === 0){
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    }    
}

console.log(findMedian(arr));
