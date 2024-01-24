/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function smallElement(arr){
    let small=10000;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small)
        small = arr[i];
    }
return small;    
}
function cutTheSticks(arr) {
    // Write your code here
    let sizeArr = [];

    while(arr.length>0){
        sizeArr.push(arr.length);
        let smallest = smallElement(arr);
        arr = arr.filter(stick => stick > smallest);
    }
return sizeArr;    
}

let arr1 = [1,2,3];
console.log(cutTheSticks(arr1));
console.log(cutTheSticks([5,4,4,2,2,8]));
