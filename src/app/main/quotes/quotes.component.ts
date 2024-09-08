import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent {

  constructor() {
    console.log(this.activeLang);
  }

  quotesDE: Array<{ text: string, name: string }> = [
    { 'text': 'Axel hat ein unglaubliches Gespür für sauberes, effizientes Frontend-Design und setzt Projekte immer mit einem hohen Anspruch an Usability um.', 
      'name': 'Sarah W. – Teampartnerin' },
    { 'text': 'Wenn es um Angular geht, ist Axel unser Experte. Er nutzt die neuesten Features optimal und sorgt für sauberen, wartbaren Code.', 
      'name': 'Tobias D. – Teampartner' },
    { 'text': 'Axel ist sehr lösungsorientiert und bringt oft innovative Ideen ein, die unsere Projekte auf das nächste Level heben.', 
      'name': 'Tina B. – Teampartnerin' },
    { 'text': 'Mit Axel zu arbeiten bedeutet, dass man immer mit einem Auge für Details und einem starken Designbewusstsein rechnen kann.', 
      'name': 'Cem Ö. – Teampartner' },
    { 'text': 'Axel behält auch in komplexen Projekten den Überblick und findet immer eine elegante Lösung für jedes Problem.', 
      'name': 'Lena O. – Teampartnerin' }
  ];
  
  quotesEN: Array<{ text: string, name: string }> = [
    { 'text': 'Axel has an incredible sense of clean, efficient frontend design and always implements projects with a high focus on usability.', 
      'name': 'Sarah W. – Team Partner' },
    { 'text': 'When it comes to Angular, Axel is our expert. He uses the latest features optimally and ensures clean, maintainable code.', 
      'name': 'Tobias D. – Team Partner' },
    { 'text': 'Axel is very solution-oriented and often brings innovative ideas that take our projects to the next level.', 
      'name': 'Tina B. – Team Partner' },
    { 'text': 'Working with Axel means you can always count on attention to detail and a strong design sense.', 
      'name': 'Cem Ö. – Team Partner' },
    { 'text': 'Axel keeps track of even complex projects and always finds an elegant solution for every problem.', 
      'name': 'Lena O. – Team Partner' }
  ];


  currentIndex: number = 0; // Der Index der aktuell hervorgehobenen Quote

  // Berechnet die sichtbaren Quotes mit der hervorgehobenen in der Mitte


  translationData = inject(TranslationsService);

  activeLang: 'en' | 'de' = 'en';

  // wird bei Klick ausgeführt
  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang); 
  }

  

  get visibleQuotes(): Array<{ text: string, name: string }> {
    const total = 5; // Da du 5 Zitate hast (basierend auf deiner Struktur)
  
    return [
      this.getTranslation((this.currentIndex - 1 + total) % total),
      this.getTranslation(this.currentIndex),
      this.getTranslation((this.currentIndex + 1) % total),
    ];
  }

  // Methode zum Vorwärtsnavigieren
  nextQuote(): void {
    this.currentIndex = (this.currentIndex + 1) % this.quotesEN.length;
  }

  prevQuote(): void {
    this.currentIndex = (this.currentIndex - 1 + this.quotesEN.length) % this.quotesEN.length;
  }

  getGeneralTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  getTranslation(index: number): { text: string, name: string } {
    const quoteKey = `QUOTES.QUOTE${index + 1}`; // QUOTE1, QUOTE2, ...
    const personKey = `QUOTES.PERSON${index + 1}`; // PERSON1, PERSON2, ...
  
    const text = this.translationData.getTranslation(quoteKey);
    const name = this.translationData.getTranslation(personKey);
  
    return { text, name };
  }

}
