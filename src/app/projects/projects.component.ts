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
      description: `Website builded with ASP.NET Core and pure Html CSS and Razor as frontend.
        It uses UserIdentity authorization to authorize restaurant workers to provide panels for managment.
        Transaction is being verified on server with help of PayPal API.`,
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
      description: `Backend REST API made with ASP.NET Core, Frontend with Angular.
      Im authorizing RESTFULL API calls with JasonWebTokens. 
      App provides ability to buy and sell items from other registered users.`,
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
      description: `Backend REST API made with ASP.NET Core, Frontend with Angular.
      Authorization is build with JsonWebToken. Users can post job posters for which other users can apply for.
      User can filter specific tags such as C#, ASP.NET core or any other.
      Job poster can manage submissions from account panel.`,
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
