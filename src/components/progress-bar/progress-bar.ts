import { Component, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {

  @Input('progress') progress: number;
  @Input('puntosTotales') puntosTotales: number;
  @Input('titulo') titulo: string;
 
  constructor() {
 
  }
 
}

