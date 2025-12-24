import { Component } from '@angular/core';
import { PortfolioImages } from '../../portfolio-images';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  images: PortfolioImages[] = [
    {
      id: 1,
      image: '/images/1.png  ',
    },
    {
      id: 2,
      image: '/images/2.png  ',
    },
    {
      id: 3,
      image: '/images/3.png  ',
    },
    {
      id: 4,
      image: '/images/4.png  ',
    },
    {
      id: 5,
      image: '/images/5.png  ',
    },
    {
      id: 6,
      image: '/images/6.png  ',
    },
  ];

  flag: boolean = false;

  showModel(): void {
    this.flag = true;
  }
  closeModel(): void {
    this.flag = false;
  }
}
