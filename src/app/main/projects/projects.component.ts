import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  hoveredIndex: number | null = null;

  previews: string[] = [
    '../../../assets/img/preview_join.png',
    '../../../assets/img/preview_pokedex.png',
    '../../../assets/img/preview_pollo.png',
  ];

  setHoveredIndex(index: number | null) {
    this.hoveredIndex = index;
  }

}
