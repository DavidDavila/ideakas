import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import Chart, { ChartType, DefaultDataPoint } from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  id = Date.now();
  @Input() type!: ChartType;
  @Input() centerText?: string;
  @Input() data!: DefaultDataPoint<ChartType>;
  @ViewChild('canvas') canvas!: ElementRef;
  chart!: any;

  constructor() {}

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      data: {
        datasets: [
          {
            data: [30, 70], // Specify the data values array
            backgroundColor: [
              getComputedStyle(document.body).getPropertyValue('--primary-100'),
              getComputedStyle(document.body).getPropertyValue('--bg-300'),
            ], // Add custom color background (Points and Fill)
            borderWidth: 0, // Specify bar border width
          },
        ],
      },
      options: {
        cutout: '80%',
        backgroundColor: '#ff0',
        color: '#f00',
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      },
      type: 'doughnut',
    });
  }
}
