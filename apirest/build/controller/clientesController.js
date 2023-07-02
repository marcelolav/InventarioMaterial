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
exports.clientesController = void 0;
const database_1 = __importDefault(require("../database"));
class ClientesController {
    // Muestra todos los clientes
    getClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientes = yield database_1.default.query("SELECT * FROM clientes");
            res.json(clientes);
        });
    }
    // Muestra un solo cliente por ID
    getCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield database_1.default.query("SELECT * FROM clientes WHERE idclientes = ?", [id]);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            res.status(404).json({ text: "El cliente no existe!" });
        });
    }
    // Agrega un cliente
    addCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO clientes set ?", [req.body]);
            res.json({ message: "cliente guardado con éxito!" });
        });
    }
    // Actualiza un cliente por numero de id
    updateCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE clientes set ? WHERE idclientes = ?", [req.body, id]);
            res.json({ message: "El cliente ha sido actualizado con éxito!" });
        });
    }
    // Elimina un cliente por numero de id
    deleteCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM clientes WHERE idclientes = ?", [id]);
            res.json({ message: "El cliente ha sido eliminado con éxito!" });
        });
    }
}
exports.clientesController = new ClientesController();
