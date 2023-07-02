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
exports.comprasController = void 0;
const database_1 = __importDefault(require("../database"));
class ComprasController {
    // Muestra todos los registros de comprascabecera
    getComprasCabeceras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const compras = yield database_1.default.query("SELECT * FROM comprascabecera");
            res.json(compras);
        });
    }
    // Muestra un registro de comprascabecera por ID
    getCompraCabecera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const compra = yield database_1.default.query("SELECT * FROM comprascabecera WHERE idcomprascabecera = ?", [id]);
            if (compra.length > 0) {
                return res.json(compra[0]);
            }
            res.status(404).json({ text: "El registro de compra no existe!" });
        });
    }
    // Muestra todos los registros de comprasdetalle
    getComprasDetalles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const compras = yield database_1.default.query("SELECT * FROM comprasdetalle");
            res.json(compras);
        });
    }
    // Muestra un registro de comprasdetalle por id
    getCompraDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const compras = yield database_1.default.query("SELECT * FROM comprasdetalle WHERE comprobante_detalle = ?", [id]);
            res.json(compras);
        });
    }
    // Agrega registro en comprascabecera
    addCompraCabecera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO comprascabecera set ?", [req.body]);
            res.json({ message: "Cabecera de compra guardada con éxito!" });
        });
    }
    // Agrega registro en comprasdetalle
    addCompraDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO comprasdetalle set ?", [req.body]);
            res.json({ message: "Detalle de compra guardada con éxito!" });
        });
    }
}
exports.comprasController = new ComprasController();
