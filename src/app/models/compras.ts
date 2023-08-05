export interface ComprasCabecera {
	fecha: Date;
	comprobante_cabecera: number;
	idclientes_cabecera: number;
	totalventa: number;
}

export interface ComprasDetalle {
	comprobante_detalle: number;
	idproductos_detalle: number;
	importe: number;
	cantidad: number;
	subtotal: number;
}
