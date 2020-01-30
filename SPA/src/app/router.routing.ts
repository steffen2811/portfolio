import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectListResolver } from './_resolvers/project-list.resolver';

const routes: Routes = [
  { path: '', component: FrontComponent, resolve: {projects: ProjectListResolver}},
  { path: 'projects', component: ProjectsComponent, resolve: {projects: ProjectListResolver}},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
];

export const RouterRoutes = RouterModule.forRoot(routes);
