/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  request.query

  const users = [
    { id: 1, name: 'Diego' },
    { id: 2, name: 'Allan' },
    { id: 2, name: 'Ricardo' },
  ]

  return response.json(users);
}