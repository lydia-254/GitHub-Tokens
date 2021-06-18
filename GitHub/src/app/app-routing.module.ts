import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {
    path: 'index', component: ProfileComponent
  },
  {
    path: 'repos', component: RepositoryComponent
  },
  {
    path: '',
    redirectTo: '/index', pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }