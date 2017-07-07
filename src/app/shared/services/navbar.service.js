"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var NavbarService = (function () {
    function NavbarService() {
        this.titleSubject = new ReplaySubject_1.ReplaySubject(1);
    }
    NavbarService.prototype.setTitle = function (title) {
        this.title = title;
        this.titleSubject.next(title);
    };
    NavbarService.prototype.getTitle = function () {
        return this.titleSubject.asObservable();
    };
    return NavbarService;
}());
NavbarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NavbarService);
exports.NavbarService = NavbarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZiYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxvREFBaUQ7QUFHakQsSUFBYSxhQUFhO0lBS3hCO1FBSlEsaUJBQVksR0FBMEIsSUFBSSw2QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBSW5ELENBQUM7SUFFakIsZ0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTs7R0FDQSxhQUFhLENBZ0J6QjtBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVwbGF5U3ViamVjdH0gZnJvbSAncnhqcy9SZXBsYXlTdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmJhclNlcnZpY2Uge1xuICBwcml2YXRlIHRpdGxlU3ViamVjdDogUmVwbGF5U3ViamVjdDxzdHJpbmc+ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIHByaXZhdGUgdGl0bGU6IHN0cmluZztcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRpdGxlU3ViamVjdC5uZXh0KHRpdGxlKTtcbiAgfVxuXG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=