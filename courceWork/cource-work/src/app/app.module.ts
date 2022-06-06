import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawService } from './services/draw.service';
import { ImageLoaderService } from './services/image-loader.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ImageLoaderService,
    DrawService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
