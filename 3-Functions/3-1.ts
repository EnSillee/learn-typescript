// 타입스크립트 함수 선언식
function add(a: number, b: number){
  return a + b
}

// 타입스크립트 함수 표현식

let plus = function(a: number, b: number){
  return a + b
}

// 타입스크립트 화살표함수
// let minus = (a: number, b: number) => (a - b)

type Minus = (a: number, b:number) => number;
const minus:Minus = (a,b) => a + b

