// <셀프 넘버>

function findSelfNumber () {
    let notSelfNumbers = [];
    let result = [];
    
    for (let i = 1; i <= 10000; i++) {
        let numbers = `${i}`.split('');
        let sum = 0;
        numbers.forEach((num) => {
            sum += parseInt(num);
        })

        notSelfNumbers.push(i + sum);
        if (!notSelfNumbers.includes(i)) {
            result.push(i);
        }
    }
    console.log(result.join('\n'));
}

findSelfNumber();

// 또는 
// function findSelfNumber () {
//     let notSelfNumbers = [];
//     let result = [];
    
//     for (let i = 1; i <= 10000; i++) {
//         const repeat = parseInt(i / 10);
//         let rest = 0;
//         let operand = i;
        
//         for (let j = 0; j < repeat; j++) {
//                 rest += operand % 10;
//                 operand = parseInt(operand / 10);
//         }

//         notSelfNumbers.push(i + operand + rest);
//         if (!notSelfNumbers.includes(i)) {
//             result.push(i);
//         }
//     }
//     console.log(result.join('\n'))
// }