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
var moment = require("moment");
var EXIFService = (function () {
    function EXIFService() {
    }
    EXIFService.prototype.getDateTimeFromPicture = function (base64) {
        try {
            var exif = this.readEXIFFromBase64(base64);
            console.log(exif);
            if (exif.DateTime) {
                var dateTime = moment(exif.DateTime, 'YYYY:MM:DD hh:mm:ss');
                return dateTime;
            }
        }
        catch (e) {
            console.error('Error getting datetime from exif', e);
        }
        return null;
    };
    EXIFService.prototype.readEXIFFromBase64 = function (base64Image) {
        var arrayBuffer = this.base64ToArrayBuffer(base64Image);
        return EXIF.readFromBinaryFile(arrayBuffer);
    };
    EXIFService.prototype.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    };
    return EXIFService;
}());
EXIFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EXIFService);
exports.EXIFService = EXIFService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhpZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBRTNDLCtCQUFpQztBQUdqQyxJQUFhLFdBQVc7SUFFdEI7SUFBZ0IsQ0FBQztJQUVqQiw0Q0FBc0IsR0FBdEIsVUFBdUIsTUFBTTtRQUMzQixJQUFJLENBQUM7WUFDSCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxDQUFDLFFBQWUsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixXQUFXO1FBQzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyx5Q0FBbUIsR0FBM0IsVUFBNEIsTUFBTTtRQUNoQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFOztHQUNBLFdBQVcsQ0FrQ3ZCO0FBbENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgRVhJRjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRVhJRlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0RGF0ZVRpbWVGcm9tUGljdHVyZShiYXNlNjQpe1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXhpZiA9IHRoaXMucmVhZEVYSUZGcm9tQmFzZTY0KGJhc2U2NCk7XG4gICAgICBjb25zb2xlLmxvZyhleGlmKTtcbiAgICAgIGlmIChleGlmLkRhdGVUaW1lKSB7XG4gICAgICAgIGxldCBkYXRlVGltZSA9IG1vbWVudChleGlmLkRhdGVUaW1lLCAnWVlZWTpNTTpERCBoaDptbTpzcycpO1xuICAgICAgICByZXR1cm4gZGF0ZVRpbWUgYXMgYW55O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgZGF0ZXRpbWUgZnJvbSBleGlmJyxlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZWFkRVhJRkZyb21CYXNlNjQoYmFzZTY0SW1hZ2UpIHtcbiAgICBsZXQgYXJyYXlCdWZmZXIgPSB0aGlzLmJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0SW1hZ2UpO1xuICAgIHJldHVybiBFWElGLnJlYWRGcm9tQmluYXJ5RmlsZShhcnJheUJ1ZmZlcik7XG4gIH1cblxuICBwcml2YXRlIGJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0KSB7XG4gICAgYmFzZTY0ID0gYmFzZTY0LnJlcGxhY2UoL15kYXRhXFw6KFteXFw7XSspXFw7YmFzZTY0LC9nbWksICcnKTtcbiAgICB2YXIgYmluYXJ5ID0gYXRvYihiYXNlNjQpO1xuICAgIHZhciBsZW4gPSBiaW5hcnkubGVuZ3RoO1xuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIobGVuKTtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmlld1tpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG59XG4iXX0=