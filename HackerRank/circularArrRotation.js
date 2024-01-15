function circularArrayRotation(a, k,queries) {
  let myArr = [];
      
  for(let j=0;j<k;j++){
    let lastElement = a[a.length-1];
      for (let i = a.length-1; i > 0; i--) {
        a[i] = a[i-1];
      }
      a[0] = lastElement;
  }
  
  for(let x=0;x<queries.length;x++){
    myArr[x] = a[queries[x]];
  }
  return myArr;
}

// Example usage:
let inputArray = [3,4,5];
let k = 2;
let queries=[1,2];
let result = circularArrayRotation(inputArray,k,queries);
console.log(result);


