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
exports.productosController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductosController {
    // Muestra todos registros de tabla productos
    listaProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query("SELECT * FROM productos");
            res.json(productos);
        });
    }
    // Muestra un solo registro de la tabla productos por ID
    listaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield database_1.default.query("SELECT * FROM productos WHERE idproductos = ?", [id]);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.status(404).json({ text: "El producto no existe!" });
        });
    }
    // Muestra un solo producto de la tabla productos por codigobarra
    muestraPorCodigobarra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigobarra } = req.params;
            const productos = yield database_1.default.query("SELECT * FROM productos WHERE codigobarra = ?", [codigobarra]);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.status(404).json({ text: "El producto no existe!" });
        });
    }
    // Agrega un producto
    agregaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("INSERT INTO productos set ?", [req.body]);
            res.json({ message: "Producto guardado con éxito!" });
        });
    }
    // Actualiza un producto por numero de id
    actualizaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE productos set ? WHERE idproductos = ?", [req.body, id]);
            res.json({ message: "El producto ha sido actualizado con éxito!" });
        });
    }
    // Elimina un producto por numero de id
    eliminaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM productos WHERE idproductos = ?", [id]);
            res.json({ message: "El producto ha sido eliminado con éxito!" });
        });
    }
    // Actualiza la existencia de un producto por numero de id
    // uso:   actualizaExistencia(id, cantidadnueva, operacion)
    // Donde:  id es el id del producto
    //         cantidadNueva: es la cantidad de un producto a descontar o agregar
    //         operacion: puede ser 'compra' o 'venta'  compra agrega y ventas descuenta
    actualizaExistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, cantidadNueva, operacion } = req.params;
            const regCant = yield database_1.default.query(`SELECT * FROM productos WHERE idproductos = ${id}`);
            const ex_anterior = regCant[0].existencia;
            if (operacion === "venta") {
                // Venta restar de stock
                const ex_actual = Number(ex_anterior) - Number(cantidadNueva);
                if (ex_actual > 0) {
                    yield database_1.default.query(`UPDATE productos SET existencia = ${ex_actual} WHERE idproductos = ${id}`);
                }
            }
            if (operacion === "compra") {
                // compra sumar al stock
                const ex_actual = Number(ex_anterior) + Number(cantidadNueva);
                yield database_1.default.query(`UPDATE productos SET existencia = ${ex_actual} WHERE idproductos = ${id}`);
            }
            res.json({ message: "Existencia actualizada" });
        });
    }
}
exports.productosController = new ProductosController();
