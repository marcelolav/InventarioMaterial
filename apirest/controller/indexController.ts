import { Request, Response } from "express";

class IndexController {
     public index(req: Request, res: Response) {
          res.send("<h1>La API Funciona correctamente.</h1>");
     }
}

export const indexController = new IndexController();
