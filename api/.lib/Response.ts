import { RGB, newRGB } from './RGB'

interface Response {
  colors: RGB[]
}

export function newResponse (count: number): Response {
  const colors = Array(count).fill(0).map(() => newRGB())

  return {
    colors: colors
  }
}
