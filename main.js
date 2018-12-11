(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_four0four_four0four_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/four0four/four0four.page */ "./src/app/pages/four0four/four0four.page.ts");
/* harmony import */ var _pages_projects_projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/projects/projects.page */ "./src/app/pages/projects/projects.page.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_experience_experience_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/experience/experience.page */ "./src/app/pages/experience/experience.page.ts");
/* harmony import */ var _pages_contact_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.page */ "./src/app/pages/contact/contact.page.ts");
/* harmony import */ var _pages_projects_project_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/projects/project-detail.page */ "./src/app/pages/projects/project-detail.page.ts");
/* harmony import */ var _pages_resume_resume_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/resume/resume.page */ "./src/app/pages/resume/resume.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'projects', component: _pages_projects_projects_page__WEBPACK_IMPORTED_MODULE_3__["ProjectsPage"] },
    { path: 'projects/:id', component: _pages_projects_project_detail_page__WEBPACK_IMPORTED_MODULE_7__["ProjectDetailPage"] },
    { path: 'home', component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"] },
    { path: 'contact', component: _pages_contact_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"] },
    { path: 'experience', component: _pages_experience_experience_page__WEBPACK_IMPORTED_MODULE_5__["ExperiencePage"] },
    { path: 'resume', component: _pages_resume_resume_page__WEBPACK_IMPORTED_MODULE_8__["ResumePage"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_four0four_four0four_page__WEBPACK_IMPORTED_MODULE_2__["Four0FourPage"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    width: 75%;\n    max-width: 1000px;\n    height: 100%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.card {\n    border-radius: 5px;\n    border: 1px solid lightgray;\n    background-color: white;\n    padding: 15px;\n    margin-bottom: 10px;\n}\n\n.media-links {\n    float: right;\n}\n\na {\n    color: gray;\n    margin: 10px;\n    text-decoration: none;\n}\n\na:hover {\n    color: hsl(var(--hue_1), 100%, 50%);\n    text-decoration: none;\n}\n\n.activeLink {\n    color: hsl(var(--hue_0), 100%, 50%);\n    text-decoration: underline;\n}\n\nbutton {\n    color: hsl(var(--hue_0), 100%, 50%);\n    border: none;\n    background: #f9f9f9;\n    top: 48%;\n    position: fixed;\n    border-radius: 4px;\n    width: 20px;\n    height: 35px;\n    font-weight: 700;\n}\n\nbutton:hover {\n    color: #f9f9f9;\n    background: hsl(var(--hue_0), 100%, 50%);\n}\n\nbutton:active {\n    background: hsl(var(--hue_1), 100%, 50%);\n}\n\n.note {\n    text-align: center;\n    font-size: 10px;\n    color: gray;\n}\n\n.resume-link {\n    float: right;\n    margin: 0;\n    border: solid 1px hsl(var(--hue_0), 100%, 50%);\n    border-radius: 3px;\n    padding-left: 3px;\n    padding-right: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFHRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxvQ0FBb0M7SUFDcEMsMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0kseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5tZWRpYS1saW5rcyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgICBjb2xvcjogaHNsKHZhcigtLWh1ZV8xKSwgMTAwJSwgNTAlKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hY3RpdmVMaW5rIHtcbiAgICBjb2xvcjogaHNsKHZhcigtLWh1ZV8wKSwgMTAwJSwgNTAlKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogaHNsKHZhcigtLWh1ZV8wKSwgMTAwJSwgNTAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICB0b3A6IDQ4JTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiAjZjlmOWY5O1xuICAgIGJhY2tncm91bmQ6IGhzbCh2YXIoLS1odWVfMCksIDEwMCUsIDUwJSk7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGhzbCh2YXIoLS1odWVfMSksIDEwMCUsIDUwJSk7XG59XG5cbi5ub3RlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4ucmVzdW1lLWxpbmsge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggaHNsKHZhcigtLWh1ZV8wKSwgMTAwJSwgNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button style=\"left: 10px\" (click)=\"onLeftClicked()\"> < </button>\n<button style=\"right: 10px\" (click)=\"onRightClicked()\"> > </button>\n\n<div class=\"main\">\n\n    <div class=\"note\">\n        <p>Connor Yass</p>\n    </div>\n\n    <div class=\"card\">\n        <nav>\n            <a *ngFor=\"let tab of tabs\"\n                routerLink=\"{{tab.path}}\"\n                routerLinkActive=\"activeLink\"\n                (click)=\"currentTab=tab.index\">{{tab.label}}</a>\n\n                <div class=\"media-links\">\n                   <a href=\"https://github.com/yassck02\">\n                       <img src=\"./assets/icons/github.png\" width=\"15px\" height=\"15px\">\n                   </a>\n\n                   <a href=\"https://linkedin.com/in/connor-yass\">\n                       <img src=\"./assets/icons/linkedin.png\"  width=\"15px\" height=\"15px\">\n                   </a>\n\n                   <a href=\"https://www.instagram.com/connor.yass/\">\n                       <img src=\"./assets/icons/instagram.png\" width=\"15px\" height=\"15px\">\n                   </a>\n               </div>\n        </nav>\n    </div>\n\n    <div class=\"card\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"note\">\n        <p>01010100 01101000 01101001 01101110 01101011 00100000 01000100 01101001 01100110 01100110 01100101 01110010 01100101 01101110 01110100</p>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, element, renderer) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.tabs = [
            { index: 0, path: '/home', label: 'About' },
            { index: 1, path: '/experience', label: 'Experience' },
            { index: 2, path: '/projects', label: 'Projects' },
            { index: 3, path: '/contact', label: 'Contact' },
            { index: 4, path: '/resume', label: 'Résumé' },
        ];
        this.currentTab = 0;
    }
    AppComponent.prototype.onLeftClicked = function () {
        this.currentTab = (this.currentTab - 1 >= 0) ? this.currentTab - 1 : this.tabs.length - 1;
        this.router.navigate([this.tabs[this.currentTab].path]);
    };
    AppComponent.prototype.onRightClicked = function () {
        this.currentTab = (this.currentTab + 1 < this.tabs.length) ? this.currentTab + 1 : 0;
        this.router.navigate([this.tabs[this.currentTab].path]);
    };
    AppComponent.prototype.onKeyPressed = function (event) {
        if (event.key == "ArrowLeft") {
            this.onLeftClicked();
        }
        else if (event.key == "ArrowRight") {
            this.onRightClicked();
            this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
            this.renderer.setStyle(this.element.nativeElement, '--hue_1', '50');
            console.log("DFEEFEFEFEF");
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        //document.documentElement.style.setProperty('--hue-0', '50');
        //document.documentElement.style.setProperty('--hue-1', '50');
        //this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
        this.renderer.setProperty(this.element.nativeElement, 'hue_1', '100');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            host: { '(document:keyup)': 'onKeyPressed($event)' }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _pages_projects_projects_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/projects/projects.page */ "./src/app/pages/projects/projects.page.ts");
/* harmony import */ var _pages_contact_contact_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact/contact.page */ "./src/app/pages/contact/contact.page.ts");
/* harmony import */ var _pages_experience_experience_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/experience/experience.page */ "./src/app/pages/experience/experience.page.ts");
/* harmony import */ var _pages_projects_project_detail_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/projects/project-detail.page */ "./src/app/pages/projects/project-detail.page.ts");
/* harmony import */ var _pages_four0four_four0four_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/four0four/four0four.page */ "./src/app/pages/four0four/four0four.page.ts");
/* harmony import */ var _pages_resume_resume_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/resume/resume.page */ "./src/app/pages/resume/resume.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_projects_projects_page__WEBPACK_IMPORTED_MODULE_9__["ProjectsPage"],
                _pages_four0four_four0four_page__WEBPACK_IMPORTED_MODULE_13__["Four0FourPage"],
                _pages_home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"],
                _pages_experience_experience_page__WEBPACK_IMPORTED_MODULE_11__["ExperiencePage"],
                _pages_contact_contact_page__WEBPACK_IMPORTED_MODULE_10__["ContactPage"],
                _pages_projects_project_detail_page__WEBPACK_IMPORTED_MODULE_12__["ProjectDetailPage"],
                _pages_resume_resume_page__WEBPACK_IMPORTED_MODULE_14__["ResumePage"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.page.css":
/*!************************************************!*\
  !*** ./src/app/pages/contact/contact.page.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.input {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border: 1px solid lightgray;\n    resize:vertical;\n}\n\nform {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n\nbutton {\n    border: solid 1px hsl(var(--hue_1), 100%, 50%);\n    border-radius: 3px;\n    color: hsl(var(--hue_1), 100%, 50%);\n    background-color: white;\n    margin: 0;\n}\n\nbutton:hover {\n    color: white;\n    background-color: hsl(var(--hue_1), 100%, 50%);\n    cursor: pointer;\n}\n\nbutton:active {\n    background-color: hsl(var(--hue_0), 100%, 50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4QixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLCtDQUErQztDQUNsRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHJlc2l6ZTp2ZXJ0aWNhbDtcbn1cblxuZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggaHNsKHZhcigtLWh1ZV8xKSwgMTAwJSwgNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6IGhzbCh2YXIoLS1odWVfMSksIDEwMCUsIDUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0taHVlXzEpLCAxMDAlLCA1MCUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKHZhcigtLWh1ZV8wKSwgMTAwJSwgNTAlKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contact/contact.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form method=\"GET\" action=\"mailto:yassck02@gmail.com\">\n    <input\n      type=\"text\"\n      name=\"name\"\n      class=\"input\"\n      placeholder=\"Name\"\n      [(ngModel)]=\"name\"\n      required\n      minlength=\"3\"\n      #nameInput=\"ngModel\">\n\n    <input\n      type=\"email\"\n      name=\"email\"\n      class=\"input\"\n      placeholder=\"Email\"\n      [(ngModel)]=\"email\"\n      required\n      email\n      #emailInput=\"ngModel\">\n\n     <textarea\n       class=\"input\"\n       name=\"message\"\n       placeholder=\"Message\"\n       [(ngModel)]=\"message\"\n       required\n       #messageInput=\"ngModel\"></textarea>\n\n    <button type=\"submit\" (click)=\"processForm()\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPage = /** @class */ (function () {
    function ContactPage() {
    }
    ContactPage.prototype.ngOnInit = function () { };
    ContactPage.prototype.processForm = function () {
        if (this.name == undefined || this.name.length < 3) {
            alert("ERROR: Name must be at least 3 characters");
            return;
        }
        if (this.email == undefined || this.email.length < 3) {
            alert("ERROR: Please enter a valid email address");
            return;
        }
        if (this.message == undefined || this.message.length <= 0) {
            alert("ERROR: Please enter a message");
            return;
        }
    };
    ContactPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/pages/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.css */ "./src/app/pages/contact/contact.page.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ContactPage);
    return ContactPage;
}());



/***/ }),

