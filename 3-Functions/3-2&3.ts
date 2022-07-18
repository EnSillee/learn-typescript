// let printNumber = (arr: number[]) => {
//   return arr.forEach(el => console.log(el))
// }

// printNumber([1,2,3])


// type SuperPrint = {
//   (arr : number[]):void
//   (arr : boolean[]):void
//   (arr : string[]):void
//   (arr: (number|boolean)[]):void
// }

/// Polymorphism : 다형성은 여러가지 다른 모양들을 뜻하고, 타입스크립트에서 <T>(arr : T[]) :T 와 같은 형식으로 사용한다. 
///                타입스크립트는 인자로 들어오는 값들의 타입을 보고 call signature의 형태를 정한다.
///                call signature란 함수에 커서를 올려놓았을 때 인자와, 리턴값의 타입이 무엇인지 알려주는 부분을 말한다.

type SuperPrint = {
  <T, L>(arr : T[], b:L):T|L
}

// 아래와 같이 any를 쓰게되면 인자값에 따른 타입을 구분해낼 수 없으므로 잘못된 사용의 예시이다.
// type SuperPrint = {
//  (arr : any[]):any
// }

// const superPrint : SuperPrint = arr => {
//   arr.forEach(el => console.log(el))
// }

const superPrint : SuperPrint = arr => arr[0]

const aaa = superPrint([1,2,3], "순위")
const bbb = superPrint([true, false, false], 1)
const ccc = superPrint(["동","해","물","과"], true)
const ddd = superPrint([1, 2 ,true, false], [])
// ddd.toUpperCase()

//confirm