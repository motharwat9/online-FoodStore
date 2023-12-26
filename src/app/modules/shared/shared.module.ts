import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    RouterModule,
    NavComponent,
    MaterialModule,
    StarRatingComponent,
    HttpClientModule, 
    SearchComponent,
    FormsModule,
    TagsComponent
  ]
})
export class SharedModule { }
