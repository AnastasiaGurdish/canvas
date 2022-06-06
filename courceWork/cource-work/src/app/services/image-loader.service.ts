import { Injectable } from '@angular/core';

@Injectable()
export class ImageLoaderService {
    private image: any;
    private objectURL: string | undefined;
    constructor() { }

    public loadOriginalImage(context: CanvasRenderingContext2D | undefined, canvas: any): any {
       
       this.image = new Image();
       this.image.src = this.objectURL;
       this.clearCanvas(context, canvas);
       this.draw(context, canvas);
    }

    public loadImage(event: any, context: CanvasRenderingContext2D | undefined, canvas: any): void {
        this.image = new Image();
        this.objectURL = URL.createObjectURL(event.target.files[0]);
        this.image.src = this.objectURL;
        this.clearCanvas(context, canvas);
        this.draw(context, canvas);
    }

    private clearCanvas(context: CanvasRenderingContext2D | undefined, canvas: any) {
        context?.clearRect(0,0,canvas.width,canvas.height); 
    }

    private draw(context: CanvasRenderingContext2D | undefined, canvas: any):void {
        this.image.onload = () => {
            // get the scale
            var scale = Math.min(canvas.width / this.image.width, canvas.height / this.image.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (this.image.width / 2) * scale;
            var y = (canvas.height / 2) - (this.image.height / 2) * scale;
            context?.drawImage(this.image, x, y, this.image.width * scale, this.image.height * scale);
        };
    }
}
