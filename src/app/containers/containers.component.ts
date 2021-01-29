import { Component, OnInit } from '@angular/core';

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
  displayedColumns: string[] = ['ContainerNumber', 'Size'];

  items: Item[] = [];

  async ngOnInit(): Promise<void> {
    const response = await fetch("https://run.mocky.io/v3/91144d14-cd24-4320-8f52-a241d6796b06");
    const data = await response.json();
    debugger;
    this.items = data.items;
  }
}
