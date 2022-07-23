import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselPictures') carouselPictures!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const carouselInstance = M.Carousel.init(this.carouselPictures.nativeElement, { });
    this.autoplayCarousel(carouselInstance);
  }

  autoplayCarousel(carouselInstance: M.Carousel): void {
    carouselInstance.next();
    setTimeout(() => this.autoplayCarousel(carouselInstance), 3000);
  }

}
