import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ViewNotesComponent } from './notes/view-notes/view-notes.component';
import { SchoolComponent } from './school/school.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CartComponent } from './cart/cart.component';
import { loginAuthGuard } from 'src/shared/login-auth.guard';
import { airenMaskResolver } from 'src/services/airen-mask.resolver';
const routes: Routes = [
  {path:'college', component:CollegeComponent},
  {path:'', component:HomeComponent},
  {path:'notes', component:NotesComponent},
  {path:'airen-mask', component:AirenMaskComponent, resolve:{data:airenMaskResolver}},
  {path:'enterprise', component:EnterpriseComponent},
  {path:'home', component:HomeComponent},
  {path:'notes/:id', component:ViewNotesComponent},
  {path:'school',component:SchoolComponent},
  {path:'browse/:id',component:BrowseComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'user/:id',component:UserComponent},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { 

}
