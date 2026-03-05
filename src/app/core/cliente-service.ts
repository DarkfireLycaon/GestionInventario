import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cliente } from './cliente/cliente';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
 private urlBase = `${environment.apiUrl}/clientes`;
  private clienteHttp = inject(HttpClient);

    obtenerClienteLista(): Observable<Cliente[]>{
    return this.clienteHttp.get<Cliente[]>(this.urlBase);
    }
    agregarCliente(cliente: Cliente): Observable<Object> {
      return this.clienteHttp.post(this.urlBase, cliente);
    }
    obtenerClientePorId(id: number){
     return this.clienteHttp.get<Cliente>(`${this.urlBase}/${id}`);
    }
    editarCliente(id: number, cliente: Cliente){
      return this.clienteHttp.put(`${this.urlBase}/${id}`, cliente);
    }
    eliminarCliente(id: number): Observable<Object>{
     return this.clienteHttp.delete(`${this.urlBase}/${id}`)
    }
}
