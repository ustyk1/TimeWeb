import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Timeweb';

  private _subscription: Subscription = Subscription.EMPTY;

  public isSpinner: boolean = true;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this._subscription = this.spinnerService.getSpinner().subscribe((state: boolean) => {
      this.isSpinner = state;
    })
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
