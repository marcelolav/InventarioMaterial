import express, { Router } from 'express';

import { rubrosController } from '../controller/rubrosController';

class RubrosRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', rubrosController.getRubros);   // Obtiene todos los rubros
    this.router.get('/:id', rubrosController.getRubro); // Obtiene un rubro por numero de id
    this.router.post('/', rubrosController.addRubro); // Agregar un rubro
    this.router.put('/:id', rubrosController.updateRubro); // Actualizar un rubro por numero de id
    this.router.delete('/:id', rubrosController.deleteRubro);  // Eliminar un rubro por numero de id
  }
}
export default new RubrosRoutes().router;
