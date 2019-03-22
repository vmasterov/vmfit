import {Injectable} from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToggleFoodPanelService {
    private vv = new Subject<number>();

    vv$ = this.vv.asObservable();

    gget(astronaut: number) {
        this.vv.next(astronaut);
    }
}
