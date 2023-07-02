"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rubrosController_1 = require("../controller/rubrosController");
class RubrosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', rubrosController_1.rubrosController.getRubros); // Obtiene todos los rubros
        this.router.get('/:id', rubrosController_1.rubrosController.getRubro); // Obtiene un rubro por numero de id
        this.router.post('/', rubrosController_1.rubrosController.addRubro); // Agregar un rubro
        this.router.put('/:id', rubrosController_1.rubrosController.updateRubro); // Actualizar un rubro por numero de id
        this.router.delete('/:id', rubrosController_1.rubrosController.deleteRubro); // Eliminar un rubro por numero de id
    }
}
exports.default = new RubrosRoutes().router;
