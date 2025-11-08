import { Component } from '@angular/core';
import { Norma } from '../../core/models/norma.model';
import { DataService } from '../../core/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-normas.component',
  imports: [
    CommonModule,

  ],
  templateUrl: './normas.component.html',
  styleUrl: './normas.component.scss'
})
export class NormasComponent {
  
  normas: Norma[] = [
    {
      titulo: 'ISO/IEC 25010',
      descripcion: 'Define un modelo de calidad del producto de software basado en ocho características principales como fiabilidad, usabilidad y eficiencia.',
      icono: 'fa-solid fa-certificate',
      enlace: 'https://iso25000.com/index.php/en/iso-25000-standards/iso-25010'
    },
    {
      titulo: 'ISO 9001',
      descripcion: 'Estándar internacional centrado en la gestión de la calidad y la mejora continua dentro de las organizaciones.',
      icono: 'fa-solid fa-check-circle',
      enlace: 'https://www.iso.org/iso-9001-quality-management.html'
    },
    {
      titulo: 'CMMI (Capability Maturity Model Integration)',
      descripcion: 'Modelo que evalúa y mejora la madurez de los procesos de desarrollo y mantenimiento de software.',
      icono: 'fa-solid fa-layer-group',
      enlace: 'https://cmmiinstitute.com/'
    },
    {
      titulo: 'IEEE 829',
      descripcion: 'Norma enfocada en la documentación y planificación de pruebas de software, asegurando trazabilidad y control.',
      icono: 'fa-solid fa-file-contract',
      enlace: 'https://ieeexplore.ieee.org/document/1703843'
    }
  ];

  abrirEnlace(url: string | undefined) {
    if (url) window.open(url, '_blank');
  }
}
