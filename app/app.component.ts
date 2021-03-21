// #docregion
import { Component }        from '@angular/core';
import { NumberFormatPipe } from './shared/number.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [NumberFormatPipe]
})
export class AppComponent {

  userNum: number;

  constructor(private formatPipe: NumberFormatPipe) {}

  /**
   * formatUserNumber is an example by injecting our pipe and using its transform method
   */
  formatUserNumber() {
    this.userNum = this.formatPipe.transform(this.userNum);
  }

}