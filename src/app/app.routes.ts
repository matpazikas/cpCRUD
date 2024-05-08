import { Routes } from '@angular/router';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { EditFornecedorComponent } from './components/edit-fornecedor/edit-fornecedor.component';

export const routes: Routes = [
    {path: '', component: FornecedorComponent},
    {path: 'fornecedor', component: FornecedorComponent},
    {path: 'fornecedor/:id', component: EditFornecedorComponent},
];
