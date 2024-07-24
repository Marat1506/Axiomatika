import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSource']) {
      console.log("dataSource = ", this.dataSource);
    }
  }
}
