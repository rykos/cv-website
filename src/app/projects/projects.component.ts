import { Project } from './../../_models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  activeProject: Project;

  projects: Project[] = [
    {
      name: 'Restaurant',
      description: 'description for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant appdescription for restaurant app',
      imgUrls: [
        '/assets/images/Restaurant/scr (1).jpg',
        '/assets/images/Restaurant/scr (2).jpg',
        '/assets/images/Restaurant/scr (3).jpg',
        '/assets/images/Restaurant/scr (4).jpg',
        '/assets/images/Restaurant/scr (5).jpg',
        '/assets/images/Restaurant/scr (6).jpg',
        '/assets/images/Restaurant/scr (7).jpg',
        '/assets/images/Restaurant/scr (8).jpg',
        '/assets/images/Restaurant/scr (9).jpg',
        '/assets/images/Restaurant/scr (10).jpg',
        '/assets/images/Restaurant/scr (11).jpg',
      ],
      gitUrl: 'https://github.com/rykos/Generic_Restaurant_Website'
    },
    {
      name: 'AuctionHouse',
      description: 'description for auction house app',
      imgUrls: [
        '/assets/images/AuctionHouse/scr (1).jpg',
        '/assets/images/AuctionHouse/scr (2).jpg',
        '/assets/images/AuctionHouse/scr (3).jpg',
        '/assets/images/AuctionHouse/scr (4).jpg',
        '/assets/images/AuctionHouse/scr (5).jpg',
        '/assets/images/AuctionHouse/scr (6).jpg',
        '/assets/images/AuctionHouse/scr (7).jpg',
        '/assets/images/AuctionHouse/scr (8).jpg',
      ],
      gitUrl: 'https://github.com/rykos/auction_house-backend'
    },
    {
      name: 'PostWork',
      description: 'description for post work app',
      imgUrls: [
        '/assets/images/PostWork/scr (1).jpg',
        '/assets/images/PostWork/scr (2).jpg',
        '/assets/images/PostWork/scr (3).jpg',
        '/assets/images/PostWork/scr (4).jpg',
        '/assets/images/PostWork/scr (5).jpg',
        '/assets/images/PostWork/scr (6).jpg',
        '/assets/images/PostWork/scr (7).jpg',
        '/assets/images/PostWork/scr (8).jpg',
        '/assets/images/PostWork/scr (9).jpg',
        '/assets/images/PostWork/scr (10).jpg',
        '/assets/images/PostWork/scr (11).jpg',
      ],
      gitUrl: 'https://github.com/rykos/PostWork'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.activeProject = this.projects[0];
  }

  changeProject(name: string) {
    this.activeProject = this.projects.filter(x => x.name === name)[0];
  }

  previewImage(url: string) {
    console.log(`activating preview for ${url}`);
    // Get the modal
    var modal = document.getElementById("myModal");
    modal.style.display = 'block';
    modal.firstElementChild.setAttribute("src", url)
    console.log(modal.firstElementChild.attributes);
  }

  closeImagePreview() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}
