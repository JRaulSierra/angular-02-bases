import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./pages/home-page.component";
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [HomePageComponent, CardListComponent, SearchBoxComponent, CardComponent],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GiffModule { }
