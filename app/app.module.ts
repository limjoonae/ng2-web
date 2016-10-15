import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './root/app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TableRootComponent } from './root/table.root.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    TableRootComponent,
  ],
  
  //Root Component
  bootstrap: [ 
  	AppComponent, 
  	TableRootComponent 
  ]
})
export class AppModule { }
