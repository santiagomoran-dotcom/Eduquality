import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conclusiones.component',
  imports: [
    CommonModule
  ],
  templateUrl: './conclusiones.component.html',
  styleUrl: './conclusiones.component.scss'
})
export class ConclusionesComponent {

  appTitle = 'EduQuality';

  conclusiones = [
    {
      title: 'Normas',
      description: 'Seguir normas internacionales como ISO asegura que el software cumpla con estándares de calidad y reduce errores en etapas tempranas del desarrollo.',
      icon: 'fa-solid fa-scale-balanced'
    },
    {
      title: 'Modelos de Calidad',
      description: 'Aplicar modelos como CMMI permite evaluar y mejorar los procesos de desarrollo de manera estructurada y medible, incrementando la eficiencia del equipo.',
      icon: 'fa-solid fa-layer-group'
    },
    {
      title: 'Estándares',
      description: 'Mantener estándares garantiza consistencia, mantenibilidad y confiabilidad en el código, facilitando futuras modificaciones y colaboración en proyectos grandes.',
      icon: 'fa-solid fa-certificate'
    },
    {
      title: 'Buenas Prácticas de Programación',
      description: 'Implementar buenas prácticas como modularidad, documentación clara y nomenclatura consistente mejora la mantenibilidad, portabilidad y seguridad del software.',
      icon: 'fa-solid fa-code'
    },
    {
      title: 'Pruebas',
      description: 'Realizar pruebas sistemáticas asegura que los requerimientos funcionales y no funcionales se cumplen, reduciendo fallos en producción y mejorando la experiencia del usuario.',
      icon: 'fa-solid fa-vial-circle-check'
    }
  ];

}
