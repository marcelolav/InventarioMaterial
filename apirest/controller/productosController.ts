import { Request, Response } from "express";
import pool from "../database";

class ProductosController {
     // Muestra todos registros de tabla productos
     public async listaProductos(req: Request, res: Response): Promise<void> {
          const productos = await pool.query("SELECT * FROM productos");
          res.json(productos);
     }
     
     // Muestra un solo registro de la tabla productos por ID
     public async listaProducto(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const productos = await pool.query("SELECT * FROM productos WHERE idproductos = ?", [id]);
          if (productos.length > 0) {
               return res.json(productos[0]);
          }
          res.status(404).json({ text: "El producto no existe!" });
     }
     // Muestra un solo producto de la tabla productos por codigobarra
     public async muestraPorCodigobarra(req: Request, res: Response): Promise<any> {
          const { codigobarra } = req.params;
          const productos = await pool.query("SELECT * FROM productos WHERE codigobarra = ?", [codigobarra]);
          if (productos.length > 0) {
               return res.json(productos[0]);
          }
          res.status(404).json({ text: "El producto no existe!" });
     }
     // Agrega un producto
     public async agregaProducto(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO productos set ?", [req.body]);
          res.json({ message: "Producto guardado con éxito!" });
     }
     // Actualiza un producto por numero de id
     public async actualizaProducto(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE productos set ? WHERE idproductos = ?", [req.body, id]);
          res.json({ message: "El producto ha sido actualizado con éxito!" });
     }
     // Elimina un producto por numero de id
     public async eliminaProducto(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM productos WHERE idproductos = ?", [id]);
          res.json({ message: "El producto ha sido eliminado con éxito!" });
     }
     // Actualiza la existencia de un producto por numero de id
     // uso:   actualizaExistencia(id, cantidadnueva, operacion)
     // Donde:  id es el id del producto
     //         cantidadNueva: es la cantidad de un producto a descontar o agregar
     //         operacion: puede ser 'compra' o 'venta'  compra agrega y ventas descuenta
     public async actualizaExistencia(req: Request, res: Response): Promise<void> {
          const { id, cantidadNueva, operacion } = req.params;
          const regCant = await pool.query(`SELECT * FROM productos WHERE idproductos = ${id}`);
          const ex_anterior = regCant[0].existencia;
          if (operacion === "venta") {
               // Venta restar de stock
               const ex_actual = Number(ex_anterior) - Number(cantidadNueva);
               if (ex_actual > 0) {
                    await pool.query(`UPDATE productos SET existencia = ${ex_actual} WHERE idproductos = ${id}`);
               }
          }
          if (operacion === "compra") {
               // compra sumar al stock
               const ex_actual = Number(ex_anterior) + Number(cantidadNueva);
               await pool.query(`UPDATE productos SET existencia = ${ex_actual} WHERE idproductos = ${id}`);
          }
          res.json({ message: "Existencia actualizada" });
     }
}

export const productosController = new ProductosController();
