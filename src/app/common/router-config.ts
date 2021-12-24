import { Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
    { 
        path: 'github/:username', 
        component: HomeComponent 
    },
    {
        path: '',
        redirectTo: '/github/Vrihas123',
        pathMatch: 'full'
    },
    {
        path: '**', 
        component: ErrorComponent 
    }
  ];
  
export default appRoutes;