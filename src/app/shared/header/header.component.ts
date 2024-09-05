import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  translationData = inject(TranslationsService);

  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  // Aktualisiere die Sprache im Service
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  // Übersetzung abrufen
  }
}
