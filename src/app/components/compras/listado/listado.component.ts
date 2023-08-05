import { Component } from '@angular/core';
import { TableColums } from 'src/app/models/table-colums';
@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
	tableColumns: TableColums[] = [];

	setTableColumns() {
		this.tableColumns = [
			{
				label: 'Fecha',
				def: 'fecha',
				dataKey: 'fecha',
				dataType: 'date',
				formatt: 'dd-MM-yyyy',
			},
			{
				label: 'Comprobante',
				def: 'comprobante_cabecera',
				dataKey: 'comprobante_cabecera',
			},
			{
				label: 'Proveedor',
				def: 'idproveedores_cabecera',
				dataKey: 'idproveedores_cabecera',
			},
			{
				label: 'Total Compra',
				def: 'totalcompra',
				dataKey: 'totalcompra',
			},
		];
	}
}
