import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContactComponent } from './contact/contact.component';
import { RouterRoutes } from './router.routing';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@NgModule({
   imports: [
      BrowserModule,
      NgbModule,
      RouterRoutes
   ],
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      FrontComponent,
      ProjectCardComponent,
      ContactComponent,
      ProjectsComponent,
      AboutComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      HeaderComponent
   ]
})
export class AppModule { }
