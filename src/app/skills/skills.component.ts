import { TechnologyType } from './../../_models/technology';
import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/_models/technology';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  backend: Technology[] = [
    { name: "C#", type: TechnologyType.backend },
    { name: "ASP.NET Core", type: TechnologyType.backend },
    { name: "MVC", type: TechnologyType.backend },
    { name: ".NET Core", type: TechnologyType.backend },
    { name: "EF Core", type: TechnologyType.backend },
    { name: "REST", type: TechnologyType.backend },
  ];

  frontend: Technology[] = [
    { name: "Angular", type: TechnologyType.frontend },
    { name: "Bootstrap", type: TechnologyType.frontend },
    { name: "HTML", type: TechnologyType.frontend },
    { name: "CSS", type: TechnologyType.frontend },
    { name: "TypeScript", type: TechnologyType.frontend },
  ]

  other: Technology[] = [
    { name: "Git", type: TechnologyType.other },
    { name: "VS Code", type: TechnologyType.other },
    { name: "Unity", type: TechnologyType.other },
    { name: "Linux", type: TechnologyType.other },
    { name: "Windows", type: TechnologyType.other },
  ]

  ngOnInit(): void {
    this.frontend.sort((b, a) => a.name.length - b.name.length);
    this.backend.sort((b, a) => a.name.length - b.name.length);
    this.other.sort((b, a) => a.name.length - b.name.length);
  }
}
