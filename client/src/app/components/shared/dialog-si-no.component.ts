import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-dialog-si-no',
	templateUrl: './dialog-si-no.component.html',
	styleUrls: ['./dialog-si-no.component.css'],
})
export class DialogSiNoComponent {
	constructor(
		public dialogRef: MatDialogRef<DialogSiNoComponent>,
		@Inject(MAT_DIALOG_DATA) public message: string
	) {}

	onClickNo(): void {
		this.dialogRef.close();
	}
}
