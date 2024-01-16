/*
int p: the price of the first game
int d: the discount from the previous game price
int m: the minimum cost of a game
int s: the starting budget
*/
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let counter=0;
    while(s>=p){
        counter++;
        s-=p;
        p = (p-d>m) ? (p-d) : m;
    }
    return counter;
}

console.log(howManyGames(20,3,6,85));
