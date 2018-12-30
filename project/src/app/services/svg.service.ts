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

    private document: string;

    initDocument(size: Pair) {
        document.append(`<svg height=\"${size.x}\" width=\"${size.y}\">`)
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
        if(this.fill           != undefined) { style.concat(`fill:${this.fill};`)                     }
        if(this.stroke         != undefined) { style.concat(`stroke:${this.stroke};`)                 }
        if(this.stroke_width   != undefined) { style.concat(`stroke:${this.stroke_width};`)           }
        if(this.fill_opacity   != undefined) { style.concat(`fill_opacity:${this.fill_opacity};`)     }
        if(this.stroke_opacity != undefined) { style.concat(`stroke_opacity:${this.stroke_opacity};`) }
        return style;
    }

    rect(pos: Pair, size: Pair) {
        document.append(`<rect x=\"${pos.x}\" y=\"${pos.y}\" width=\"${size.x}\" height=\"${size.y}\" style=\"${this.getStyle()}\">`);
    }

    circle(pos: Pair, r: number) {
        document.append(`<circle cx=\"${pos.x}\" cy=\"${pos.y}\" r=\"${r}\" style=\"${this.getStyle()}\>`);
    }

    line(posA: Pair, posB: Pair) {
        document.append(`<line x1=\"${posA.x}\" y1=\"${posA.y}\" x2=\"${posB.x}\" y2=\"${posB.y}\" style=\"${this.getStyle()}\/>`)
    }

    getDocument(): string {
        document.append('</svg>');
        return this.document;
    }
}