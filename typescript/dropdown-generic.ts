interface Email {
  value: string;
  selected: boolean;
}

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];


function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// 선언한 인터페이스 사용하기
const obj: Dropdown<string> = { value: 'abc', selected: false};