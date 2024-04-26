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

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output should be 5

// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let price of prices) {
//     console.log("1-->", price, minPrice);
//     if (price < minPrice) {
//       minPrice = price;
//       console.log("2", price, minPrice);
//       console.log("3", price - minPrice > maxProfit);
//     } else if (price - minPrice > maxProfit) {
//       maxProfit = price - minPrice;
//     }
//   }

//   return maxProfit;
// }

// // Example usage:
// const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices)); // Output should be 5
