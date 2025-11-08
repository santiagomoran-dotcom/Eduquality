import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recomendaciones.component',
  imports: [
    CommonModule
  ],
  templateUrl: './recomendaciones.component.html',
  styleUrl: './recomendaciones.component.scss'
})
export class RecomendacionesComponent {

  appTitle = 'EduQuality';

  recomendaciones = [
    {
      title: 'Automatiza las pruebas',
      description: 'Implementa pruebas automatizadas para detectar errores rápidamente y garantizar consistencia.',
      icon: 'fa-solid fa-robot'
    },
    {
      title: 'Aplica revisiones de código',
      description: 'Revisar el código entre pares ayuda a mantener estándares de calidad y detectar problemas tempranos.',
      icon: 'fa-solid fa-code-branch'
    },
    {
      title: 'Documenta procesos',
      description: 'Mantén documentación actualizada de procesos y requerimientos para facilitar mantenimiento y auditoría.',
      icon: 'fa-solid fa-file-alt'
    },
    {
      title: 'Capacita al equipo',
      description: 'Formación continua en buenas prácticas, metodologías y estándares asegura calidad constante.',
      icon: 'fa-solid fa-chalkboard-teacher'
    }
  ];

}
