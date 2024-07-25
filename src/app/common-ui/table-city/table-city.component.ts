import { Component, inject, Input, SimpleChanges, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CountryData } from '../../data/services/interface';
import { ServicesService } from '../../data/services/services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-city',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, FormsModule, CommonModule],
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

  ngOnInit() {
    // Получаем список стран при инициализации компонента
    this.dataService.getCountry().subscribe(val => {
      this.selectData = val.data;
      console.log('selectData = ', this.selectData);

      // Если уже есть countryName в параметрах, используем его
      this.activatedRoute.queryParams.subscribe(params => {
        const countryParam = params['country'];
        if (countryParam) {
          this.countryName = countryParam;
          this.fetchCitiesByCountry(countryParam);
        }
      });
    });
  }

  onCountryChange(newCountry: string) {
    // Обновляем query-параметры URL
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { country: newCountry },
      queryParamsHandling: 'merge'
    });

    // Получаем данные городов для выбранной страны
    this.fetchCitiesByCountry(newCountry);
  }

  private fetchCitiesByCountry(countryName: string) {
    // Находим код страны по названию
    const country = this.selectData.find(c => c.name === countryName);
    if (country) {
      this.dataService.getCity(country.code).subscribe(val => {
        this.dataSource = val.data;
        console.log('dataSource = ', this.dataSource);
      });
    }
  }
}
