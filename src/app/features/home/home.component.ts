import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home.component',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  description = 'Plataforma interactiva para aprender y aplicar la calidad de software en entornos profesionales.';

  features = [
    {
      title: 'Normas',
      desc: 'Conoce las normas internacionales que garantizan la calidad del software.',
      icon: 'fa-solid fa-scale-balanced',
      route: 'normas'
    },
    {
      title: 'Modelos',
      desc: 'Descubre modelos como CMMI, ISO/IEC 25010 y su aplicación educativa.',
      icon: 'fa-solid fa-layer-group',
      route: 'modelos'
    },
    {
      title: 'Estándares',
      desc: 'Explora estándares clave que orientan el desarrollo de software de calidad.',
      icon: 'fa-solid fa-certificate',
      route: 'estandares'
    },
    {
      title: 'Código y Programación',
      desc: 'Aprende buenas prácticas de programación para garantizar software de calidad.',
      icon: 'fa-solid fa-code',
      route: 'codigo'
    },
    {
      title: 'Pruebas',
      desc: 'Realiza pruebas simuladas para evaluar métricas y atributos de calidad.',
      icon: 'fa-solid fa-vial-circle-check',
      route: 'pruebas'
    },
    {
      title: 'Conclusiones',
      desc: 'Reflexiones sobre la importancia de aplicar conceptos de calidad de software al desarrollar.',
      icon: 'fa-solid fa-brain',
      route: 'conclusiones'
    },
    {
      title: 'Recomendaciones',
      desc: 'Obtén consejos y buenas prácticas para mejorar la calidad de tus proyectos.',
      icon: 'fa-solid fa-lightbulb',
      route: 'recomendaciones'
    }
  ];

  constructor(private router: Router) {

  }

  goToFeature(feature: string) {
    this.router.navigate([`${feature}`])
  }

}
