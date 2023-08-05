export interface VentasListadoTotal {
	idventascabecera: number;
	fecha: Date;
	comprobante_cabecera: number;
	idclientes_cabecera: number;
	totalventa: number;
	idventasdetalle: number;
	comprobante_detalle: number;
	idproductos_detalle: number;
	cantidad: number;
	importe: number;
	subtotal: number;
	idproductos: number;
	codigobarra: string;
	nombreproducto: string;
	descripcion: string;
	precio: number;
	preciocompra: number;
	existencia: number;
	preciorefdolar: number;
	rubroid: number;
	idclientes: number;
	nombrecliente: string;
	telefono: string;
	direccion: string;
	cuit: string;
	observaciones: string;
}
export interface VentasDetalleComprobante {
	idventasdetalle: number;
	comprobante_detalle: number;
	idproductos_detalle: number;
	cantidad: number;
	importe: number;
	subtotal: number;
	idproductos: number;
	nombreproducto: string;
	descripcion: string;
	precio: number;
}
