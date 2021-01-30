import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainersComponent } from './containers/containers.component';

const routes: Routes =
  [
    { path: 'import', component: ContainersComponent, data: { slugId: "91144d14-cd24-4320-8f52-a241d6796b06" } },
    { path: 'export', component: ContainersComponent, data: { slugId: "8863d426-ad13-4a54-8934-140c7ac8a400" } },
    { path: 'allocation', component: ContainersComponent, data: { slugId: "29f61067-b6bf-4c40-be49-4cb527001d94" } },
    { path: '', redirectTo: '/import', pathMatch: 'full' },
    { path: '**', redirectTo: '/import', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
