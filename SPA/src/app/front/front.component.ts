import { Component, OnInit, OnChanges } from '@angular/core';
import { Project } from '../_interface/Project';
import { ProjectService } from '../_services/project-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})


export class FrontComponent implements OnInit {
  projects: Project[];
  text: string[];
  selectedText: string;
  interval;
  currentText = 0;
  pulsingText = {
    expand: true,
    shink: false
  };

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.projects = data.projects;
    }, error => {
      console.log('error');
    });

    this.text = [
      'altid går efter et fælles mål.',
      'er velforberedt.',
      'er vant til at arbejde tværfagligt.'
    ];

    this.selectText();
  }

  selectText() {
    this.selectedText = this.text[this.currentText++];
    this.interval = setInterval(() => {
      this.pulsingText.expand = false;
      this.selectedText = this.text[this.currentText++];
      if (this.currentText > this.text.length - 1) {
        this.currentText = 0;
      }
      this.pulsingText.expand = true;
    }, 3000);
  }

}
