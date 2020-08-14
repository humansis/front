import { MatTableDataSource } from '@angular/material/table';
import { ReplaySubject, Subject } from 'rxjs';

export class ClientDataSource<T> extends MatTableDataSource<T> {
  private _loadingSource: Subject<boolean> = new ReplaySubject();
  public loading$ = this._loadingSource.asObservable();

  public set loading(loading: boolean) {
    this._loadingSource.next(loading);
  }
}
