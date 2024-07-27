import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule, ReactiveFormsModule, MatSlideToggleModule, MatButtonModule, MatInputModule],
  templateUrl: './tableCountry.component.html',
  styleUrl: './tableCountry.component.css'
})
export class TableCountryComponent implements OnChanges {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  router = inject(Router)


  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSource']) {
      console.log("dataSource = ", this.dataSource);
    }
  }
  click(countryName: string, countryId: string){
    console.log("iodkdkdkfld")
    this.router.navigate(['/cities'], {queryParams: {country: countryName, countryId: countryId}})
  }

  search(countryName: string) {
    if (countryName) {
      this.dataSource = this.dataSource.filter(country => country.name.toLowerCase() === countryName.toLowerCase());
    }
  }
}
