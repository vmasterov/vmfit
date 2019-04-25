import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {IncomingDataInterface} from '../interfaces/incoming-data.interface';

@Injectable({
    providedIn: 'root'
})
export class DataExchangeBetweenComponents {
    private data = new Subject<any>();

    data$ = this.data.asObservable();

    send(data: IncomingDataInterface) {
        this.data.next(data);
    }
}
