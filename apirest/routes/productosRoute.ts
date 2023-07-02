import express, { Router } from "express";

import { productosController } from "../controller/productosController";

class ProductosRoutes {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/", productosController.listaProductos);
          this.router.get("/:id", productosController.listaProducto);
          this.router.get("/cb/:codigobarra", productosController.muestraPorCodigobarra);
          this.router.post("/", productosController.agregaProducto);
          this.router.get("/actext/:id/:cantidadNueva/:operacion", productosController.actualizaExistencia);
          this.router.put("/:id", productosController.actualizaProducto);
          this.router.delete("/:id", productosController.eliminaProducto);
     }
}

export default new ProductosRoutes().router;
