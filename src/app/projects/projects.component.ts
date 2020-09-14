import { Project } from './../../_models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  activeProject: Project;

  private projects: Project[] = [
    {
      name: 'Restaurant',
      description: 'description for post work app',
      imgUrls: []
    },
    {
      name: 'AuctionHouse',
      description: 'description for post work app',
      imgUrls: []
    },
    {
      name: 'PostWork',
      description: 'description for post work app',
      imgUrls: []
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.activeProject = this.projects[0];
  }

  changeProject(name: string) {
    console.log(name);
  }
}
