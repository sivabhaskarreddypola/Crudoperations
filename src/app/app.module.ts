
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilesService } from './mobiles.service';
import { MobilesComponent } from './mobiles/mobiles.component';



@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [MobilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
