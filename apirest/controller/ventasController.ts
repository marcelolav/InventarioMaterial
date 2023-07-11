import { Request, Response } from "express";
import pool from "../database";

class VentasController {
     // VENTAS CABECERA
     // Muestra todos los datos de la tabla ventas cabecera
     public async listaVentasCabecera(req: Request, res: Response): Promise<void> {
          const ventascabecera = await pool.query("SELECT * FROM ventascabecera");
          res.json(ventascabecera);
     }
     // Muestra un solo registro de ventas cabecera por comprobante
     public async listaVentaCabecera(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const ventas = await pool.query("SELECT * FROM ventascabecera WHERE comprobante_cabecera = ?", [id]);

          if (ventas.length > 0) {
               return res.json(ventas[0]);
          }
          res.status(404).json({ text: "El registro de ventas no existe!" });
     }
     // Muestra los registros de ventas por cliente
     public async listaVentasCabeceraCliente(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const ventas = await pool.query("SELECT * FROM ventascabecera WHERE idclientes_cabecera = ?", [id]);
          if (ventas.length > 0) {
               return res.json(ventas);
          }
          res.status(404).json({ text: "El registro de ventas no existe!" });
     }

     // Agrega un registro en ventas cabecera
     public async agregaVentaCabecera(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO ventascabecera set ?", [req.body]);
          res.json({ message: "Registro de cabecera ventas guardado con éxito!" });
     }
     // Actualiza registro de ventas cabecera por numero de id
     public async actualizaVentaCabecera(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE ventascabecera set ? WHERE idventascabecera = ?", [req.body, id]);
          res.json({ message: "El registro de ventas ha sido actualizado!" });
     }
     // VENTAS DETALLES
     // Muestra todos los datos de la tabla ventasdetalle
     public async listaVentasDetalle(req: Request, res: Response): Promise<void> {
          const ventasdetalle = await pool.query("SELECT * FROM ventasdetalle");
          res.json(ventasdetalle);
     }
     // Obtiene los datos de ventasdetalle por numero de comprobante
     public async listaVentaDetalleComprobante(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const ventasdetalle = await pool.query("SELECT * FROM ventasdetalle WHERE comprobante_detalle= ?", [id]);
          if (ventasdetalle.length > 0) {
               return res.json(ventasdetalle);
          }
          res.status(404).json({ text: "El registro de ventas no existe!" });
     }
     // Obtiene ventasdetalle por id producto
     public async listaVentaDetalleProducto(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const ventasdetalle = await pool.query("SELECT * FROM ventasdetalle WHERE idproductos_detalle= ?", [id]);
          if (ventasdetalle.length > 0) {
               return res.json(ventasdetalle);
          }
          res.status(404).json({ text: "El registro de ventas no existe!" });
     }
     // Agrega un registro en ventas detalle
     public async agregaVentaDetalle(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO ventasdetalle set ?", [req.body]);
          res.json({ message: "Registro de detalle ventas guardado con éxito!" });
     }
     // Actualiza registro de ventas detalle por numero de id
     public async actualizaVentaDetalle(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE ventasdetalle set ? WHERE idventasdetalle = ?", [req.body, id]);
          res.json({ message: "El registro de ventas ha sido actualizado!" });
     }

     // Calcular el total de una venta pasando comprobante como dato.

     public async calculaTotalVenta(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const totalVenta = await pool.query("SELECT sum(subtotal) as total FROM vw_ventascondetalles  where comprobante_detalle= ?", [id]);
          if (totalVenta.length > 0) {
               return res.json(totalVenta);
          }
          res.status(404).json({ text: "No existe el comprobante referenciado!" });
     }
     // Para el listado de las ventas con toda la info
     public async listadoventascondetalle(req: Request, res: Response): Promise<any> {
          const ventasdetalles = await pool.query("SELECT * FROM vw_ventascondetalles");
          return res.json(ventasdetalles);
     }
}

export const ventasController = new VentasController();
