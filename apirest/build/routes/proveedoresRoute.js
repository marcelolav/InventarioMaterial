"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedoresController_1 = require("../controller/proveedoresController");
class ProveedoresRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", proveedoresController_1.proveedoresController.listaProveedores);
        this.router.get("/:id", proveedoresController_1.proveedoresController.listaProveedor);
        this.router.post("/", proveedoresController_1.proveedoresController.agregaProveedor);
        this.router.put("/:id", proveedoresController_1.proveedoresController.actualizaProveedor);
        this.router.delete("/:id", proveedoresController_1.proveedoresController.eliminaProveedor);
    }
}
exports.default = new ProveedoresRoute().router;
