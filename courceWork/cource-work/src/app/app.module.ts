import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageLoaderService } from './services/image-loader.service';
import { FormsModule } from '@angular/forms';
import { RestoreFactoryService } from './services/restore-image/restore-factory.service';
import { FirstMethodService } from './services/restore-image/first-method.service';
import { SecondMethodService } from './services/restore-image/second-method.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    ImageLoaderService,
    RestoreFactoryService,
    FirstMethodService,
    SecondMethodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
