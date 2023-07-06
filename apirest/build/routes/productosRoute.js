"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controller/productosController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", productosController_1.productosController.listaProductos);
        this.router.get("/:id", productosController_1.productosController.listaProducto);
        this.router.get("/cb/:codigobarra", productosController_1.productosController.muestraPorCodigobarra);
        this.router.put("/:id", productosController_1.productosController.actualizaProducto);
        this.router.post("/", productosController_1.productosController.agregaProducto);
        this.router.get("/actext/:id/:cantidadNueva/:operacion", productosController_1.productosController.actualizaExistencia);
        this.router.delete("/:id", productosController_1.productosController.eliminaProducto);
    }
}
exports.default = new ProductosRoutes().router;
