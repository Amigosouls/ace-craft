import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
const routes: Routes = [
  {path:'college', component:CollegeComponent},
  {path:'', component:HomeComponent},
  {path:'notes', component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
