import { Component, inject, Input, SimpleChanges, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CountryData } from '../../data/services/interface';
import { ServicesService } from '../../data/services/services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CityDetailsDialogComponent } from '../../city-details-dialog/city-details-dialog.component';
@Component({
  selector: 'app-table-city',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, FormsModule, CommonModule, MatDialogModule],
  templateUrl: './table-city.component.html',
  styleUrls: ['./table-city.component.css']
})
export class TableCityComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() countryName: string = '';
  dataService = inject(ServicesService);
  selectData: CountryData[] = [];
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  dialog = inject(MatDialog)

  ngOnInit() {
    // Получаем список стран при инициализации компонента
    this.dataService.getCountry().subscribe(val => {
      this.selectData = val.data;
      console.log('selectData = ', this.selectData);
    
    });
  }

  onCountryChange(newCountry: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { country: newCountry },
      queryParamsHandling: 'merge'
    });
    this.fetchCitiesByCountry(newCountry);
  }

  private fetchCitiesByCountry(countryName: string) {
    const country = this.selectData.find(c => c.name === countryName);
    console.log("rr = ", country)
    if (country) {
      this.dataService.getCity(country.wikiDataId).subscribe(val => {
        this.dataSource = val.data;
        console.log('dataSource = ', this.dataSource);
      });
    }
  }

  openCityDetails(city: any, countryName: string) {
    console.log("cityyy = ", city)
    // Открываем модальное окно с информацией о городе
    this.dialog.open(CityDetailsDialogComponent, {
      data: {city, countryName},
     
    });
  }
}
