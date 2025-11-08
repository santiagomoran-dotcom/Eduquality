import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    { path: 'normas', loadComponent: () => import('./features/normas/normas.component').then(m => m.NormasComponent) },
    { path: 'modelos', loadComponent: () => import('./features/modelos/modelos.component').then(m => m.ModelosComponent) },
    { path: 'estandares', loadComponent: () => import('./features/estandares/estandares.component').then(m => m.EstandaresComponent) },
    { path: 'codigo', loadComponent: () => import('./features/codigo/codigo.component').then(m => m.CodigoComponent) },
    { path: 'pruebas', loadComponent: () => import('./features/pruebas/pruebas.component').then(m => m.PruebasComponent) },
    { path: 'conclusiones', loadComponent: () => import('./features/conclusiones/conclusiones.component').then(m => m.ConclusionesComponent) },
    { path: 'recomendaciones', loadComponent: () => import('./features/recomendaciones/recomendaciones.component').then(m => m.RecomendacionesComponent) },
];
