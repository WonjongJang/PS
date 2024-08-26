/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxSum = 0

    for (let m = 0; m < accounts.length; m++) {
        let sum = 0
        for (let n = 0; n < accounts[m].length; n++) {
            sum += accounts[m][n]
        }
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
};