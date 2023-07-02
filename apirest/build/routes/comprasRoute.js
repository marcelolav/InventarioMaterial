"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comprasController_1 = require("../controller/comprasController");
class ComprasRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/cabecera", comprasController_1.comprasController.getComprasCabeceras);
        this.router.get("/cabecera/:id", comprasController_1.comprasController.getCompraCabecera);
        this.router.get("/detalle", comprasController_1.comprasController.getComprasDetalles);
        this.router.get("/detalle/:id", comprasController_1.comprasController.getCompraDetalle);
        this.router.post("/cabecera", comprasController_1.comprasController.addCompraCabecera);
        this.router.post("/detalle", comprasController_1.comprasController.addCompraDetalle);
    }
}
exports.default = new ComprasRoute().router;
