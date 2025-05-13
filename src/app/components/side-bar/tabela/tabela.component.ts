import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  // Explicitly define the projects array with a type
  projects: Array<{
    name: string;
    description: string;
    progressState: 'default' | 'active' | 'complete' | 'error' | 'pause';
    progressPercent: number;
  }> = [
    { name: 'Legislações', description: 'Projeto com o aglomerado dos dados indexados relacionados a legislação,', progressState: 'complete', progressPercent: 100 },
    { name: 'Investigação Ministério Público - Lei 30/ resolução nova', description: 'Coleções relacionadas a investigação', progressState: 'pause', progressPercent: 14 },
    { name: 'Operação Tempestade', description: 'Ação emergencial contra grupos armados em regiões de risco elevado.', progressState: 'error', progressPercent: 8 },
    { name: 'Operação Linha Cruzada', description: 'Combate a organizações criminosas com atuação interestadual.', progressState: 'active', progressPercent: 14 },
    { name: 'Dossiê Fantasma', description: 'Levantamento de dados sobre crimes não resolvidos com indícios de conexão.', progressState: 'default', progressPercent: 0 },
    { name: 'Caso 47-B', description: 'Investigação de desaparecimento ligado a possível sequestro em série.', progressState: 'complete', progressPercent: 100 },
    { name: 'Projeto Zona Limpa', description: 'Ação coordenada para desocupação de territórios dominados por milícias.', progressState: 'complete', progressPercent: 100 },
    { name: 'Caso Carbono 12', description: 'Investigação forense avançada envolvendo evidências químicas.', progressState: 'complete', progressPercent: 100 }
  ];

  constructor() { }

  ngOnInit() { }
}