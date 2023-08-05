import { Component, Input, OnInit } from '@angular/core';
import { TableColums } from 'src/app/models/table-colums';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
	dataSource: any = [];
	tableDisplayColumns: string[] = [];
	tableColumns: TableColums[] = [];

	@Input() set data(data: any) {
		this.dataSource = data;
	}

	@Input() set columns(columns: TableColums[]) {
		this.tableColumns = columns;
		this.tableDisplayColumns = this.tableColumns.map((col) => col.def);
	}

	constructor() {}

	ngOnInit(): void {}
}
