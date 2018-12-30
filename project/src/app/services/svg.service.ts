import { Injectable } from '@angular/core';

export interface Pair {
    x: number;
    y: number;
}

@Injectable({
  providedIn: 'root',
})
export class SVGService {

    constructor() { }

    private image: string = "";

    initDocument(size: Pair) {
        this.image = this.image.concat(`<svg width=\"${size.x}\" height=\"${size.y}\">`)
    }

    private fill: string;
    private fill_opacity: number;
    private stroke: string;
    private stroke_opacity: number;
    private stroke_width: number;

    setFill(fill: string)                      { this.fill = fill;                     }
    setFillOpacity(fill_opacity: number)       { this.fill_opacity = fill_opacity;     }
    setStroke(stroke: string)                  { this.stroke = stroke;                 }
    setStrokeOpacity(stroke_opacity: number)   { this.stroke_opacity = stroke_opacity; }
    setStroke_Width(stroke_width: number)      { this.stroke_width = stroke_width;     }

    getStyle(): string {
        var style: string = "";
        if(this.fill           != undefined) { style = style.concat(` fill=\"${this.fill}\"`)                     }
        if(this.stroke         != undefined) { style = style.concat(` stroke=\"${this.stroke}\"`)                 }
        if(this.stroke_width   != undefined) { style = style.concat(` stroke=\"${this.stroke_width}\"`)           }
        if(this.fill_opacity   != undefined) { style = style.concat(` fill_opacity=\"${this.fill_opacity}\"`)     }
        if(this.stroke_opacity != undefined) { style = style.concat(` stroke_opacity=\"${this.stroke_opacity}\"`) }
        return style;
    }

    rect(pos: Pair, size: Pair) {
        this.image = this.image.concat(`<rect x=\"${pos.x}\" y=\"${pos.y}\" width=\"${size.x}\" height=\"${size.y}\"${this.getStyle()}/>`);
    }

    circle(pos: Pair, r: number) {
        this.image = this.image.concat(`<circle cx=\"${pos.x}\" cy=\"${pos.y}\" r=\"${r}\"${this.getStyle()}/>`);
    }

    line(posA: Pair, posB: Pair) {
        this.image = this.image.concat(`<line x1=\"${posA.x}\" y1=\"${posA.y}\" x2=\"${posB.x}\" y2=\"${posB.y}\"${this.getStyle()}/>`)
    }

    getDocument(): string {
        this.image = this.image.concat('</svg>');
        console.log(this.image);
        return this.image;
    }
}