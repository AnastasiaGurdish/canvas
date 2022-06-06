import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DrawService } from './services/draw.service';
import { ImageLoaderService } from './services/image-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private canvas: any;
  private ctx: CanvasRenderingContext2D | undefined;
  private isDrawing = false;
  public color: any;
  constructor(private imageLoaderService: ImageLoaderService) {
  }

  ngOnInit() {
    this.canvas = document.getElementById('graphCanvas');
    this.ctx = this.canvas.getContext('2d');
  }

  public loadImage(): void {
    document.querySelector("input")?.click();
  }

  public loadOriginalImage(): void {
    this.imageLoaderService.loadOriginalImage(this.ctx, this.canvas);
  }

  public handle(event: any): void {
    this.imageLoaderService.loadImage(event, this.ctx, this.canvas);
  }

  public endDraw(event: any): void {
    this.isDrawing = true;
  }

  public startDraw(event: any): void {
    this.isDrawing = false;
    console.log(this.color);
  }

  public draw(event: any): void {
    if (this.isDrawing) {
      var x = event.offsetX;
      var y = event.offsetY;
      if (!!this.ctx) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x - 0.5, y - 0.5, 10, 10);
        this.ctx.fill();
      }
    }
  }

  public getColor(event: any): void {
  this.color = (<HTMLInputElement>document.getElementById('color')).value;
  }
}
