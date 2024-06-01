import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit, OnChanges {
  private xAxisData: any[] = [];
  private yAxisData: any[] = [];
  @Input() data: {
    value: any;
    timestamp: any;
  }[];

  chartOption: EChartsOption;

  constructor() {
    console.log(this.data);
  }

  ngOnChanges(): void {
    this.data.map((item) => {
      this.xAxisData.push(item.timestamp);
      this.yAxisData.push(item.value);
    });
    // this.data = changes;
    this.createChart();
    console.log(this.data);
  }

  ngOnInit() {
    this.createChart();
    return;
  }

  private createChart() {
    // console.log(this.xAxisData);
    // console.log(this.yAxisData);

    this.chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    };
  }
}
