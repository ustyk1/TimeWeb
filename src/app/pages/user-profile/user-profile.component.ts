import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public title: string = 'User Profile';
  private _subscription!: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.setSpinner(true);

    this._subscription = timer(1000).subscribe(() => {
      this.spinnerService.setSpinner(false);
    })
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }
}
