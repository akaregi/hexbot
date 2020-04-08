const words = 'TypeScript'.split('')

// ここの ... は可変長引数
function variable (...words: string[]): string {
  return words.join(', ')
}

// ここの .... はスプレッド演算子
console.log(variable(...words))
