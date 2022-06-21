// 1. 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}
sum(10, 20);

// 2. 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 30;
}

// 3. 종합 - 함수에 타입을 정의하는 방식***
function min(a: number, b: number): number {
    return a - b;
}

min(3, 1, 0, 4); // js로 변환 시 초과된 인수에 관한 에러 출력