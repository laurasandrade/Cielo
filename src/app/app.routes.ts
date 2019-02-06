import { RouterModule, Routes } from '@angular/router';
import { GraficoComponent } from './grafico/grafico.component';


const appRoutes: Routes  = [
  { path: '', component: GraficoComponent },
  { path: 'grafico', component: GraficoComponent },
];

export const routing = RouterModule.forRoot(appRoutes);