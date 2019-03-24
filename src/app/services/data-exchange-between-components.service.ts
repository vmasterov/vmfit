import {Injectable} from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataExchangeBetweenComponents {
    private data = new Subject<any>();

    data$ = this.data.asObservable();

    send(incomingData: any) {
        this.data.next(incomingData);
    }
}
