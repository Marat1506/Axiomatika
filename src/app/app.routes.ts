import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryComponent } from './pages/country/country.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { LayoutComponent } from './common-ui/layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: '', component: CountryComponent},
        {path: 'cities', component: CitiesComponent}
    ]},
   
];
