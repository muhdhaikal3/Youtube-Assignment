import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './searchresult/searchresult.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'aboutus', component: AboutusComponent },
  {path: 'searchresult', component:SearchResultComponent},
  {path: 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
