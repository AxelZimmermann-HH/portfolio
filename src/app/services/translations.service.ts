import { Injectable } from '@angular/core';
import { translations } from '../translations/translations';
import { TranslationStructure } from '../models/translation.interface'


@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  private translations: { en: TranslationStructure; de: TranslationStructure } = translations;
  // Verwende die importierten Übersetzungen
  private currentLanguage: 'en' | 'de' = 'en';
  

  constructor() { }

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage = lang;
  }

  getTranslation(key: string): any {
    // Splitte den Schlüssel, um verschachtelte Werte wie "HEADER.TITLE" zu finden
    return key.split('.').reduce((o: any, i) => o?.[i], this.translations[this.currentLanguage]);
  }
}