/***/ "./src/app/pages/experience/experience.page.css":
/*!******************************************************!*\
  !*** ./src/app/pages/experience/experience.page.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nhr {\n    width: 1px;\n    height: 100%;\n    color: hsl(var(--hue_0), 100%, 50%);\n}\n\nul {\n    list-style-type: none;\n}\n\nul li:before {\n  content: \"–\";\n  color: gray;\n  position: absolute;\n  margin-left: -1em;\n}\n\n.experience-main {\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25COztBQUVEOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ociB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IGhzbCh2YXIoLS1odWVfMCksIDEwMCUsIDUwJSk7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnVsIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCTXCI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xufVxuXG4uZXhwZXJpZW5jZS1tYWluIHtcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/experience/experience.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/experience/experience.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"experience-main\" *ngFor=\"let experience of experiences\">\n    <hr>\n    <p><strong>{{experience.title}}</strong>, {{experience.company}}</p>\n    <img src=\"./assets/icons/pin.png\" width=\"10px\" height=\"16px\">\n    <p class=\"code\" style=\"color: gray\">{{experience.location}}</p>\n    <p class=\"code\" style=\"color: gray\">//{{experience.timeframe}}</p>\n    <ul>\n        <li *ngFor=\"let skill of experience.skills\">{{skill}}</li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/experience/experience.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/experience/experience.page.ts ***!
  \*****************************************************/
