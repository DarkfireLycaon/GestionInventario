import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Proveedor } from './proveedor/proveedor';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
    private urlBase = `${environment.apiUrl}/proveedores`;
     private clienteHttp = inject(HttpClient);
     obtenerProveedorLista(): Observable<Proveedor[]>{
      return this.clienteHttp.get<Proveedor[]>(this.urlBase);
      }
      agregarProveedor(proveedor: Proveedor): Observable<Object> {
        return this.clienteHttp.post(this.urlBase, proveedor);
      }
      obtenerProveedorPorId(id: number){
       return this.clienteHttp.get<Proveedor>(`${this.urlBase}/${id}`);
      }
      editarProveedor(id: number, proveedor: Proveedor){
        return this.clienteHttp.put(`${this.urlBase}/${id}`, proveedor);
      }
      eliminarProveedor(id: number): Observable<Object>{
       return this.clienteHttp.delete(`${this.urlBase}/${id}`)
      }
    }
