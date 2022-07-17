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

type SuperPrint = {
  <T>(arr : T[]):T
}

// const superPrint : SuperPrint = arr => {
//   arr.forEach(el => console.log(el))
// }

const superPrint : SuperPrint = arr => arr[0]

const aaa = superPrint([1,2,3])
const bbb = superPrint([true, false, false])
const ccc = superPrint(["동","해","물","과"])
const ddd = superPrint([1, 2 ,true, false])