/*! exports provided: ExperiencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePage", function() { return ExperiencePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/experience.service */ "./src/app/services/experience.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperiencePage = /** @class */ (function () {
    function ExperiencePage(service) {
        this.service = service;
    }
    ExperiencePage.prototype.ngOnInit = function () {
        this.experiences = this.service.getExperiences();
    };
    ExperiencePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./experience.page.html */ "./src/app/pages/experience/experience.page.html"),
            styles: [__webpack_require__(/*! ./experience.page.css */ "./src/app/pages/experience/experience.page.css")],
        }),
        __metadata("design:paramtypes", [_services_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"]])
    ], ExperiencePage);
    return ExperiencePage;
}());



/***/ }),

/***/ "./src/app/pages/four0four/four0four.page.css":
/*!****************************************************!*\
  !*** ./src/app/pages/four0four/four0four.page.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    width: 100%;\n    height: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    text-align: center;\n    font-size: 10px;\n    color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm91cjBmb3VyL2ZvdXIwZm91ci5wYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm91cjBmb3VyL2ZvdXIwZm91ci5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/four0four/four0four.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/four0four/four0four.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\"><strong>404</strong> - Page not found :(</div>\n"

/***/ }),

/***/ "./src/app/pages/four0four/four0four.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/four0four/four0four.page.ts ***!
  \***************************************************/
