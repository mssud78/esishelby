import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './pages/index/index.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideosComponent } from './pages/videos/videos.component';
import { WorkusComponent } from './pages/workus/workus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';



@NgModule({
  declarations: [
    AppComponent,

    IndexComponent,
      ToolbarComponent,
      FooterComponent,
      VideosComponent,
      WorkusComponent,
      AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
