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
	fotorproducto?: string;
	rubro?: [];
}
export interface ProductoListaPrecios {
	idproductos: number;
	codigobarra: string;
	nombreproducto: string;
	precioventa: number;
	precioventausd: number;
	existencia: number;
	minimo: number;
	nombrerubro: string;
}
