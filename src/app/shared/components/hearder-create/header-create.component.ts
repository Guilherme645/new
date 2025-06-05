import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CollectionsService } from 'src/app/collections/service/collections.service';
import { ProjectsService } from 'src/app/projects/services/projects.service';

@Component({
  selector: 'app-header-create',
  templateUrl: './header-create.component.html',
  styleUrls: ['./header-create.component.css'],
  standalone: false,
})
export class HeaderCreateComponent implements OnInit {
  
  @Input() type: 'project' | 'collection' = 'project'; // Mantém o default para 'project' ou mude para 'collection' se preferir

  // Propriedades dinâmicas para a UI
  backLink: string = ''; // Valor default
  subtitleText: string = 'Insira as informações do novo projeto abaixo'; // Valor default
  // Os textos do título h1 e do botão salvar já são dinâmicos no template

  // Propriedades relacionadas à busca (mantidas como estão, mas a lógica de onSearchTextChange será ajustada)
  searchMode = false;
  searchText = '';
  searchFocused = false;
  searchError = false;

  constructor(
    private projectsService: ProjectsService,
    private collectionsService: CollectionsService
  ) {}

  ngOnInit() {
    // Define os textos e links iniciais baseados no tipo.
    // ngOnChanges cuidará de atualizações se o 'type' mudar após a inicialização.
    this.updateDynamicContent();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Se o @Input() type for alterado pelo componente pai após a inicialização
    if (changes['type']) {
      this.updateDynamicContent();
    }
  }

  private updateDynamicContent(): void {
    if (this.type === 'project') {
      this.backLink = '/projetos';
      this.subtitleText = 'Insira as informações do novo projeto abaixo';
    } else if (this.type === 'collection') {
      this.backLink = '/colecoes'; // Ajuste este link se necessário para sua rota de coleções
      this.subtitleText = 'Insira as informações da nova coleção abaixo';
    }
  }

  activateSearch() {
    this.searchMode = true;
  }

  cancelSearch() {
    this.searchText = '';
    this.searchMode = false;
    this.onSearchTextChange(); // Limpa o texto de busca nos serviços
  }

  clearSearch() {
    this.searchText = '';
    this.onSearchTextChange(); // Limpa o texto de busca nos serviços
  }

  onSearchTextChange() {
    // Chama o serviço apropriado com base no tipo da entidade
    if (this.type === 'project') {
      this.projectsService.setSearchText(this.searchText);
    } else if (this.type === 'collection') {
      this.collectionsService.setSearchText(this.searchText);
    }
  }
}