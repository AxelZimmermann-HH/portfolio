import { Component, Renderer2, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private renderer: Renderer2) {};

  title = 'portfolio';
  isProjectLayerVisible = false;

  showLayer() {
    this.isProjectLayerVisible = true;
  }

  hideLayer() {
    this.isProjectLayerVisible = false;
  }
  
}
