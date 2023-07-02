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
exports.rubrosController = void 0;
const database_1 = __importDefault(require("../database"));
class RubrosController {
    // Muestra todos los rubros de la tabla rubros
    getRubros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rubros = yield database_1.default.query("SELECT * FROM rubros");
            res.json(rubros);
        });
    }
    // Muestra un solo rubro de la tabla rubros por ID
    getRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const rubros = yield database_1.default.query("SELECT * FROM rubros WHERE idrubros = ?", [id]);
            if (rubros.length > 0) {
                return res.json(rubros[0]);
            }
            res.status(404).json({ text: "El rubro no existe!" });
        });
    }
    // Agrega un rubro
    addRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const result = yield database_1.default.query("INSERT INTO rubros SET ?", [req.body]);
            res.json({ message: "El rubro ha sido agregado con éxito." });
        });
    }
    // Actualiza un rubro por numero de id
    updateRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE rubros set ? WHERE idrubros = ?", [req.body, id]);
            res.json({ message: "El rubro ha sido actualizado con éxito!" });
        });
    }
    // Elimina un rubro por numero de id
    deleteRubro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM rubros WHERE idrubros = ?", [id]);
            res.json({ message: "El rubro ha sido eliminado con éxito!" });
        });
    }
}
exports.rubrosController = new RubrosController();
