import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';

import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  exports: [LineComponent],
})
export class ChartsModule {}
