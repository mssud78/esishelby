import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {VideosComponent} from './pages/videos/videos.component';
import {AboutusComponent} from './pages/aboutus/aboutus.component';
import {WorkusComponent} from './pages/workus/workus.component';




const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'work-us', component: WorkusComponent },
  { path: 'Videos', component: VideosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
