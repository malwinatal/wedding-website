import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { portugalData, polandData } from '../data/CountriesData';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('carousel2') carousel2!: ElementRef;

  portugalData = portugalData;
  polandData = polandData;

  constructor() {}
  ngAfterViewInit(): void {
    M.Carousel.init(this.carousel.nativeElement, {
      indicators: true,
      fullWidth: true,
    });
    M.Carousel.init(this.carousel2.nativeElement, {
      indicators: true,
      fullWidth: true,
    });
  }

  ngOnInit(): void {}
}
