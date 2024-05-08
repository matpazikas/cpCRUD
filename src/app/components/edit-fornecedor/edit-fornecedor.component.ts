import { Component } from '@angular/core';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FornecedoresService } from '../../services/fornecedores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-fornecedor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-fornecedor.component.html',
  styleUrl: './edit-fornecedor.component.css'
})
export class EditFornecedorComponent {
  fornecedor?: Fornecedor;
  fornecedorForm: FormGroup = new FormGroup([])

  constructor(private route: ActivatedRoute, private fornecedoresService: FornecedoresService, private formBuilder: FormBuilder) {
    this.getClientById();
  }

  id?: string = "";
  getClientById(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.fornecedoresService.getById(this.id).subscribe((fornecedorResponse) => this.fornecedor = fornecedorResponse)

    this.fornecedorForm = this.formBuilder.group({
      nome: [this.fornecedor?.nome],
      telefone: [this.fornecedor?.telefone],
      endereco: [this.fornecedor?.endereco],
      id: [this.fornecedor?.id],
    })
  }

  update(): void {
    if (this.fornecedorForm.valid) {
      const fornecedorAlterado: Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        telefone: this.fornecedorForm.value.telefone,
        endereco: this.fornecedorForm.value.endereco,
        id: this.fornecedorForm.value.id,
      }

      this.fornecedoresService.atualizar(fornecedorAlterado).subscribe();
      alert("Alterado com sucesso!")
    }
  }
}
