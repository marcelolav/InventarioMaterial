import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
// Rutas de API y desde route va a tomar del controller
import indexRoutes from "./routes/indexRoute";
import productosRoute from "./routes/productosRoute";
import rubrosRoute from "./routes/rubrosRoute";
import ventasRoute from "./routes/ventasRoute";
import proveedoresRoute from "./routes/proveedoresRoute";
import serviciosRoute from "./routes/serviciosRoute";
import clientesRoute from "./routes/clientesRoute";
import comprasRoute from "./routes/comprasRoute";

class Server {
     public app: Application;

     constructor() {
          this.app = express();
          this.config();
          this.routes();
     }

     config(): void {
          this.app.set("port", process.env.PORT || 3000);
          this.app.use(morgan("dev"));
          this.app.use(cors());
          this.app.use(express.json());
          this.app.use(express.urlencoded({ extended: false }));
     }

     // aca irian las rutas de la api
     routes(): void {
          this.app.use("/", indexRoutes);
          this.app.use("/productos", productosRoute);
          this.app.use("/rubros", rubrosRoute);
          this.app.use("/clientes", clientesRoute);
          this.app.use("/proveedores", proveedoresRoute);
          this.app.use("/servicios", serviciosRoute);
          this.app.use("/ventas", ventasRoute);
          this.app.use("/compras", comprasRoute);
     }

     start() {
          this.app.listen(this.app.get("port"), () => {
               console.log("Servidor en puerto: ", this.app.get("port"));
          });
     }
}

const server = new Server();
server.start();
