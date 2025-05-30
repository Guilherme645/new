import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-collection-tree',
    templateUrl: './collection-tree.component.html',
    styleUrls: ['./collection-tree.component.css'],
    standalone: false
})
export class CollectionTreeComponent implements OnInit {
  @Input() data: any[] = [];

  private defaultData: any[] = [
    { name: ' 2025 - Primeiro trimestre', description: 'Coleção com os meses Janeiro, Fevereiro...', progressState: 'success', progressPercent: 100 },
    { name: ' 2024 - Quarto trimestre', description: 'Coleção com os meses Outubro, Novembro...', progressState: 'pending', progressPercent: 0 }
  ];

  ngOnInit() {
    console.log('Dados recebidos no app-collection-tree:', this.data);
    if (!this.data || this.data.length === 0) {
      this.data = this.defaultData;
    }
  }
}