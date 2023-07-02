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
exports.proveedoresController = void 0;
const database_1 = __importDefault(require("../database"));
class ProveedoresController {
    // Muestra todos los proveedores
    listaProveedores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const proveedores = yield database_1.default.query("SELECT * FROM proveedores");
            res.json(proveedores);
        });
    }
    // Muestra un solo proveedor por ID
    listaProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const proveedor = yield database_1.default.query("SELECT * FROM proveedores WHERE idproveedores = ?", [id]);
            if (proveedor.length > 0) {
                return res.json(proveedor[0]);
            }
            res.status(404).json({ text: "El proveedor no existe!" });
        });
    }
    // Agrega un proveedor
    agregaProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO proveedores set ?", [req.body]);
            res.json({ message: "Proveedor guardado con éxito!" });
        });
    }
    // Actualiza un proveedor por numero de id
    actualizaProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const fecha = new Date(req.body.fechaultimacompra).toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
            req.body.fechaultimacompra = fecha;
            yield database_1.default.query("UPDATE proveedores set ? WHERE idproveedores = ?", [req.body, id]);
            res.json({ message: "El proveedor ha sido actualizado con éxito!" });
        });
    }
    // Elimina un proveedor por numero de id
    eliminaProveedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM proveedores WHERE idproveedores = ?", [id]);
            res.json({ message: "El proveedor ha sido eliminado con éxito!" });
        });
    }
}
exports.proveedoresController = new ProveedoresController();
