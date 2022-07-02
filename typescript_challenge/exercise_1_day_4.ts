// exercise 1 : generic and call signiture
    // 문자열
    // const str: string = 'hello';

    // 숫자
    // const num: number = 10;

    // 배열
    // const arr: Array<number> = [1, 2, 3];
    // // 1. 배열의 요소로 number만 가능
    // // 2.배열 타입은 '대문자'로 시작
    // const items: number[] = [1, 2, 3];

    // console.log(str, num, arr, items);


// my answer
type UseArray = {
    <T>(arr: T[]): T
    <T>(arr: T[], item: T): T
}


const last: UseArray = (arr) => {
    return arr[arr.length - 1];
}

const prepend: UseArray = (arr, item?: any) => {
    arr.unshift(item);
    return arr[0];
}


const lastValue2 = last([1, 2, 3]);
const prependValue2 = prepend(['2', 3, 4], '1');
