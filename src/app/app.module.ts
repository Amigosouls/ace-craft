//angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollegeComponent } from './college/college.component';
import { HttpClientModule } from  '@angular/common/http';

//pipes
import { SpacePipePipe } from '../shared/space-pipe.pipe';

//user components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

//primeng components
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ViewNotesComponent } from './notes/view-notes/view-notes.component';


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
    SpacePipePipe
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
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
