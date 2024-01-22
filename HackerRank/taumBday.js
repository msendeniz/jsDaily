/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b 
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */
/*
int b: the number of black gifts
int w: the number of white gifts
int bc: the cost of a black gift
int wc: the cost of a white gift
int z: the cost to convert one color gift to the other color
returns the minimum cost
*/
function taumBday(b, w, bc, wc, z) {
    // Write your code here
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);
    if(bc==wc){
        //no benefit to convert the clothes
        return (b+w)*bc;
    }else if (bc>z+wc || wc>z+bc) {
        return bc>z+wc ? wc*w+(z+wc)*b : bc*b+w*(z+bc);
    }else{
        return b*bc+w*wc;
    }
}

console.log(taumBday(10,10,1,1,1));
console.log(taumBday(3,3,1,9,2));
