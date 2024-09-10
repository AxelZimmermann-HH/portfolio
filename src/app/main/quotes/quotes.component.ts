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

  currentIndex: number = 0; 
  isTransformed = false;

  get visibleQuotes(): Array<{ text: string, name: string }> {
    const total = 5; 
  
    return [
      this.getTranslation((this.currentIndex - 1 + total) % total),
      this.getTranslation(this.currentIndex),
      this.getTranslation((this.currentIndex + 1) % total),
    ];
  }

  transformQuotes() {
    this.isTransformed = true;
  }

  nextQuote(): void {
    this.currentIndex = (this.currentIndex + 1) % this.quotesEN.length;
  }

  prevQuote(): void {
    this.currentIndex = (this.currentIndex - 1 + this.quotesEN.length) % this.quotesEN.length;
    this.transformQuotes();
  }

  getGeneralTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang); 
  }

  getTranslation(index: number): { text: string, name: string } {
    const quoteKey = `QUOTES.QUOTE${index + 1}`; 
    const personKey = `QUOTES.PERSON${index + 1}`; 
  
    const text = this.translationData.getTranslation(quoteKey);
    const name = this.translationData.getTranslation(personKey);
  
    return { text, name };
  }
}