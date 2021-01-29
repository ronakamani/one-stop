import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportComponent } from './import/import.component';
import { ExportComponent } from './export/export.component';
import { AllocationComponent } from './allocation/allocation.component';

const routes: Routes =
  [
    { path: 'import', component: ImportComponent },
    { path: 'export', component: ExportComponent },
    { path: 'allocation', component: AllocationComponent },
    { path: '', redirectTo: '/import', pathMatch: 'full' },
    { path: '**', redirectTo: '/import', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
