class Person {
    private name: string; // 1. 멤버 변수 타입 지정
    public age: number;
    readonly log: string;
    // => 변수에 접근 범위도 지정

    constructor(name: string, age: number) { // 2. 파라미터 타입 지정
        this.name = name;
        this.age = age;
    }
}

// 리액트에서 클래스 사용
//  리액트 예전 문법
class App extends React.Component {

}
//  리액트 최신 문법 - 훅 기반 함수형 코드
function App() {
    return <div>Hello World</div>
}