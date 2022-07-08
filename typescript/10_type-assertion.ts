let e; // type : any
e = 10;
e = '하이';
const f = e; // f의 type은 계속 any

// 타입 단언
let h;
const i = h as string; 

// 예시
// <div id="app">hi</div>

const div = document.querySelector('div') as HTMLDivElement;
if (div) {
	div.innerText;
}
div.innerText;
