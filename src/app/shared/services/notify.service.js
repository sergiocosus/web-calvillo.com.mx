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
var platform_browser_1 = require("@angular/platform-browser");
var angular2_notifications_1 = require("angular2-notifications");
var NotifyService = (function () {
    function NotifyService(notification, satinizer) {
        this.notification = notification;
        this.satinizer = satinizer;
    }
    NotifyService.prototype.success = function (content, title, override) {
        if (title === void 0) { title = 'Éxito'; }
        return this.notification.success(title, content, override);
    };
    NotifyService.prototype.error = function (content, title, override) {
        if (title === void 0) { title = 'Error'; }
        return this.notification.error(title, content, override);
    };
    NotifyService.prototype.alert = function (content, title, override) {
        if (title === void 0) { title = 'Alert'; }
        return this.notification.alert(title, content, override);
    };
    NotifyService.prototype.info = function (content, title, override) {
        if (title === void 0) { title = 'Info'; }
        return this.notification.info(title, content, override);
    };
    NotifyService.prototype.bare = function (content, title, override) {
        if (title === void 0) { title = 'Bare'; }
        return this.notification.bare(title, content, override);
    };
    NotifyService.prototype.create = function (title, content, type, override) {
        return this.notification.create(title, content, type, override);
    };
    NotifyService.prototype.html = function (html, type, override) {
        return this.notification.html(html, type, override);
    };
    NotifyService.prototype.remove = function (id) {
        this.notification.remove(id);
    };
    NotifyService.prototype.serviceError = function (json) {
        var message = this.satinizer.sanitize(core_1.SecurityContext.HTML, json.message);
        var code = this.satinizer.sanitize(core_1.SecurityContext.HTML, json.code);
        var html = this.satinizer.bypassSecurityTrustHtml("\n      <div class=\"sn-title\">Error</div>\n      <div class=\"sn-content\">\n        " + message + " </br>Code: " + code + "\n      </div>\n  ");
        return this.html(html, 'error');
    };
    return NotifyService;
}());
NotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular2_notifications_1.NotificationsService,
        platform_browser_1.DomSanitizer])
], NotifyService);
exports.NotifyService = NotifyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwRDtBQUMxRCw4REFBdUQ7QUFFdkQsaUVBQTREO0FBRzVELElBQWEsYUFBYTtJQUV4Qix1QkFBb0IsWUFBa0MsRUFDbEMsU0FBdUI7UUFEdkIsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDM0MsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxPQUFlLEVBQUUsS0FBZSxFQUFFLFFBQWM7UUFBL0Isc0JBQUEsRUFBQSxlQUFlO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sT0FBZSxFQUFFLEtBQWUsRUFBRSxRQUFjO1FBQS9CLHNCQUFBLEVBQUEsZUFBZTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLE9BQWUsRUFBRSxLQUFlLEVBQUUsUUFBYztRQUEvQixzQkFBQSxFQUFBLGVBQWU7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxPQUFlLEVBQUUsS0FBYyxFQUFFLFFBQWM7UUFBOUIsc0JBQUEsRUFBQSxjQUFjO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssT0FBZSxFQUFFLEtBQWMsRUFBRSxRQUFjO1FBQTlCLHNCQUFBLEVBQUEsY0FBYztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxPQUFlLEVBQUUsSUFBWSxFQUFFLFFBQWM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssSUFBUyxFQUFFLElBQVksRUFBRSxRQUFjO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLElBQVM7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsc0JBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHNCQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLDRGQUc1QyxPQUFPLG9CQUFlLElBQUksdUJBRWpDLENBQUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBbkRZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FHdUIsNkNBQW9CO1FBQ3ZCLCtCQUFZO0dBSGhDLGFBQWEsQ0FtRHpCO0FBbkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBTZWN1cml0eUNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzYXRpbml6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgc3VjY2Vzcyhjb250ZW50OiBzdHJpbmcsIHRpdGxlID0gJ8OJeGl0bycsIG92ZXJyaWRlPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uLnN1Y2Nlc3ModGl0bGUsIGNvbnRlbnQsIG92ZXJyaWRlKTtcbiAgfVxuXG4gIGVycm9yKGNvbnRlbnQ6IHN0cmluZywgdGl0bGUgPSAnRXJyb3InLCBvdmVycmlkZT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbi5lcnJvcih0aXRsZSwgY29udGVudCwgb3ZlcnJpZGUpO1xuICB9XG5cbiAgYWxlcnQoY29udGVudDogc3RyaW5nLCB0aXRsZSA9ICdBbGVydCcsIG92ZXJyaWRlPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uLmFsZXJ0KHRpdGxlLCBjb250ZW50LCBvdmVycmlkZSk7XG4gIH1cblxuICBpbmZvKGNvbnRlbnQ6IHN0cmluZywgdGl0bGUgPSAnSW5mbycsIG92ZXJyaWRlPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uLmluZm8odGl0bGUsIGNvbnRlbnQsIG92ZXJyaWRlKTtcbiAgfVxuXG4gIGJhcmUoY29udGVudDogc3RyaW5nLCB0aXRsZSA9ICdCYXJlJywgb3ZlcnJpZGU/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb24uYmFyZSh0aXRsZSwgY29udGVudCwgb3ZlcnJpZGUpO1xuICB9XG5cbiAgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBvdmVycmlkZT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbi5jcmVhdGUodGl0bGUsIGNvbnRlbnQsIHR5cGUsIG92ZXJyaWRlKTtcbiAgfVxuXG4gIGh0bWwoaHRtbDogYW55LCB0eXBlOiBzdHJpbmcsIG92ZXJyaWRlPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uLmh0bWwoaHRtbCwgdHlwZSwgb3ZlcnJpZGUpO1xuICB9XG5cbiAgcmVtb3ZlKGlkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb24ucmVtb3ZlKGlkKTtcbiAgfVxuXG4gIHNlcnZpY2VFcnJvcihqc29uOiBhbnkpIHtcbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuc2F0aW5pemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBqc29uLm1lc3NhZ2UpO1xuICAgIGxldCBjb2RlID0gdGhpcy5zYXRpbml6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGpzb24uY29kZSk7XG5cbiAgICBsZXQgaHRtbCA9IHRoaXMuc2F0aW5pemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzbi10aXRsZVwiPkVycm9yPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic24tY29udGVudFwiPlxuICAgICAgICAke21lc3NhZ2V9IDwvYnI+Q29kZTogJHtjb2RlfVxuICAgICAgPC9kaXY+XG4gIGApO1xuICAgIHJldHVybiB0aGlzLmh0bWwoaHRtbCwgJ2Vycm9yJyk7XG4gIH1cblxufVxuIl19