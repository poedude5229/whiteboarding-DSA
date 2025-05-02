/*
You are given an array of prices where prices[i] is
the price of a given stock on the ith day.

You want to maximize your profit by choosing a
single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the max profit you can achieve from this
transaction. If you cannot achieve any profit,
return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell
on day 5 (price = 6), profit = (6-1) = 5

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No transactions are done, and max
profit = 0

Constraints:
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/

/*
Approach: Sliding Window:
1. Initialize pointers and start them at 0th and
1st indices.
2. Create a maxProfitSoFar variable
3. Loop until right pointer reaches the end
4. For each iteration:
    a. if right pointer < left pointer price
        i. update left pointer to right's pos
    b. else, take sell price of right pointer and
    subtract the buy price of left pointer to get
    newProfit
        i. Compare newProfit to maxProfitSoFar
5. Return maxProfitSoFar
*/

function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxProfitSoFar = 0;
  while (right < prices.length) {
    let buyPrice = prices[left];
    let sellPrice = prices[right];
    if (sellPrice <= buyPrice) {
      left = right;
    } else {
      let profit = sellPrice - buyPrice;
      maxProfitSoFar = Math.max(maxProfitSoFar, profit);
    }
    right++;
  }
  return maxProfitSoFar;
}
