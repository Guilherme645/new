import { Component, Input, OnInit } from '@angular/core';

// Interface para definir a estrutura de cada item do breadcrumb (trilha de navegação)
// Exportada para que possa ser utilizada por componentes pais ao definir os itens.
export interface ItemTrilhaDeNavegacao {
  rotulo: string;  // O texto que será exibido para o item (ex: "Coleção")
  url?: string;     // A URL para a qual o item aponta. Opcional, pois o último item geralmente não tem link.
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: false // Conforme especificado no seu exemplo original
})
export class BreadcrumbComponent implements OnInit {

  /**
   * Propriedade de entrada para receber os itens da trilha de navegação (breadcrumb).
   * Espera-se um array de objetos ItemTrilhaDeNavegacao.
   * Exemplo de uso no template do componente pai:
   * <app-breadcrumb [itens]="meusItensDeTrilha"></app-breadcrumb>
   */
  @Input() itens: ItemTrilhaDeNavegacao[] = [];

  constructor() { }

  ngOnInit(): void {
    // Se nenhum item for fornecido através do @Input() 'itens',
    // podemos inicializar com os valores do seu HTML estático como exemplo.
    // Isso permite que o componente mostre algo relevante por padrão ou
    // sirva como um fallback.
    if (!this.itens || this.itens.length === 0) {
      this.itens = [
        { rotulo: 'Coleção', url: '/colecoes' }, // Corresponde ao primeiro item do seu HTML
        { rotulo: 'Criar Coleção' }      // Corresponde ao segundo item (atual) do seu HTML
      ];
    }
  }
}