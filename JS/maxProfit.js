function maxProfit(prices) {
  let left = 0;
  let maxProfit = 0;

  for (let right = 1; right < prices.length; right++) {
    console.log(left, right);
    if (prices[right] < prices[left]) {
      left = right;
    } else {
      let profit = prices[right] - prices[left];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
