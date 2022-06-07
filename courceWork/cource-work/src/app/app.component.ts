import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Methods } from './model/methods.enum';
import { ImageLoaderService } from './services/image-loader.service';
import { RestoreFactoryService } from './services/restore-image/restore-factory.service';

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
  acceptableMethod: Methods.FIRST | Methods.SECOND = Methods.FIRST;
  constructor(private imageLoaderService: ImageLoaderService,
    private restoreFactoryService: RestoreFactoryService) {
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
  }

  public draw(event: any): void {
    if (this.isDrawing) {
      var x = (event.offsetX - this.canvas.height) / 2;
      var y = (event.offsetY - this.canvas.height) / 2;
      if (!!this.ctx) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x, y, 3, 3);
        this.ctx.fill();
      }
    }
  }

  public getColor(event: any): void {
    this.color = (<HTMLInputElement>document.getElementById('color')).value;
  }

  public applyRestoreMethod(): void {
    if (!!this.acceptableMethod) {
      let method = this.restoreFactoryService.getRestoreService(this.acceptableMethod, this.ctx, this.canvas);
      method.applyMethod(this.imageLoaderService.getImageFromCanvas(this.ctx));
    }
  }
}
