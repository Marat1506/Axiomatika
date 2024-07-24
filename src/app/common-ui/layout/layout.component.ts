import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router)
  activeButton: 'countries' | 'cities' = 'countries';

  setActiveButton(button: 'countries' | 'cities') {
    this.activeButton = button;

    if(this.activeButton == 'cities'){
      console.log("City")
      this.router.navigate(['/cities'])
    }else{
      this.router.navigate(['/'])
    }
  }

  
}
