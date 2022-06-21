interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const Liz: User = {
    age: 29,
    name: '보경'
};

// 함수에 인터페이스 활용
function getUser(user: User) { // User interface 형식만 받겠다고 정의
    console.log(getUser);
}
const Nina = {
    age: 33,
    name: '현진'
}
getUser(Nina);