/*! exports provided: Four0FourPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Four0FourPage", function() { return Four0FourPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Four0FourPage = /** @class */ (function () {
    function Four0FourPage() {
    }
    Four0FourPage.prototype.ngOnInit = function () { };
    Four0FourPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./four0four.page.html */ "./src/app/pages/four0four/four0four.page.html"),
            styles: [__webpack_require__(/*! ./four0four.page.css */ "./src/app/pages/four0four/four0four.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Four0FourPage);
    return Four0FourPage;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.css":
/*!******************************************!*\
  !*** ./src/app/pages/home/home.page.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\n    color: hsla(var(--hue_1), 100%, 50%);\n    font-weight: 700;\n}\n\nul {\n    list-style-type: none;\n}\n\nimg {\n    margin-right: 5px;\n}\n\nul li:before {\n  content: \"–\";\n  color: gray;\n  position: absolute;\n  margin-left: -1em;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n}\n\n.skills {\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n.languages {\n    grid-column-start: 2;\n    grid-column-end: 3;\n}\n\n.software {\n    grid-column-start: 3;\n    grid-column-end: 4;\n}\n\n.tools {\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n.framewrks {\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJlbSB7XG4gICAgY29sb3I6IGhzbGEodmFyKC0taHVlXzEpLCAxMDAlLCA1MCUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbnVsIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCTXCI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xufVxuXG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG59XG5cbi5za2lsbHMge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbn1cblxuLmxhbmd1YWdlcyB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4uc29mdHdhcmUge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbn1cblxuLnRvb2xzIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG59XG5cbi5mcmFtZXdya3Mge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"gradient-background clip-text\">Software Engineer</h2>\n<h4>Still in beta: v0.9.1</h4>\n<h4>Always learning</h4>\n\n<img src=\"./assets/icons/hexagon.png\" width=\"100px\">\n\n<div class=\"grid\">\n    <div class=\"skills\">\n        <h4>Skills</h4>\n        <ul>\n            <li><em>* </em>iOS Spplication developement</li>\n            <li>Design patterns including </li>\n        </ul>\n    </div>\n\n    <div class=\"languages\">\n        <h4>Languages</h4>\n        <ul>\n            <li><em>* </em>C++</li>\n            <li><em>* </em>Swift</li>\n            <li>TypeScript</li>\n            <li>JavaScript</li>\n            <li>Python</li>\n            <li>C#</li>\n        </ul>\n    </div>\n\n    <div class=\"software\">\n        <h4>Software</h4>\n        <ul>\n            <li>Adobe <em>* </em>Illustrator, Photoshop</li>\n            <li>Autodesk <em>* </em>3Ds Max, Maya, Inventor</li>\n            <li>Microsoft Word, Excel, Powerpoint</li>\n            <li><em>* </em>Xcode. MacOS, iOS</li>\n        </ul>\n    </div>\n\n    <div class=\"tools\">\n        <h4>Tools</h4>\n        <ul>\n            <li><em>* </em>GIT</li>\n            <li>Node.js</li>\n            <li>SAFe (Agile)</li>\n        </ul>\n    </div>\n\n    <div class=\"frameworks\">\n        <h4>Frameworks</h4>\n        <ul>\n            <li><em>* </em>Angular</li>\n            <li>Cocoa (UIKit)</li>\n            <li>Multipeer Connectivity</li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.css */ "./src/app/pages/home/home.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/projects/project-detail.page.css":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/project-detail.page.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1 {\n    font-size: 20px;\n    color: #222;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 5px;\n}\n\nh2 {\n    font-size: 14px;\n    color: #777;\n    font-weight: 400;\n    margin-top: 0;\n}\n\np {\n    font-size: 12px;\n    color: #444;\n    font-weight: 400;\n}\n\n.gh-link {\n    text-decoration: underline;\n    font-size: 12px;\n    color: gray;\n    float: right;\n}\n\n.gh-link:hover {\n    -webkit-text-decoration-color: hsl(var(--hue_1), 100%, 50%);\n            text-decoration-color: hsl(var(--hue_1), 100%, 50%);\n}\n\ndiv.gallery {\n    border: 1px solid #ccc;\n    -webkit-filter: grayscale(100%);\n    filter: grayscale(100%);\n}\n\ndiv.gallery:hover {\n    -webkit-filter: grayscale(0%);\n    filter: grayscale(0%);\n}\n\ndiv.gallery img {\n    width: 100%;\n    height: auto;\n}\n\n.responsive {\n    padding: 0 6px;\n    float: left;\n    width: 24.99999%;\n}\n\n@media only screen and (max-width: 700px) {\n    .responsive {\n        width: 49.99999%;\n        margin: 6px 0;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .responsive {\n        width: 100%;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdC1kZXRhaWwucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSw0REFBb0Q7WUFBcEQsb0RBQW9EO0NBQ3ZEOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7S0FDakI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0LWRldGFpbC5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5naC1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZ2gtbGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBoc2wodmFyKC0taHVlXzEpLCAxMDAlLCA1MCUpO1xufVxuXG5kaXYuZ2FsbGVyeSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG5kaXYuZ2FsbGVyeTpob3ZlciB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xufVxuXG5kaXYuZ2FsbGVyeSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnJlc3BvbnNpdmUge1xuICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNC45OTk5OSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAucmVzcG9uc2l2ZSB7XG4gICAgICAgIHdpZHRoOiA0OS45OTk5OSU7XG4gICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnJlc3BvbnNpdmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/project-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/projects/project-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project === undefined\">\n    <p>Loading...</p>\n</div>\n<div *ngIf=\"project !== undefined\">\n    <h1>{{project.title}}</h1>\n    <a class=\"gh-link\" href=\"https://github.com/yassck02/{{project.title}}\">Repository</a>\n\n    <h2>{{project.subtitle}}</h2>\n    <p *ngIf=\"project.description !== undefined\">{{project.description}}</p>\n    <div class=\"responsive\" *ngFor=\"let image of project.images\">\n      <div class=\"gallery\">\n        <a href=\"https://raw.githubusercontent.com/yassck02/{{project.title}}/master/{{image}}\">\n          <img src=\"https://raw.githubusercontent.com/yassck02/{{project.title}}/master/{{image}}\">\n        </a>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/projects/project-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/projects/project-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProjectDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailPage", function() { return ProjectDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailPage = /** @class */ (function () {
    function ProjectDetailPage(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ProjectDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.service.getProject(parseInt(id, 10))
            .subscribe(function (data) {
            _this.project = data;
        });
    };
    ProjectDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./project-detail.page.html */ "./src/app/pages/projects/project-detail.page.html"),
            styles: [__webpack_require__(/*! ./project-detail.page.css */ "./src/app/pages/projects/project-detail.page.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectDetailPage);
    return ProjectDetailPage;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.page.css":
/*!**************************************************!*\
  !*** ./src/app/pages/projects/projects.page.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    color: #555;\n    text-decoration: none;\n    margin: 6px;\n    padding-left: 2px;\n    border-left: 2px solid white;\n}\n\na:hover {\n    border-left: 2px solid hsl(var(--hue_1), 100%, 50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksb0RBQW9EO0NBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuYTpob3ZlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBoc2wodmFyKC0taHVlXzEpLCAxMDAlLCA1MCUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/projects/projects.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngFor=\"let project of projects; index as i\"\n    routerLink=\"/projects/{{i}}\">{{projects[i]}}\n</a>\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/projects/projects.page.ts ***!
  \*************************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(service) {
        this.service = service;
    }
    ProjectsPage.prototype.ngOnInit = function () {
        this.projects = this.service.getProjectRefs();
    };
    ProjectsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./projects.page.html */ "./src/app/pages/projects/projects.page.html"),
            styles: [__webpack_require__(/*! ./projects.page.css */ "./src/app/pages/projects/projects.page.css")]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectsPage);
    return ProjectsPage;
}());



/***/ }),

