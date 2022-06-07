import { SecondMethodService } from './second-method.service';
import { FirstMethodService } from './first-method.service';
import { Injectable } from '@angular/core';
import { Methods } from 'src/app/model/methods.enum';
import { Restore } from './restore';

@Injectable({
  providedIn: 'root'
})
export class RestoreFactoryService {

  constructor() { }
  public getRestoreService(type: Methods, context: CanvasRenderingContext2D | undefined, canvas: HTMLElement): Restore {
    switch (type) {
      case Methods.FIRST: {
        return new FirstMethodService(context, canvas);
      }
      case Methods.SECOND: {
        return new SecondMethodService(context, canvas);
      }
    }
  }
}
