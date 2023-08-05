export interface Producto {
	idproductos?: number;
	codigobarra: string;
	nombreproducto: string;
	descripcion: string;
	precioventa: number;
	precioventausd: number;
	preciocompra: number;
	preciocomprausd: number;
	existencia: number;
	minimo: number;
	rubroid: number;
}

// export interface ProductoCompleto {
// 	idproductos?: number;
// 	codigobarra: string;
// 	nombreproducto: string;
// 	descripcion: string;
// 	precio: number;
// 	preciocompra: number;
// 	existencia: number;
// 	preciorefdolar: number;
// 	rubroid: number;
// 	nombrerubro: string;
// }
