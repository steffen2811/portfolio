import { Component, OnInit } from '@angular/core';
import { Project } from '../_interface/Project';
import { ProjectService } from '../_services/project-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.projects = data.projects;
      console.log(this.projects);
    }, error => {
      console.log('error');
    });
  }

}
