import { NowRequest, NowResponse } from '@now/node'
import { newResponse } from './.lib/Response'

export default (req: NowRequest, res: NowResponse): void => {
  let count = 1

  if (req.query.count) {
    const argCount = Array.isArray(req.query.count)
      ? req.query.count.join('')
      : req.query.count

    count = Math.abs(parseInt(argCount) || 1)
  }

  res.status(200).json(newResponse(count))
}
