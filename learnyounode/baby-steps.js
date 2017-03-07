nums = process.argv.slice(2)
sum = nums.reduce((sum, num) => sum + Number(num), 0);
console.log(sum);
