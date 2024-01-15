/*
d1, m1, y1: returned date day, month and year, each an integer
d2, m2, y2: due date day, month and year, each an integer
*/

/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

//if different day but same month - 15xdaysLate
//if different month but same year - 500xnumberOfMonthsLate
//if different year - 10000


function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    let yearDifference = y1-y2;
    let monthDifference = m1-m2;
    let dayDifference = d1-d2;

    if(yearDifference > 0)
    return 10000;
        else if(monthDifference > 0 && yearDifference ==0)
    return 500*monthDifference;
        else if(dayDifference > 0 && monthDifference==0 && yearDifference==0)
    return 15*dayDifference
        else
    return 0;
}

console.log(libraryFine(15,7,2014,1,7,2015));
