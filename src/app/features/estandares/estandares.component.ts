import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estandares.component',
  imports: [
    CommonModule
  ],
  templateUrl: './estandares.component.html',
  styleUrl: './estandares.component.scss'
})
export class EstandaresComponent {
appTitle = 'EduQuality';

  estandares = [
    {
      title: 'ISO/IEC 12207',
      description: 'Estándar para procesos de ciclo de vida del software.',
      icon: 'fa-solid fa-cogs',
      link: '/iso-12207'
    },
    {
      title: 'ISO/IEC 15504 (SPICE)',
      description: 'Proporciona un marco para la evaluación de procesos de software.',
      icon: 'fa-solid fa-chart-line',
      link: '/iso-15504'
    },
    {
      title: 'IEEE 1012',
      description: 'Estándar de verificación y validación de software.',
      icon: 'fa-solid fa-check-circle',
      link: '/ieee-1012'
    },
    {
      title: 'ISO/IEC 25010',
      description: 'Define las características de calidad del producto de software.',
      icon: 'fa-solid fa-layer-group',
      link: '/iso-25010'
    }
  ];

  constructor(private router: Router) {}

  goTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
