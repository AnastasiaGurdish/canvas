import { Restore } from './restore';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondMethodService implements Restore {
  private context: CanvasRenderingContext2D | undefined;
  private canvas: HTMLElement;
  constructor(@Inject(CanvasRenderingContext2D) context: CanvasRenderingContext2D | undefined, canvas: HTMLElement) { 
    this.context = context;
    this.canvas = canvas;
  }
  public applyMethod(imageData: Uint8ClampedArray | undefined) {
    throw new Error('Method not implemented.');
  }
}
