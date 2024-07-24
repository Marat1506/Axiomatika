import { Component, inject } from '@angular/core';
import { TableComponent } from '../../common-ui/table/table.component';
import { ServicesService } from '../../data/services/services.service';
import { CountryData } from '../../data/services/interface';




@Component({
  selector: 'app-country',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})


export class CountryComponent {
  dataService = inject(ServicesService)
  dataSource: CountryData[] = []

  constructor() {
    this.dataService.getCountry().subscribe(val => {
      this.dataSource =  val.data;
    });
  }
}
