function solution(babbling) {
    const possibleWord = ["aya", "ye", "woo", "ma"];
    const result = [];
    
    babbling.forEach((input, idx) => {
        result.push(babbling[idx]);

        possibleWord.forEach((word) => {
            if (result[idx].includes(word)) {
                result[idx] = result[idx].replace(word, 0)
            }
        })
    });
    
    const answer = result.filter((item, idx) => {
        return Number(item) === 0;
    }).length

    return answer;
}