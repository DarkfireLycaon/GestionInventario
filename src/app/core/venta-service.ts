import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from './venta/venta';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
// venta.service.ts
export class VentaService {
  private urlEndPoint: string = `${environment.apiUrl}/inventario-app/ventas`;
private clienteHttp = inject(HttpClient);

  constructor(private http: HttpClient) { }

  listarVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.urlEndPoint);
  }
  agregarVenta(venta: Venta): Observable<Object>{
    return this.clienteHttp.post(this.urlEndPoint, venta);
  }
}
