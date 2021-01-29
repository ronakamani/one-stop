import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Item {
  ContainerNumber: string;
  Size: number;
}

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.sass']
})
export class ContainersComponent implements OnInit {
  @Input() slugId: string;

  constructor() {
    this.slugId = ""
  }

  displayedColumns: string[] = ['ContainerNumber', 'Size'];

  items: Item[] = [];

  async ngOnInit(): Promise<void> {
    const response = await fetch(`https://run.mocky.io/v3/${this.slugId}`);
    const data = await response.json();
    debugger;
    this.items = data.items;
  }
}
