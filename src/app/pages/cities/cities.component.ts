import { Component, inject } from '@angular/core';
import { ServicesService } from '../../data/services/services.service';
import { CountryData } from '../../data/services/interface';
import { TableComponent } from '../../common-ui/table/table.component';



@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  dataService = inject(ServicesService)
  dataSource: CountryData[] = []

  constructor(){
    this.dataService.getCity().subscribe(val => {
      this.dataSource =  val.data;
      console.log("val = ", val);
      console.log("city = ", this.dataSource);
    });
  }

}
