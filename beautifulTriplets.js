function beautifulTriplets(d, arr) {
    // Write your code here
    let counter=0;
    for(let i=0;i<arr.length;i++){
        if(arr.includes(arr[i]) && arr.includes(arr[i]+d) && arr.includes(arr[i]+2*d)){
        counter++;
        }    
    }
return counter;
}


let myArr = [1, 2, 4, 5, 7, 8, 10];
let result = beautifulTriplets(3,myArr);
console.log(result);