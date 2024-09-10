import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  links: Array<{ text: string, link: string, target: string }> = [
    {'text': 'Github', 'link': 'https://github.com/AxelZimmermann-HH', 'target': '_blank'},
    {'text': 'LinkedIn', 'link': 'https://www.linkedin.com/in/axel-zimmermann-0b143597/', 'target': '_blank'},
    {'text': 'Email', 'link': 'mailto:axel@axel-zimmermann.com', 'target': '_blank'},
    {'text': 'Impressum', 'link': '#', 'target': ''},
  ]

}
