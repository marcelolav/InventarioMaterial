"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Rutas de API y desde route va a tomar del controller
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
const productosRoute_1 = __importDefault(require("./routes/productosRoute"));
const rubrosRoute_1 = __importDefault(require("./routes/rubrosRoute"));
const ventasRoute_1 = __importDefault(require("./routes/ventasRoute"));
const proveedoresRoute_1 = __importDefault(require("./routes/proveedoresRoute"));
const serviciosRoute_1 = __importDefault(require("./routes/serviciosRoute"));
const clientesRoute_1 = __importDefault(require("./routes/clientesRoute"));
const comprasRoute_1 = __importDefault(require("./routes/comprasRoute"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // aca irian las rutas de la api
    routes() {
        this.app.use("/", indexRoute_1.default);
        this.app.use("/productos", productosRoute_1.default);
        this.app.use("/rubros", rubrosRoute_1.default);
        this.app.use("/clientes", clientesRoute_1.default);
        this.app.use("/proveedores", proveedoresRoute_1.default);
        this.app.use("/servicios", serviciosRoute_1.default);
        this.app.use("/ventas", ventasRoute_1.default);
        this.app.use("/compras", comprasRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Servidor en puerto: ", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
