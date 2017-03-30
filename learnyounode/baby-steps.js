const nums = process.argv.slice(2);
const sum = nums.reduce((agg, num) => agg + Number(num), 0);
console.log(sum);
