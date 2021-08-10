import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddPersonaComponent } from './Components/add-persona/add-persona.component';
import { HomeComponent } from './Components/home/home.component';
import { PersonlistComponent } from './Components/personlist/personlist.component';
import { UpdateComponent } from './Components/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonaComponent,
    HomeComponent,
    PersonlistComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
