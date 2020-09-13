import { Technology, TechnologyType } from './../_models/technology';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-website';

  technologies: Technology[] = [
    {
      name: "C#",
      description: "Opis c#",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/455px-C_Sharp_logo.svg.png",
      type: TechnologyType.backend
    },
    {
      name: "C#",
      description: "",
      iconUrl: "/assets/aspnetcore.png",
      type: TechnologyType.backend
    }
  ];
}