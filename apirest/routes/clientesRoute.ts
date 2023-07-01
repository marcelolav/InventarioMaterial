import express, { Router } from "express";

import { clientesController } from "../controller/clientesController";

class ClientesRoute {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/", clientesController.getClientes);  // Obtiene todos los clientes
          this.router.get("/:id", clientesController.getCliente);  // Obtiene un cliente por numero de id
          this.router.post("/", clientesController.addCliente);  // Agrega un cliente
          this.router.put("/:id", clientesController.updateCliente);  // Actualiza un cliente por numero de id
          this.router.delete("/:id", clientesController.deleteCliente);  // Elimina un cliente por numero de id
     }
}
export default new ClientesRoute().router;
