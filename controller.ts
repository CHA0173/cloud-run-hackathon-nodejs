import { NextFunction, Request, Response } from "express";

export enum Direction {
  N = "N",
  E = "E",
  W = "W",
  S = "S",
}

export class apiController {
  public static async get(req: Request, res: Response, next: NextFunction) {
    try {
      return res.send({ message: "lets start" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  public static async post(req: Request, res: Response, next: NextFunction) {
    try {
      const moves = ["F", "L", "R"];
      const fire = "T";
      const _res: any = req.body;
      const selfURL = _res._links.self.href;
      let me = _res.arena.state[selfURL];
      if (me.wasHit) {
        return res.send(moves[Math.floor(Math.random() * moves.length)]);
      }
      return res.send(fire);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
