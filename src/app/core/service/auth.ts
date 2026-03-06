import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = `${environment.apiUrl}/auth`;
  constructor(private http: HttpClient) { }

  login(creds: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, creds).pipe(
      tap((res: any) => {
        // Guardamos el token que viene del backend
        localStorage.setItem('token', res.token);
      })
    );
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    // Si el token existe y no es "null" ni vacío, lo devuelve
    if (token && token !== 'null' && token !== '') {
      return token;
    }
    return null;
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
