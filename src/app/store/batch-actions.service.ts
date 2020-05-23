import { Injectable } from '@angular/core';
import { AppStoreModule } from './index';
import { Store, select } from '@ngrx/store';
import { timer } from 'rxjs';

@Injectable({
  providedIn: AppStoreModule
})
export class BatchActionsService {
  constructor(private store$: Store<AppStoreModule>) {
  }

}
