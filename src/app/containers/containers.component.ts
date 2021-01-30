import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router) {
  }

  displayedColumns: string[] = ['ContainerNumber', 'Size'];
  filteredItems: Item[] = [];
  items: Item[] = [];

  ngOnInit() {
    this._Activatedroute.data.subscribe(async ({ slugId }) => {
      const response = await fetch(`https://run.mocky.io/v3/${slugId}`);
      const data = await response.json();
      this.items = this.filteredItems = data.items;
    });
  }

  containerNumberValueChange(event: any) {
    this.filteredItems = this.items.filter(item => item.ContainerNumber.toUpperCase().includes(event.target.value.toUpperCase()))
  }
}
