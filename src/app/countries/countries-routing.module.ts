import { RouterModule, Routes } from "@angular/router";
import { SelectorpageComponent } from './pages/selectorpage/selectorpage.component';
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '',
    children: [
      {path:'selector', component: SelectorpageComponent},
      {path:'**', redirectTo: 'selector'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
