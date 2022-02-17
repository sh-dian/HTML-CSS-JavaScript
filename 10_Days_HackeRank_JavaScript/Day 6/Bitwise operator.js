/*
*    Return the largest value of any a & b < k in S (where a < b).
*     
*    n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*    k: An integer.
*/
function getMaxLessThanK(n, k) {
    let maximum = 0;
    let current = -1;
    for (let i = 1; i < k; i++) 
    {
        for (let j = i + 1; j <= n; j++) 
        {
            current = i & j;
            if (current < k && current > maximum) 
            {
                maximum = current;
            }
        }
    }
    return maximum;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}