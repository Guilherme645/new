import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IStaticMethods } from 'preline'; // Import Preline's static methods type

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
  standalone: false
})
export class FormCreateComponent implements OnInit {
   form!: FormGroup;
  descriptionLength: number = 0;
  readonly MAX_DESCRIPTION_LENGTH: number = 500;

  indexationTypes: string[] = ['APIP Rest', 'Database', 'Filesystem', 'Mongo DB', 'Penlink + Neoway']; // Sample data
  models: string[] = ['Registro', 'Pessoa', 'Pessoa Penlink + Neoway']; // Sample data

  private descriptionChangesSubscription?: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      collectionName: ['', Validators.required],
      urlId: ['', [Validators.required, Validators.pattern(/^(\/[\w-]+)+$/)]], // Example pattern for URL-like ID
      description: ['', [Validators.required, Validators.maxLength(this.MAX_DESCRIPTION_LENGTH)]],
      indexationType: ['', Validators.required],
      model: ['', Validators.required]
    });

    // Initialize descriptionLength with current value (e.g., if form is pre-filled)
    this.descriptionLength = this.form.get('description')?.value.length || 0;

    // Subscribe to description changes to update length
    this.descriptionChangesSubscription = this.form.get('description')?.valueChanges.subscribe(value => {
      this.descriptionLength = value?.length || 0;
    });

    // Preline UI re-initialization (if needed after dynamic content changes, e.g., *ngFor)
    // This might be more relevant in ngAfterViewInit or after specific async operations
    // For simple forms, Preline's CSS might be enough without JS re-init.
    // setTimeout(() => {
    //   if (window.HSStaticMethods) {
    //     window.HSStaticMethods.autoInit();
    //   }
    // }, 0);
  }



  ngOnDestroy(): void {
    if (this.descriptionChangesSubscription) {
      this.descriptionChangesSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulário Enviado:', this.form.value);
      // Aqui você processaria os dados do formulário
      // Ex: this.myApiService.saveCollection(this.form.value).subscribe(...);
    } else {
      console.log('Formulário inválido. Verifique os campos.');
      // Marcar todos os campos como "touched" para exibir mensagens de erro de validação
      this.form.markAllAsTouched();
    }
  }

  // Helper to easily access form controls in the template for error messages, etc.
  get f() { return this.form.controls; }
}