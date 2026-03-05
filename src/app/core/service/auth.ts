import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = `${environment.apiUrl}/inventario-app/auth`;; 
  constructor(private http: HttpClient) { }

  login(creds: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, creds).pipe(
      tap((res: any) => {
        // Guardamos el token que viene del backend
        localStorage.setItem('token', res.token);
      })
    );
  }

  getToken() {
    const token = localStorage.getItem('token');
  
  // Esto asegura que el token exista y no sea solo la palabra "null"
  return token !== null && token !== 'null' && token !== undefined && token !== '';
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  // Añade este método a tu AuthService existente
registrar(usuario: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/registrar`, usuario);
}


  enviarEnlaceRecuperacion(email: string): Observable<any> {
    // La sintaxis debe ser: return this.http.post(url, cuerpo);
    return this.http.post(`${this.apiUrl}/olvide-password`, { email });
  }

  resetearPassword(token: string, nuevaPassword: string): Observable<any> {
    // Aquí usamos el DTO: token y nuevaPassword
    return this.http.post(`${this.apiUrl}/reset-password`, { 
      token: token, 
      nuevaPassword: nuevaPassword 
    });
  }
}