import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'; // Adicionado OnChanges, SimpleChanges
import { CollectionsService } from '../../../collections/service/collections.service'; // Verifique o caminho
import { ProjectsService } from 'src/app/projects/services/projects.service';   // Verifique o caminho

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
  standalone: false // padrão se não especificado
})
export class HeaderPageComponent implements OnInit, OnChanges { // Adicionado OnChanges
  @Input() type: 'project' | 'collection' = 'project'; // Default para 'project'

  // Propriedade dinâmica para o link do botão "Novo"
  createLink: string[] = ['/projetos/criar']; // Valor default

  // Propriedades da busca
  searchMode = false;
  searchText = '';
  searchFocused = false;
  searchError = false; // Considere adicionar lógica para definir searchError

  constructor(
    private projectsService: ProjectsService,
    private collectionsService: CollectionsService
  ) {}

  ngOnInit() {
    // Define o link de criação inicial.
    // ngOnChanges cuidará de atualizações se 'type' mudar após a inicialização.
    this.updateDynamicLinks();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['type']) {
      this.updateDynamicLinks();
      // Se a busca estiver ativa e o tipo mudar, talvez limpar a busca ou re-pesquisar?
      // Por ora, apenas atualiza o link.
      if (this.searchMode) {
          // Opcional: Resetar a busca se o tipo mudar enquanto a barra está ativa
          // this.cancelSearch();
      }
    }
  }

  private updateDynamicLinks(): void {
    if (this.type === 'project') {
      this.createLink = ['/projetos/criar'];
    } else if (this.type === 'collection') {
      this.createLink = ['/colecoes/criar'];
    }
  }

  activateSearch() {
    this.searchMode = true;
    // Opcional: focar no input de busca automaticamente
    // setTimeout(() => document.querySelector<HTMLInputElement>('.search-input-class')?.focus(), 0);
  }

  cancelSearch() {
    this.searchText = '';
    this.searchMode = false;
    this.searchError = false; // Limpa o erro ao cancelar
    this.onSearchTextChange(); // Para limpar o filtro nos serviços
  }

  clearSearch() {
    this.searchText = '';
    this.searchError = false; // Limpa o erro ao limpar
    this.onSearchTextChange(); // Para limpar o filtro nos serviços
    // Opcional: focar no input novamente
    // document.querySelector<HTMLInputElement>('.search-input-class')?.focus();
  }

  onSearchTextChange() {
    // Lógica de busca condicional
    if (this.type === 'project') {
      this.projectsService.setSearchText(this.searchText);
    } else if (this.type === 'collection') {
      this.collectionsService.setSearchText(this.searchText);
    }
    // Adicione lógica para searchError se necessário (ex: se a busca falhar ou não retornar resultados)
  }
}