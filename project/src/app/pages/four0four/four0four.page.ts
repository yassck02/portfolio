import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <div class="main"><strong>404</strong> - Page not found :(</div>
    `,
    styles: [`
        .main {
            width: 100%;
            height: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 15px;
            margin-bottom: 15px;
            text-align: center;
            font-size: 10px;
            color: gray;
        }
    `]
})
export class Four0FourPage implements OnInit {

    constructor() { }

    ngOnInit(): void { }

}
