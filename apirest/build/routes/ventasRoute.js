"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = require("../controller/ventasController");
class VentasRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Ventas Cabecera
        this.router.get("/cab/", ventasController_1.ventasController.listaVentasCabecera);
        this.router.get("/cab/:id", ventasController_1.ventasController.listaVentaCabecera);
        this.router.get("/cabcli/:id", ventasController_1.ventasController.listaVentasCabeceraCliente);
        this.router.post("/cab/", ventasController_1.ventasController.agregaVentaCabecera);
        this.router.put("/cab/:id", ventasController_1.ventasController.actualizaVentaCabecera);
        // ventas detalle
        this.router.get("/det/", ventasController_1.ventasController.listaVentasDetalle);
        this.router.get("/detcomp/:id", ventasController_1.ventasController.listaVentaDetalleComprobante);
        this.router.get("/detprod/:id", ventasController_1.ventasController.listaVentaDetalleProducto);
        this.router.post("/det/", ventasController_1.ventasController.agregaVentaDetalle);
        this.router.put("/det/:id", ventasController_1.ventasController.actualizaVentaDetalle);
        // Funciones varias
        this.router.get("/func/:id", ventasController_1.ventasController.calculaTotalVenta);
    }
}
exports.default = new VentasRoute().router;
