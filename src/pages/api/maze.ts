// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Maze from "@/model/api/maze/maze";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Maze[]>,
) {
  res.status(200).json([[
      ['wall', 'start', 'wall', 'wall', 'wall', 'wall', 'wall'],
      ['wall', 'path', 'path', 'path', 'path', 'path', 'wall'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall'],
      ['wall', 'path', 'path', 'path', 'path', 'path', 'wall'],
      ['wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
      ['wall', 'path', 'wall', 'path', 'path', 'path', 'wall'],
      ['wall', 'path', 'wall', 'path', 'wall', 'path', 'end'],
      ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
    ]]);
}
