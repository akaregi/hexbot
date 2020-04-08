import Color from 'color'

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface Response {
  colors: RGB[];
}

function generate (): RGB {
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

function getResponse (count: number): Response {
  const colors = Array(count).fill(0).map(() => generate())

  return {
    colors: colors
  }
}

const response = getResponse(3)

console.log(JSON.stringify(response, null, 2))
