import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _isSpinner$: Subject<boolean> = new Subject();

  public setSpinner(state: boolean): void {
    this._isSpinner$.next(state);
  }

  public getSpinner(): Subject<boolean> {
    return this._isSpinner$;
  }

  constructor() { }
}
