function hello (): string {
  return 'Hi'
}

function hello2 (namae: string): string {
  const message = 'Hi, ' + namae

  return message
}

console.log(hello())
console.log(hello2('Kisama'))

function love (name: string): string {
  // const say = name * 10

  const say = name.repeat(10)

  return say + '\nI love ' + name
}

function lovelove (target: string): string {
  const loveMessage = `I love ${target}!!! YEEEEEEEE ${target.repeat(10)}`

  return loveMessage
}

// ↓これをあとに書いて呼び出す
// eslintのエラーだけであとでもおっけよ
function Upcase (word: string): string {
  const upcaseWord = word.toUpperCase()
  return upcaseWord
}

function wao (who: string): string {
  const sayWao = `${Upcase(who)} say ヮ(ﾟдﾟ)ォ!`

  return sayWao
}

console.log(love('regi'))
console.log(lovelove('karuma'))
console.log(wao('regi'))

console.log(Upcase('kumita'))
