import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo.component',
  imports: [
    CommonModule
  ],
  templateUrl: './codigo.component.html',
  styleUrl: './codigo.component.scss'
})
export class CodigoComponent {

  appTitle = 'EduQuality';

  codigoEjemplos = [
    {
      title: 'Uso de buenas prácticas',
      description: 'Organiza tu código en funciones pequeñas y reutilizables.',
      icon: 'fa-solid fa-code',
      codeSnippet: `function calcularSuma(a, b) {
  return a + b;
}`
    },
    {
      title: 'Comentarios claros',
      description: 'Documenta tu código para que otros puedan entenderlo fácilmente.',
      icon: 'fa-solid fa-comment',
      codeSnippet: `// Esta función suma dos números \n y devuelve el resultado`
    },
    {
      title: 'Nomenclatura consistente',
      description: 'Usa nombres claros y consistentes para variables y funciones.',
      icon: 'fa-solid fa-font',
      codeSnippet: `let totalVentas = 0;`
    },
    {
      title: 'Evitar código duplicado',
      description: 'Reutiliza funciones y módulos para mantener mantenibilidad.',
      icon: 'fa-solid fa-copy',
      codeSnippet: `function mostrarMensaje(msg) {
  console.log(msg);
}`
    }
  ];

}
