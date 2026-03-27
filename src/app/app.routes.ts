import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products';

export const routes: Routes = [
    {
        path: 'my-modal',
        loadComponent: () => import('./components/modal/modal').then(m => m.Modal)
    },
    {
        path: 'forms',
        loadComponent: () => import('./components/ra-form/ra-form').then(f => f.RaForm)
    },
    {
        path: 'products?category=categoryId&products=id',
        component: ProductsComponent
    }
];
