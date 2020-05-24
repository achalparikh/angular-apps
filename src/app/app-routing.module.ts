import { ThemeModule } from './theme/theme.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'recipies', loadChildren: './recipies/recipies.module#RecipiesModule'},
  {path: 'movies', loadChildren: './movie-reiviews/movie-reviews.module#MovieReviewsModule'},
  {path: 'employee-directory', loadChildren: './employee-directory/employee-directory.module#EmployeeDirectoryModule' },
  {path: 'themeSwitch', loadChildren: './theme/theme.module#ThemeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
