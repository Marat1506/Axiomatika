import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-city-details-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './city-details-dialog.component.html',
  styleUrl: './city-details-dialog.component.css'
})
export class CityDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    console.log("dkmdf = ", data)
  }
}
