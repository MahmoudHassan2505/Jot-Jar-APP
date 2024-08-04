import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './Components/splash/splash.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { WorkSpaceComponent } from './Components/work-space/work-space.component';
import { AllNoteComponent } from './Components/all-note/all-note.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'workspace',
        component: WorkSpaceComponent
      },{
        path:'allnotes',
        component:AllNoteComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/splash',
    pathMatch: 'full' // match full path
  },
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
