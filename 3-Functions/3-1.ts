// 타입스크립트 함수 선언식
// function add(a: number, b: number){
//   return a + b
// }

// 타입스크립트 함수 표현식

let plus = function(a: number, b: number){
  return a + b
}

// 타입스크립트 화살표함수
// let minus = (a: number, b: number) => (a - b)

type Minus = (a: number, b:number) => number;
const minus:Minus = (a,b) => a + b

// type Add = {
//   (a:number, b:number) :number
//   (a:number, b:string) :number
// }

// const add: Add = (a, b) => {
//   if(typeof b === "string") return a
//   return a + b
// }

/// Overloading : 여러 call signatures가 있는 함수

type Add = {
  (a:number, b:number) : number
  (a:number, b:number, c:number) : number,
}

const add:Add = (a, b, c?:number) => {
  if(c) return a + b + c
  return a + b
}

console.log(add(1,5))
console.log(add(1,5,4))