// <한수>

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function hansoo(n) {
    let count = 0;
                
    for (let i = 1; i <= n; i++) {
        let check = 0;
        
        if (i < 100) {
            count += 1;
        } else {
            const numbers = `${i}`.split('');
            const commonDifference = Number(numbers[1]) - Number(numbers[0]);
            
            for (let j = 2; j < numbers.length ; j++) {
                if (commonDifference === (Number(numbers[j]) - Number(numbers[j - 1]))) {
                    check = true;
                } else {
                    check = false;
                    break;
                }
            }
        }
        check === true ? count += 1 : '';
    }
    console.log(count);
}

hansoo(Number(input));