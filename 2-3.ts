// readonly : 해당 변수를 읽기전용(읽기만 가능하고 수정이 안되는)으로 설정가능

const numbers: readonly number[] = [1, 2, 3 ,4]
// numbers.push(5)

const nickname: readonly string[] = ["unicorn", "peagsus"]
// nickname.push("lasags")

// Tuple : 해당 변수의 특정 위치에 특정 타입의 데이터가 오도록 함

// const jyUser: readonly [string, number, boolean] = ["jungyoon", 29, false]
// jyUser[0] = "heybin"

// type User = {
//   readonly name : string,
//   age : number,
//   isAdmin : boolean
// }

// const userMaker = (name: string, age: number, isAdmin: boolean) : User => {
//   return {name, age, isAdmin}
// }

// const jyUser = userMaker("JungYoon", 29, true)
// console.log(jyUser)

// jyUser[1] = true
// console.log(jyUser)


const userMaker = (name: string, age: number, isAdmin: boolean) => ([name, age, isAdmin])
const jyUser = userMaker("JungYoon", 29, true)
// console.log(jyUser)

jyUser[2] = false
// console.log(jyUser)

// any : 빈 값들의 기본값, typescript로부터 빠져나오고 싶을 때, typescript의 보호장치를 무시하고 비활성화하고 싶을 때 쓰는 타입
const aa : any[] = [1,2,3,4]
const bb : any = true
// const aa = [1,2,3,4]
// const bb = true

console.log(aa + bb)