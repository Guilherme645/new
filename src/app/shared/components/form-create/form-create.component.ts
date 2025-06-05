// form-create.component.ts
import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core'; // Adicionado Input, OnChanges, SimpleChanges
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CollectionsService } from 'src/app/collections/service/collections.service'; // Mantém o serviço existente

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
  standalone: false
})
export class FormCreateComponent implements OnInit, OnDestroy, OnChanges { // Adicionado OnChanges
  @Input() entityType: 'collection' | 'project' = 'collection'; // Default para 'collection'

  form!: FormGroup;
  descriptionLength: number = 0;
  readonly MAX_DESCRIPTION_LENGTH: number = 500;

  // Propriedades para textos dinâmicos da UI
  title: string = '';
  subtitle: string = '';
  nameLabel: string = '';
  namePlaceholder: string = '';
  identifierLabel: string = '';
  identifierPlaceholder: string = '';
  descriptionPlaceholder: string = '';
  // Adicione mais se outros textos precisarem mudar (ex: títulos de seção)
  basicInfoTitle: string = 'Informações básicas'; // Mantido por enquanto
  indexingInfoTitle: string = 'Sobre a indexação'; // Mantido por enquanto


  indexationTypes: string[] = ['APIP Rest', 'Database', 'Filesystem', 'Mongo DB', 'Penlink + Neoway'];
  models: string[] = ['Registro', 'Pessoa', 'Pessoa Penlink + Neoway'];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private collectionsService: CollectionsService // Usando o serviço existente
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entityType']) {
      this.updateUITexts();
      // Se o formulário já existir e você precisar redefinir placeholders ou valores baseados no tipo
      // this.updateFormPlaceholdersOrValues(); // Implemente esta função se necessário
    }
  }

  ngOnInit(): void {
    this.updateUITexts(); // Define os textos da UI com base no entityType inicial

    this.form = this.fb.group({
      // Nomes de controle genéricos
      name: ['', Validators.required],
      identifier: ['', [Validators.required, Validators.pattern(/^(\/[\w-]+)+$/)]], // Pattern pode precisar ser ajustado para projetos
      description: ['', [Validators.required, Validators.maxLength(this.MAX_DESCRIPTION_LENGTH)]],
      indexationType: ['', Validators.required],
      model: ['', Validators.required]
    });

    this.descriptionLength = this.form.get('description')?.value.length || 0;

    this.subscriptions.add(
      this.form.get('description')?.valueChanges.subscribe(value => {
        this.descriptionLength = value?.length || 0;
      })
    );

    // Atualiza o nome da entidade no serviço (usando métodos existentes do CollectionsService)
    this.subscriptions.add(
      this.form.get('name')?.valueChanges.subscribe(nameValue => {
        this.collectionsService.updateCollectionName(nameValue || ''); // Envia para o método de coleção
      })
    );

    // Atualiza o identificador da entidade no serviço (usando métodos existentes do CollectionsService)
    this.subscriptions.add(
      this.form.get('identifier')?.valueChanges.subscribe(idValue => {
        this.collectionsService.updateUrlId(idValue || ''); // Envia para o método de coleção
      })
    );

    // Inicializa os valores no serviço
    this.collectionsService.updateCollectionName(this.form.get('name')?.value || '');
    this.collectionsService.updateUrlId(this.form.get('identifier')?.value || '');
  }

  updateUITexts(): void {
    if (this.entityType === 'project') {
      this.title = 'Criar Novo Projeto'; // Exemplo
      this.subtitle = 'Insira o nome, a descrição e o ID do projeto.';
      this.nameLabel = 'Nome do Projeto';
      this.namePlaceholder = 'Projeto Alpha';
      this.identifierLabel = 'ID do Projeto';
      this.identifierPlaceholder = 'PROJ-001';
      this.descriptionPlaceholder = 'O Projeto Alpha visa...';
      this.basicInfoTitle = 'Informações básicas do Projeto';
      // Ajuste os títulos das outras seções se necessário
    } else { // 'collection'
      this.title = 'Criar Nova Coleção'; // Exemplo
      this.subtitle = 'Insira o nome, a descrição e o URL da coleção.';
      this.nameLabel = 'Nome da coleção';
      this.namePlaceholder = 'Coleção 1';
      this.identifierLabel = 'URL ID';
      this.identifierPlaceholder = '/URL_ID';
      this.descriptionPlaceholder = 'A coleção 1, sumariza os dados...';
      this.basicInfoTitle = 'Informações básicas da Coleção';
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(`Formulário de ${this.entityType} Enviado:`, this.form.value);
      // Aqui, a lógica de envio pode precisar ser diferente para coleções vs projetos
      // ou o backend/serviço que recebe `this.form.value` lida com a diferenciação.
    } else {
      console.log(`Formulário de ${this.entityType} inválido. Verifique os campos.`);
      this.form.markAllAsTouched();
    }
  }

  get f() { return this.form.controls; }
}