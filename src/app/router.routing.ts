import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
];

export const RouterRoutes = RouterModule.forRoot(routes);
