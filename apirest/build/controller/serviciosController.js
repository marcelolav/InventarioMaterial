"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviciosController = void 0;
const database_1 = __importDefault(require("../database"));
class ServiciosController {
    // Muestra los servicios pendientes
    listaServiciosPendientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query("SELECT * FROM servicios WHERE reparado = 0");
            res.json(servicios);
        });
    }
    // Muestra todos los items de la tabla servicios
    listaServicios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query("SELECT * FROM servicios");
            res.json(servicios);
        });
    }
    // Muestra un solo item de servicios por ID
    listaServicio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const servicio = yield database_1.default.query("SELECT * FROM servicios WHERE idservicios = ?", [id]);
            if (servicio.length > 0) {
                return res.json(servicio[0]);
            }
            res.status(404).json({ text: "El servicio no existe!" });
        });
    }
    // Agrega un item a la tabla servicios
    agregaServicio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaingreso = new Date(req.body.fechaingreso).toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
            const fechasalida = new Date(req.body.fechasalida).toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
            req.body.fechaingreso = fechaingreso;
            req.body.fechasalida = fechasalida;
            const result = yield database_1.default.query("INSERT INTO servicios set ?", [req.body]);
            res.json({ message: "El servicio ha sido guardado con éxito!" });
        });
    }
    // Actualiza un servicio por numero de id
    actualizaServicio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const fechaingreso = new Date(req.body.fechaingreso).toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
            const fechasalida = new Date(req.body.fechasalida).toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
            req.body.fechaingreso = fechaingreso;
            req.body.fechasalida = fechasalida;
            yield database_1.default.query("UPDATE servicios set ? WHERE idservicios = ?", [req.body, id]);
            res.json({ message: "El servicio ha sido actualizado con éxito!" });
        });
    }
    // Entrega un servicio por numero de id
    entregaService(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const fechasalida = new Date(req.body.fechasalida).toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
            req.body.fechasalida = fechasalida;
            yield database_1.default.query("UPDATE servicios set ? WHERE idservicios = ?", [req.body, id]);
            res.json({ message: "El servicio ha sido actualizado con éxito!" });
        });
    }
    // Elimina un servicio por numero de id
    eliminaServicio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM servicios WHERE idservicios = ?", [id]);
            res.json({ message: "El servicio ha sido eliminado con éxito!" });
        });
    }
}
exports.serviciosController = new ServiciosController();
