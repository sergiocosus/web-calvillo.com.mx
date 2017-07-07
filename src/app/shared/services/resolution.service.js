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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ResolutionService = (function () {
    function ResolutionService(platformId) {
        this.platformId = platformId;
    }
    ResolutionService.prototype.getSize = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var width = window.innerWidth;
            if (width < 576) {
                return 'xs';
            }
            else if (width < 768) {
                return 'sm';
            }
            else if (width < 992) {
                return 'md';
            }
            else if (width < 1200) {
                return 'lg';
            }
            else {
                return 'xl';
            }
        }
        else {
            return null;
        }
    };
    return ResolutionService;
}());
ResolutionService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_1.PLATFORM_ID)),
    __metadata("design:paramtypes", [Object])
], ResolutionService);
exports.ResolutionService = ResolutionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x1dGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb2x1dGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTRFO0FBQzVFLDBDQUFrRDtBQUdsRCxJQUFhLGlCQUFpQjtJQUU1QiwyQkFBeUMsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUFJLENBQUM7SUFFaEUsbUNBQU8sR0FBUDtRQUNFLEVBQUUsQ0FBQyxDQUFDLDBCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSyxDQUFDLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtJQUdFLFdBQUEsYUFBTSxDQUFDLGtCQUFXLENBQUMsQ0FBQTtxQ0FBcUIsTUFBTTtHQUZoRCxpQkFBaUIsQ0F1QjdCO0FBdkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSG9zdExpc3RlbmVyLCBJbmplY3QsIFBMQVRGT1JNX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXNvbHV0aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHsgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgaWYgKHdpZHRoIDwgNTc2KSB7XG4gICAgICAgIHJldHVybiAneHMnO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDc2OCApIHtcbiAgICAgICAgcmV0dXJuICdzbSc7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgOTkyICkge1xuICAgICAgICByZXR1cm4gJ21kJztcbiAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAxMjAwICkge1xuICAgICAgICByZXR1cm4gJ2xnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAneGwnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxufVxuIl19