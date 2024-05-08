import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../interfaces/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  private fornecedoresUrl = "http://localhost:3000/fornecedores"
  constructor(private http: HttpClient) {
    
  }

  listar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.fornecedoresUrl) as Observable<Fornecedor[]>;
    //return this.clientes
  }

  getById(id:String) {
    return this.http.get(`${this.fornecedoresUrl}/${id}`) as Observable<Fornecedor>
  }

  remover(id:string) {
    /*const cliente = this.clientes.find(c => c.id == id);

    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
    }*/

    return this.http.delete(`${this.fornecedoresUrl}/${id}`)

  }

  httpHeader = {
    headers: {
      "Content-Type":"application/json"
    }
  }

  atualizar(fornecedor:Fornecedor) {
    return this.http.put(`${this.fornecedoresUrl}/${fornecedor.id}`, fornecedor, this.httpHeader)
  }

  adicionar(fornecedor:Fornecedor) {
    return this.http.post(this.fornecedoresUrl, fornecedor, this.httpHeader)
    //this.clientes.push(cliente);
  }
}
