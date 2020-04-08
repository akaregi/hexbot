import Color from 'color'

export interface RGB {
  r: number
  g: number
  b: number
}

export function newRGB (): RGB {
  // ここの二行で #~~~~~~ の ~~~~~~ を生成する
  const hexMax = 256 * 256 * 256
  const code = Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0')
  const color = Color(`#${code}`)

  return {
    r: color.red(),
    g: color.green(),
    b: color.blue()
  }
}
