import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportComponent } from './import/import.component';
import { ExportComponent } from './export/export.component';
import { AllocationComponent } from './allocation/allocation.component';
import { ContainersComponent } from './containers/containers.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
    ExportComponent,
    AllocationComponent,
    ContainersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
