// Practice set 6: array
// 1. Create an array of numbers and take input from the user to add numbers to this array .
let arr1 = [2,4,6,8]
console.log(arr1)
let result1 = parseInt(prompt('Add a number to this array:-  '))
arr1.push(result1)

// 2. Keep adding numbers to the array in 1 until 0 is added to the array

// 3. Filter for numbers divisible by 10 from a given array
function findSmallest(p, n)
{
    for (let i = 0; i < n; i++)
    {
        let j;
        for (j = 0; j < n; j++)
            if (p[j] % p[i]>=1)
                break;
        if (j == n)
            return p[i];
    }       
    return -1;
}
    let p = [ 25, 20, 5, 10, 100 ];
    let n = g.length;
    console.log(findSmallest(p, n));
// 4. Create an array for square of given numbers