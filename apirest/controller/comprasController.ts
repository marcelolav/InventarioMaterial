import { Request, Response } from "express";
import pool from "../database";

class ComprasController {
     // Muestra todos los registros de comprascabecera
     public async getComprasCabeceras(req: Request, res: Response): Promise<void> {
          const compras = await pool.query("SELECT * FROM comprascabecera");
          res.json(compras);
     }
     // Muestra un registro de comprascabecera por ID
     public async getCompraCabecera(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const compra = await pool.query("SELECT * FROM comprascabecera WHERE idcomprascabecera = ?", [id]);
          if (compra.length > 0) {
               return res.json(compra[0]);
          }
          res.status(404).json({ text: "El registro de compra no existe!" });
     }
     // Muestra todos los registros de comprasdetalle
     public async getComprasDetalles(req: Request, res: Response): Promise<void> {
          const compras = await pool.query("SELECT * FROM comprasdetalle");
          res.json(compras);
     }
     // Muestra un registro de comprasdetalle por id
     public async getCompraDetalle(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const compras = await pool.query("SELECT * FROM comprasdetalle WHERE comprobante_detalle = ?", [id]);
          res.json(compras);
     }
     // Agrega registro en comprascabecera
     public async addCompraCabecera(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO comprascabecera set ?", [req.body]);
          res.json({ message: "Cabecera de compra guardada con éxito!" });
     }
     // Agrega registro en comprasdetalle
     public async addCompraDetalle(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO comprasdetalle set ?", [req.body]);
          res.json({ message: "Detalle de compra guardada con éxito!" });
     }
}

export const comprasController = new ComprasController();
