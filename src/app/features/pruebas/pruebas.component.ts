import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pruebas.component',
  imports: [
    CommonModule
  ],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.scss'
})
export class PruebasComponent {

  appTitle = 'EduQuality';

  pruebas = [
    {
      title: 'Pruebas Unitarias',
      description: 'Verifica individualmente cada componente del software.',
      icon: 'fa-solid fa-code',
      link: '/unitarias'
    },
    {
      title: 'Pruebas de Integración',
      description: 'Comprueba la interacción entre módulos o servicios.',
      icon: 'fa-solid fa-puzzle-piece',
      link: '/integracion'
    },
    {
      title: 'Pruebas Funcionales',
      description: 'Garantiza que el software cumpla con los requisitos funcionales.',
      icon: 'fa-solid fa-check-double',
      link: '/funcionales'
    },
    {
      title: 'Pruebas de Usabilidad',
      description: 'Evalúa la experiencia y facilidad de uso del software.',
      icon: 'fa-solid fa-users',
      link: '/usabilidad'
    }
  ];

  evaluationResults = [
    { name: 'Funcionalidad', score: 4.5 },
    { name: 'Usabilidad', score: 4.0 },
    { name: 'Rendimiento', score: 3.8 },
    { name: 'Seguridad', score: 4.2 }
  ];

  constructor(private router: Router) {}

  goTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
