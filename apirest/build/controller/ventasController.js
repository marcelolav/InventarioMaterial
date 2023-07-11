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
exports.ventasController = void 0;
const database_1 = __importDefault(require("../database"));
class VentasController {
    // VENTAS CABECERA
    // Muestra todos los datos de la tabla ventas cabecera
    listaVentasCabecera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventascabecera = yield database_1.default.query("SELECT * FROM ventascabecera");
            res.json(ventascabecera);
        });
    }
    // Muestra un solo registro de ventas cabecera por comprobante
    listaVentaCabecera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ventas = yield database_1.default.query("SELECT * FROM ventascabecera WHERE comprobante_cabecera = ?", [id]);
            if (ventas.length > 0) {
                return res.json(ventas[0]);
            }
            res.status(404).json({ text: "El registro de ventas no existe!" });
        });
    }
    // Muestra los registros de ventas por cliente
    listaVentasCabeceraCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ventas = yield database_1.default.query("SELECT * FROM ventascabecera WHERE idclientes_cabecera = ?", [id]);
            if (ventas.length > 0) {
                return res.json(ventas);
            }
            res.status(404).json({ text: "El registro de ventas no existe!" });
        });
    }
    // Agrega un registro en ventas cabecera
    agregaVentaCabecera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO ventascabecera set ?", [req.body]);
            res.json({ message: "Registro de cabecera ventas guardado con éxito!" });
        });
    }
    // Actualiza registro de ventas cabecera por numero de id
    actualizaVentaCabecera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE ventascabecera set ? WHERE idventascabecera = ?", [req.body, id]);
            res.json({ message: "El registro de ventas ha sido actualizado!" });
        });
    }
    // VENTAS DETALLES
    // Muestra todos los datos de la tabla ventasdetalle
    listaVentasDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventasdetalle = yield database_1.default.query("SELECT * FROM ventasdetalle");
            res.json(ventasdetalle);
        });
    }
    // Obtiene los datos de ventasdetalle por numero de comprobante
    listaVentaDetalleComprobante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ventasdetalle = yield database_1.default.query("SELECT * FROM ventasdetalle WHERE comprobante_detalle= ?", [id]);
            if (ventasdetalle.length > 0) {
                return res.json(ventasdetalle);
            }
            res.status(404).json({ text: "El registro de ventas no existe!" });
        });
    }
    // Obtiene ventasdetalle por id producto
    listaVentaDetalleProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ventasdetalle = yield database_1.default.query("SELECT * FROM ventasdetalle WHERE idproductos_detalle= ?", [id]);
            if (ventasdetalle.length > 0) {
                return res.json(ventasdetalle);
            }
            res.status(404).json({ text: "El registro de ventas no existe!" });
        });
    }
    // Agrega un registro en ventas detalle
    agregaVentaDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO ventasdetalle set ?", [req.body]);
            res.json({ message: "Registro de detalle ventas guardado con éxito!" });
        });
    }
    // Actualiza registro de ventas detalle por numero de id
    actualizaVentaDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE ventasdetalle set ? WHERE idventasdetalle = ?", [req.body, id]);
            res.json({ message: "El registro de ventas ha sido actualizado!" });
        });
    }
    // Calcular el total de una venta pasando comprobante como dato.
    calculaTotalVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const totalVenta = yield database_1.default.query("SELECT sum(subtotal) as total FROM vw_ventascondetalles  where comprobante_detalle= ?", [id]);
            if (totalVenta.length > 0) {
                return res.json(totalVenta);
            }
            res.status(404).json({ text: "No existe el comprobante referenciado!" });
        });
    }
    // Para el listado de las ventas con toda la info
    listadoventascondetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventasdetalles = yield database_1.default.query("SELECT * FROM vw_ventascondetalles");
            return res.json(ventasdetalles);
        });
    }
}
exports.ventasController = new VentasController();
