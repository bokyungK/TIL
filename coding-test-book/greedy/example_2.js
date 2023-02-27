// 큰 수의 법칙

const n = 5;
let m = 8;
let k = 3;
const arr = [2, 4, 5, 4, 6];

const maxArr = arr.sort();
const maxNum = maxArr.slice(maxArr.length - 2, maxArr.length + 1);
let result = 0;
let index = 1;
let count = 0;

while(m > 0) {
    result += maxNum[index];
    m -= 1;
    count += 1;

    if (count === k && index === 1) {
        index = Math.abs(index - 1);
        count = 0;
    }

    if (count === 1 && index === 0) {
        index = Math.abs(index - 1);
        count = 0;
    }
}

console.log(result);