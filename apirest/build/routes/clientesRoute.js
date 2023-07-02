"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesController_1 = require("../controller/clientesController");
class ClientesRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", clientesController_1.clientesController.getClientes); // Obtiene todos los clientes
        this.router.get("/:id", clientesController_1.clientesController.getCliente); // Obtiene un cliente por numero de id
        this.router.post("/", clientesController_1.clientesController.addCliente); // Agrega un cliente
        this.router.put("/:id", clientesController_1.clientesController.updateCliente); // Actualiza un cliente por numero de id
        this.router.delete("/:id", clientesController_1.clientesController.deleteCliente); // Elimina un cliente por numero de id
    }
}
exports.default = new ClientesRoute().router;
