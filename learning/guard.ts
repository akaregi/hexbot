function test (a: string | undefined, b: string | undefined): boolean {
  if (!a) {
    return false
  }

  if (!b) {
    return false
  }

  return true
}

console.log(test('a', 'b'))
console.log(test('a', undefined))
console.log(test(undefined, 'b'))
console.log(test(undefined, undefined))
