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
var environment_1 = require("../../../environments/environment");
var GoogleAnalyticsService = (function () {
    function GoogleAnalyticsService() {
        this.production = environment_1.environment.production;
        this.trackingId = environment_1.environment.googleAnalyticsTrakingId;
        if (this.production) {
            ga('create', this.trackingId, 'auto');
        }
        else {
            ga('create', this.trackingId, 'none');
        }
    }
    GoogleAnalyticsService.prototype.pageView = function (url) {
        if (this.production) {
            ga('set', 'page', url);
            ga('send', 'pageview');
        }
    };
    GoogleAnalyticsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    return GoogleAnalyticsService;
}());
GoogleAnalyticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GoogleAnalyticsService);
exports.GoogleAnalyticsService = GoogleAnalyticsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ29vZ2xlLWFuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUE4RDtBQUs5RCxJQUFhLHNCQUFzQjtJQUdqQztRQUZBLGVBQVUsR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQztRQUNwQyxlQUFVLEdBQUcseUJBQVcsQ0FBQyx3QkFBd0IsQ0FBQztRQUVoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBR0QseUNBQVEsR0FBUixVQUFTLEdBQVc7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVNLDBDQUFTLEdBQWhCLFVBQWlCLGFBQXFCLEVBQ3JCLFdBQW1CLEVBQ25CLFVBQXlCLEVBQ3pCLFVBQXlCO1FBRHpCLDJCQUFBLEVBQUEsaUJBQXlCO1FBQ3pCLDJCQUFBLEVBQUEsaUJBQXlCO1FBQ3hDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO1lBQ2xCLGFBQWEsRUFBRSxhQUFhO1lBQzVCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5Qlksc0JBQXNCO0lBRGxDLGlCQUFVLEVBQUU7O0dBQ0Esc0JBQXNCLENBOEJsQztBQTlCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5kZWNsYXJlIHZhciBnYTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljc1NlcnZpY2Uge1xuICBwcm9kdWN0aW9uID0gZW52aXJvbm1lbnQucHJvZHVjdGlvbjtcbiAgdHJhY2tpbmdJZCA9IGVudmlyb25tZW50Lmdvb2dsZUFuYWx5dGljc1RyYWtpbmdJZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHRoaXMucHJvZHVjdGlvbikge1xuICAgICAgZ2EoJ2NyZWF0ZScsIHRoaXMudHJhY2tpbmdJZCwgJ2F1dG8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2EoJ2NyZWF0ZScsIHRoaXMudHJhY2tpbmdJZCwgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuXG4gIHBhZ2VWaWV3KHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMucHJvZHVjdGlvbikge1xuICAgICAgZ2EoJ3NldCcsICdwYWdlJywgdXJsKTtcbiAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGVtaXRFdmVudChldmVudENhdGVnb3J5OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgZXZlbnRBY3Rpb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICBldmVudExhYmVsOiBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgIGV2ZW50VmFsdWU6IG51bWJlciA9IG51bGwpIHtcbiAgICBnYSgnc2VuZCcsICdldmVudCcsIHtcbiAgICAgIGV2ZW50Q2F0ZWdvcnk6IGV2ZW50Q2F0ZWdvcnksXG4gICAgICBldmVudExhYmVsOiBldmVudExhYmVsLFxuICAgICAgZXZlbnRBY3Rpb246IGV2ZW50QWN0aW9uLFxuICAgICAgZXZlbnRWYWx1ZTogZXZlbnRWYWx1ZVxuICAgIH0pO1xuICB9XG59XG4iXX0=