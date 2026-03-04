import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('inventario-app');

 private router = inject(Router); 
  

  onLogout(): void {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: "Tendrás que ingresar tus credenciales nuevamente.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6f42c1',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false // Evita que se cierre accidentalmente
    }).then((result) => {
      if (result.isConfirmed) {
        // 2. Borramos TODO el almacenamiento para evitar rastros
        localStorage.clear();
        
        // 3. Navegación forzada
        this.router.navigate(['/login']).then(() => {
          // 4. Recarga la página para limpiar servicios y estados de memoria
          // Esto hace que el cambio sea radical y seguro
          window.location.reload(); 
        });
      }
    });
  }
}
