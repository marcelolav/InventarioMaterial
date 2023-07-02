"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviciosController_1 = require("../controller/serviciosController");
class ServiciosRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", serviciosController_1.serviciosController.listaServicios);
        this.router.get("/pendientes/", serviciosController_1.serviciosController.listaServiciosPendientes);
        this.router.get("/:id", serviciosController_1.serviciosController.listaServicio);
        this.router.post("/", serviciosController_1.serviciosController.agregaServicio);
        this.router.put("/:id", serviciosController_1.serviciosController.actualizaServicio);
        this.router.put("/entrega/:id", serviciosController_1.serviciosController.entregaService);
        this.router.delete("/:id", serviciosController_1.serviciosController.eliminaServicio);
    }
}
exports.default = new ServiciosRoute().router;
