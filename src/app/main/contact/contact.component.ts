import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  isChecked = false;
  showCheckboxError = false;

  placeholders = {
    name: '',
    email: '',
    message: ''
  };

  contactData = {
      name: "",
      email: "",
      message: "",
  }

  ngOnInit() {
    this.placeholders.name = this.getTranslation('CONTACTS.PLACEHOLDER1');
    this.placeholders.email = this.getTranslation('CONTACTS.PLACEHOLDER2');
    this.placeholders.message = this.getTranslation('CONTACTS.PLACEHOLDER3');
  }

  @ViewChild('messageInput') messageInput!: ElementRef;
  focusTextArea(inputElement: HTMLElement) {
    inputElement.focus();
  }

  focusInput(inputElement: HTMLInputElement) {
    inputElement.focus();
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showCheckboxError = false;
    }
  }

  onSubmit(ngForm: NgForm) {
    if (!this.isChecked) {
      this.showCheckboxError = true;
      return;
    }

    if (!ngForm.valid) {
      this.handleSubmitError(ngForm);
    } else {
      this.handleSubmitSuccess(ngForm);
    }
  }

  handleSubmitError(ngForm: NgForm) {
    this.showNameError(ngForm);
    this.showMailError(ngForm);
    this.showMessageError(ngForm);
  }

  showNameError(ngForm: NgForm) {
    if (ngForm.controls['name'] && ngForm.controls['name'].invalid) {
      this.placeholders.name = "Oops! It seems your name is missing";
    }
  }

  showMailError(ngForm: NgForm) {
    if (ngForm.controls['email'] && ngForm.controls['email'].invalid) {
      if (ngForm.controls['email'].errors?.['pattern']) {
        this.placeholders.email = "Please enter a valid email address";
        this.contactData.email = "";
      } else {
        this.placeholders.email = "Hoppla! Your email is required";
        this.contactData.email = "";
      }
    }
  }

  showMessageError(ngForm: NgForm) {
    if (ngForm.controls['message'] && ngForm.controls['message'].invalid) {
      this.placeholders.message = "What do you need to develop?";
    }
  }

  handleSubmitSuccess(ngForm: NgForm) {
    console.log(this.contactData);

    this.contactData.name = "";
    this.contactData.email = "";
    this.contactData.message = "";

    this.placeholders.name = this.getTranslation('CONTACTS.PLACEHOLDER1');
    this.placeholders.email = this.getTranslation('CONTACTS.PLACEHOLDER2');
    this.placeholders.message = this.getTranslation('CONTACTS.PLACEHOLDER3');

    ngForm.resetForm();
  }

  

  translationData = inject(TranslationsService);

  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);  
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);  
  }

}