/***/ "./src/app/pages/resume/resume.page.css":
/*!**********************************************!*\
  !*** ./src/app/pages/resume/resume.page.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\nhr {\n    border: 0;\n    background-color: hsl(var(--hue_0), 100%, 50%);\n    width: 100%;\n    height: 1px;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n.info * {\n    display: inline-block;\n}\n\na:hover {\n    color: hsl(var(--hue_1), 100%, 50%);\n}\n\nh1 {\n    font-variant: small-caps;\n    width: 100%;\n    margin: 8px;\n}\n\nh3 {\n    font-weight: 400;\n    font-size: 15px;\n    font-style: italic;\n    margin-bottom: 0px;\n}\n\np {\n    margin: 0;\n    display: block;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    display: block;\n    margin-top: 3px;\n}\n\n.header {\n    grid-column-start: 1;\n    grid-column-end: 5;\n    text-align: center;\n}\n\n#portfolio-link {\n    font-weight: bold;\n    color: hsl(var(--hue_1), 100%, 50%);\n}\n\n.date {\n    color: #AAA;\n    float: right;\n    clear: right;\n}\n\n.location {\n    color: #AAA;\n    float: right;\n    clear: right;\n}\n\n.experience-item li:before {\n  content: \"–\";\n  color: gray;\n  position: absolute;\n  margin-left: -1em;\n}\n\nul {\n    list-style-type: none;\n}\n\n.objective {\n    grid-column-start: 1;\n    grid-column-end: 5;\n    text-align: center;\n    padding-left: 100px;\n    padding-right: 100px;\n}\n\n.education {\n    grid-column-start: 1;\n    grid-column-end: 5;\n}\n\n.course-work {\n    grid-column-start: 1;\n    grid-column-end: 5;\n}\n\n.course-list {\n    width: 50%;\n    display: inline-block;\n}\n\n.experience {\n    grid-column-start: 1;\n    grid-column-end: 5;\n}\n\n.experience-item {\n    margin-bottom: 10px;\n}\n\n.awards {\n    grid-column-start: 3;\n    grid-column-end: 5;\n}\n\n.skills {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    padding-right: 20px;\n}\n\n.references {\n    grid-column-start: 1;\n    grid-column-end: 5;\n}\n\n.reference {\n    display: inline-block;\n    width: 33.3%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdW1lL3Jlc3VtZS5wYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1Q0FBdUM7Q0FDMUM7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsK0NBQStDO0lBQy9DLFlBQVk7SUFDWixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLG9DQUFvQztDQUN2Qzs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtDQUNmOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksVUFBVTtJQUNWLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0Qjs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBR0Q7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3VtZS9yZXN1bWUucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbn1cblxuaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2wodmFyKC0taHVlXzApLCAxMDAlLCA1MCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW5mbyAqIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiBoc2wodmFyKC0taHVlXzEpLCAxMDAlLCA1MCUpO1xufVxuXG5oMSB7XG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogOHB4O1xufVxuXG5oMyB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbiNwb3J0Zm9saW8tbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGhzbCh2YXIoLS1odWVfMSksIDEwMCUsIDUwJSk7XG59XG5cbi5kYXRlIHtcbiAgICBjb2xvcjogI0FBQTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY2xlYXI6IHJpZ2h0O1xufVxuXG4ubG9jYXRpb24ge1xuICAgIGNvbG9yOiAjQUFBO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjbGVhcjogcmlnaHQ7XG59XG5cbi5leHBlcmllbmNlLWl0ZW0gbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLigJNcIjtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cblxuLm9iamVjdGl2ZSB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xufVxuXG4uZWR1Y2F0aW9uIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG59XG5cbi5jb3Vyc2Utd29yayB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xufVxuXG4uY291cnNlLWxpc3Qge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZXhwZXJpZW5jZSB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xufVxuXG4uZXhwZXJpZW5jZS1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXdhcmRzIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG59XG5cbi5za2lsbHMge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVmZXJlbmNlcyB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xufVxuXG4ucmVmZXJlbmNlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMzLjMlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/resume/resume.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/resume/resume.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"grid\">\n\n    <div class=\"header\">\n        <h1>Connor Yass</h1>\n        <div class=\"info\">\n            <a href=\"mailto:yassck02@gmail.com\">yassck02@gmail.com</a>\n            <span> | </span>\n            <p>(262) 424-3989</p>\n            <span> | </span>\n            <a id=\"portfolio-link\" href=\"https://yassck02.github.io\">https://yassck02.github.io</a>\n        </div>\n        <hr>\n        <div class=\"objective\">\n            <p>I am pursuing a software engineering position in a fast-paced environment where team work, critical thinking, and creative problem solving, are key to success.</p>\n        </div>\n    </div>\n\n    <div class=\"education\">\n        <h3>Education</h3>\n        <hr>\n        <p class=\"date\">Expected Dec '19</p>\n        <li>University of Wisconsin Whitewater</li>\n        <li>Major: <strong>Computer Science</strong> and <strong>Applied Mathematics</strong> double major</li>\n        <li>Cumulative GPA : 3.8/4.0   Computer Science GPA : <strong>4.0</strong>/4.0</li>\n    </div>\n\n    <div class=\"course-work\">\n        <h3>Courses</h3>\n        <hr>\n        <ul class=\"course-list\">\n            <li>MATH 253-255 Calculus I-III</li>\n            <li>MATH 280 Discrete Mathematics</li>\n            <li>MATH 355 Matrices and Linear Algebra</li>\n            <li>MATH 469 Partial Differential Equations</li>\n            <li>MATH 381 Modeling and Simulation</li>\n            <li>COMPSCI 222 Intermediate C++</li>\n        </ul>\n        <ul class=\"course-list\">\n            <li>COMPSCI 223 Data Structures</li>\n            <li>COMPSCI 271 Assembly Programming</li>\n            <li>COMPSCI 412 Computer Organization</li>\n            <li>COMPSCI 433 Theory of Algorithms</li>\n            <li>COMPSCI 461 Wireless Computing Architectures</li>\n            <li>COMPSCI 332 Intro to Artificial Intelligence</li>\n        </ul>\n    </div>\n\n    <div class=\"experience\">\n        <h3>Work Experience</h3>\n        <hr>\n\n        <div class=\"experience-item\">\n            <span class=\"location\">Milwaukee, WI</span>\n            <p class=\"date\">May '18 - Jan '19</p>\n            <p><strong>Software Engineering Co-op</strong>: Rockwell Automation</p>\n            <li>Developed and documented user facing features in C#, Java, and C++</li>\n            <li>Participated in the full development lifecycle using scaled agile methodologies</li>\n        </div>\n\n        <div class=\"experience-item\">\n            <span class=\"location\">Whitewater, WI</span>\n            <p class=\"date\">May '17 - May '18</p>\n            <p><strong>Programming Intern</strong>: Interactive Degree Planner LLC</p>\n            <li>Designed and implemented complex algorithms in C++</li>\n            <li>Optimized and updated old code to comply with new specifications</li>\n        </div>\n\n        <div class=\"experience-item\">\n            <span class=\"location\">Whitewater, WI</span>\n            <span class=\"date\">Feb - Sept '16'</span>\n            <p><strong>Game Development Intern</strong>: Mobile Mesh Games LLC</p>\n            <li>Developed, tested, and debugged C# code for mobile apps</li>\n            <li>Implemented art assets and UI control logic</li>\n        </div>\n\n        <div class=\"experience-item\">\n            <p class=\"date\">June '15 - Present</p>\n            <p>Self-taught <strong>iOS and OS X App developer</strong></p>\n            <li>Produced and released multiple mobile apps using the Swift 3.0 language</li>\n        </div>\n\n        <div class=\"experience-item\">\n            <span class=\"location\">Whitewater, WI</span>\n            <p class=\"date\">Jan '16 - May '18</p>\n            <p><strong>3D Printer and Laser Cutter Lab Technician</strong>: Arts Media Center</p>\n            <li>Taught students and professors how to use the equipment</li>\n            <li>Cleaned, maintained, and operated the machinery</li>\n        </div>\n\n    </div>\n\n    <div class=\"skills\">\n        <h3>Skills</h3>\n        <hr>\n        <ul>\n            <li>Object Oriented Design and Analysis</li>\n            <li>Dynamic programming</li>\n            <li>Highly efficient and organized</li>\n            <li>Creative problem solving and attention to detail</li>\n        </ul>\n    </div>\n\n    <div class=\"awards\">\n        <h3>Awards</h3>\n        <hr>\n        <ul>\n            <p class=\"date\">Dec '17</p>\n            <li>Putnam exam participant</li>\n            <p class=\"date\">Nov '17</p>\n            <li><strong>1st place</strong> - UWW Hackathon</li>\n            <p class=\"date\">Summer '16 - '17</p>\n            <li><strong>Undergraduate Research</strong> Felowship</li>\n            <p class=\"date\">Fall ’15 - Present</p>\n            <li>UW-Whitewater <strong>Deans List</strong></li>\n        </ul>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/resume/resume.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/resume/resume.page.ts ***!
  \*********************************************/
