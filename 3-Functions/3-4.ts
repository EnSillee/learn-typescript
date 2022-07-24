/// 시작!

type Player<E> = {
  name:string
  extraInfo:E
}

type JYExtra = {
  favFood:string
}
type JYPlayer = Player<JYExtra>

const jungyoon: Player<{favFood:string}> = {
  name: "jungyoon",
  extraInfo: {
    favFood:"kimchi"
  }
}