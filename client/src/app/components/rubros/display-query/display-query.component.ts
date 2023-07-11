import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Rubro } from 'src/app/models/rubro';
import { RubrosService } from 'src/app/services/rubros.service';

@Component({
	selector: 'app-display-query',
	templateUrl: './display-query.component.html',
	styleUrls: ['./display-query.component.css'],
})
export class RubrosDisplayQueryComponent implements OnInit, AfterViewInit {
	rubros: Rubro[] = [];
	dataSource = new MatTableDataSource(this.rubros);
	displayedColumns: string[] = ['id', 'nombre'];
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	constructor(private rubrosService: RubrosService) {}

	ngOnInit(): void {
		this.getRubros();
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	getRubros() {
		this.rubrosService.getRubros().subscribe((data) => {
			this.dataSource.data = data;
			this.dataSource.sort = this.sort;
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
