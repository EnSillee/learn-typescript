/// unknown 속성은 type을 확인하지 않는다면 코드를 실행시키지 않음. 즉, 어떤 작업을 하려면 이 속성을 가진 변수의 타입을 먼저 확인해야 함
let uk:unknown;

// let bbb = uk + 1

if(typeof uk === 'number'){
  let bbb = uk + 1
}

// let bbb = uk.toUpperCase()

if(typeof uk === 'string'){
  let bbb = uk.toUpperCase()
}

/// void : 아무것도 return하지 않는 함수를 나타내는 속성, 보통 void를 따로 지정하진 않음
// 함수가 리턴하는 결과의 타입에 따라 함수의 타입이 결정됨!

function welcom(){
  console.log('to Busan')
}

const a = welcom()
a.toUpperCase()

// never : 함수가 절대 return하지 않을 때 발생

// function hello():never{
//   throw new Error("occured Err")
// }

function hello(name : string | number){
  if(typeof name === 'string'){
    name
  } else if(typeof name === 'number'){
    name
  } else{ // else문은 절대 실행되지 않아야 됨 -> hello함수가 인자로 받는 name의 속성인 string이나 number가 앞에 if문에서 필터링됨, 그래서 else문의 나머지 name은 never임
    name
  }
}