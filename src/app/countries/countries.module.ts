import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorpageComponent } from './pages/selectorpage/selectorpage.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SelectorpageComponent
  ]
})
export class CountriesModule { }
