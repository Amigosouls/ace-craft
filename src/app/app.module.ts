//angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollegeComponent } from './college/college.component';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//pipes
import { SpacePipePipe } from '../shared/space-pipe.pipe';

//user components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ViewNotesComponent } from './notes/view-notes/view-notes.component';
import { SchoolComponent } from './school/school.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductComponent } from './product/product.component';
//primeng components
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { InputNumberModule } from 'primeng/inputnumber';
import { TimelineModule } from 'primeng/timeline';

import { ToastModule } from 'primeng/toast';
import { CartComponent } from './cart/cart.component';
import { SortProductPipe } from '../shared/sort-product.pipe';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NotesComponent,
    CollegeComponent,
    GetInTouchComponent,
    AirenMaskComponent,
    EnterpriseComponent,
    ViewNotesComponent,
    SpacePipePipe,
    SchoolComponent,
    BrowseComponent,
    ProductComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    SortProductPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    MenubarModule,
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    DialogModule,
    CardModule,
    InputNumberModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    TimelineModule,
    BadgeModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
