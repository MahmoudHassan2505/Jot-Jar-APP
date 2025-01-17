import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './Components/splash/splash.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LogoComponent } from './Components/logo/logo.component';
import { HomeComponent } from './Components/home/home.component';
import { WorkSpaceComponent } from './Components/work-space/work-space.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllNoteComponent } from './Components/all-note/all-note.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NotFoundComponent,
    LogoComponent,
    HomeComponent,
    WorkSpaceComponent,
    SideBarComponent,
    AllNoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
