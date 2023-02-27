// 거스름돈

let n = 1260;
let count = 0;
const money = [500, 100, 50, 10];

for (const item of money) {
    count += parseInt(n / item);
    n = n % item;
    // 카운트 하고 n을 변경해야 한다. 순서 중요!
}

console.log(count);