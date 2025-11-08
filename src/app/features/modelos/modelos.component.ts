import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelos.component',
  imports: [
    CommonModule
  ],
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.scss'
})
export class ModelosComponent {

  appTitle = 'EduQuality';

  modelos = [
    {
      title: 'CMMI',
      description: 'Modelo de madurez para mejorar procesos de desarrollo de software.',
      icon: 'fa-solid fa-layer-group',
      link: '/cmmi'
    },
    {
      title: 'SPICE (ISO/IEC 15504)',
      description: 'Modelo de evaluación de procesos de software que permite medir madurez y calidad.',
      icon: 'fa-solid fa-chart-line',
      link: '/spice'
    },
    {
      title: 'TMMi',
      description: 'Modelo para mejorar la madurez de las pruebas de software.',
      icon: 'fa-solid fa-vial',
      link: '/tmmi'
    },
    {
      title: 'Lean Software Development',
      description: 'Modelo basado en principios Lean para maximizar valor y minimizar desperdicio en software.',
      icon: 'fa-solid fa-bolt',
      link: '/lean'
    }
  ];

  constructor(private router: Router) {}

  goTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
