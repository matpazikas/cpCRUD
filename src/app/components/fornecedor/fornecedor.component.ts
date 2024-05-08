import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FornecedoresService } from '../../services/fornecedores.service';

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent {

  fornecedores:Fornecedor[] = [];
  fornecedorForm: FormGroup = new FormGroup([])

  constructor(private fornecedorService:FornecedoresService, private formBuilder:FormBuilder) {
    this.fornecedorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      id: ['', Validators.required]
    })
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } 

  inserir() {
    if (this.fornecedorForm.valid) {
      const fornecedorNovo: Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        endereco: this.fornecedorForm.value.endereco,
        telefone: this.fornecedorForm.value.telefone,
        id: this.generateRandomString(6),
      }

      this.fornecedorForm.reset()
      this.fornecedores.push(fornecedorNovo)
      this.fornecedorService.adicionar(fornecedorNovo).subscribe();
      alert('Cadastrado com sucesso!')

    }
  }

  listar():void {
    this.fornecedorService.listar().subscribe((listFornecedor) => (this.fornecedores = listFornecedor));
  }
  
  remover(id: string): void {
    this.fornecedores = this.fornecedores.filter((f) => f.id !== id);
    this.fornecedorService.remover(id).subscribe();
    alert("Removido com sucesso!");
  }

  ngOnInit():void {
    this.listar();
  }

}
