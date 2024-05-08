import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { EditFornecedorComponent } from './components/edit-fornecedor/edit-fornecedor.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FornecedorComponent, EditFornecedorComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cpCrud';
}
