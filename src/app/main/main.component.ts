import { Component } from '@angular/core';
import { StartComponent } from './start/start.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StartComponent, AboutmeComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
