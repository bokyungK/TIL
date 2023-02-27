// 1이 될 때까지

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arr = [];

rl.on('line', (line) => {
    arr.push(line.split(' ').map((txt) => {
        return Number(txt);
    }));
    rl.close();
})

rl.on('close', () => {
    let [n, k] = arr[0];
    let count = 0;

    while(n !== 1) {
        const remain = n % k;
        
        if (remain === 0) {
            n /= k;
        } else {
            n -= 1;
        }

        count += 1;
    }

    console.log(count);
    process.exit();
})