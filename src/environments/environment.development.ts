// src/environments/environment.ts
export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || 'https://gestioninventariospringboot.onrender.com' // fallback // <-- AQUÍ PEGA TU URL DE RENDER
};