/*! exports provided: ResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePage", function() { return ResumePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumePage = /** @class */ (function () {
    function ResumePage() {
    }
    ResumePage.prototype.ngOnInit = function () { };
    ResumePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./resume.page.html */ "./src/app/pages/resume/resume.page.html"),
            styles: [__webpack_require__(/*! ./resume.page.css */ "./src/app/pages/resume/resume.page.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumePage);
    return ResumePage;
}());



/***/ }),

/***/ "./src/app/services/experience.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/*! exports provided: ExperienceService, EXPERIENCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCE", function() { return EXPERIENCE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceService = /** @class */ (function () {
    function ExperienceService(http) {
        this.http = http;
    }
    ExperienceService.prototype.getExperiences = function () { return EXPERIENCE; };
    ExperienceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExperienceService);
    return ExperienceService;
}());

var EXPERIENCE = [
    {
        title: 'Software Engineering co-op',
        company: 'Rockwell Automation',
        location: 'Milwaukee WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Automated Testing',
            'c++ front end developement'
        ]
    },
    {
        title: 'Programming Intern',
        company: 'Interactive Degree Planner LLC',
        location: 'Whitewater WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Designed and implemented algorithms'
        ]
    },
    {
        title: 'Game Developement Intern',
        company: 'Mobile Mesh Games',
        location: 'Whitewater WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Mobile app developement',
            'IMplamented art assets'
        ]
    }
];


/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService, PROJECT_REFS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_REFS", function() { return PROJECT_REFS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this._profile_url = "https://raw.githubusercontent.com/yassck02";
        this._manifest_filename = "manifest.json";
    }
    ProjectService.prototype.getProject = function (id) {
        var url = this._profile_url + "/" + PROJECT_REFS[id] + "/master/" + this._manifest_filename;
        return this.http.get(url);
    };
    ProjectService.prototype.getProjectRefs = function () {
        return PROJECT_REFS;
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());

var PROJECT_REFS = [
    "_Chaos",
    "Mandelbrot-Set",
    "Spirographer",
    "Math-Art",
    "L-System-Viewer",
    "ASCII-Maze-Generator"
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Connor/Documents/Projects/Portfolio/yassck02.github.io/src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map