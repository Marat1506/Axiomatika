import { Component, inject } from '@angular/core';
import { ServicesService } from '../../data/services/services.service';
import { CountryData } from '../../data/services/interface';
import { TableCountryComponent } from '../../common-ui/tableCountry/tableCountry.component';
import { TableCityComponent } from "../../common-ui/table-city/table-city.component";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [TableCountryComponent, TableCityComponent],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  dataService = inject(ServicesService)
  dataSource: CountryData[] = []
  countryName = ""

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.countryName = params['country']
      const id = params['countryId'];
      console.log("IDDDD = ", id)
      if (id) {
        this.dataService.getCity(id).subscribe(val => {
          console.log("srt = ", val);
          this.dataSource = val.data;
          console.log("val = ", val);
          console.log("city = ", this.dataSource);
        });
      } else {
        console.error('Name and/or ID query parameters are missing');
      }
    });
  }

}
