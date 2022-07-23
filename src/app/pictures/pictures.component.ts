import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselPictures') carouselPictures!: ElementRef;
  carouselInstance!: M.Carousel;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.carouselInstance = M.Carousel.init(
      this.carouselPictures.nativeElement
    );
    this.autoplayCarousel(this.carouselInstance);
  }

  autoplayCarousel(carouselInstance: M.Carousel): void {
    if (!carouselInstance.dragged && !carouselInstance.pressed) {
      carouselInstance.next();
    }
    setTimeout(() => this.autoplayCarousel(carouselInstance), 3000);
  }

  carouselReset() {
    this.carouselInstance.dragged = 0;
    this.carouselInstance.pressed = false;
  }
}
