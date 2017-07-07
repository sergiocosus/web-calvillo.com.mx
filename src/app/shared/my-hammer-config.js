"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHammerConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element, {
            touchAction: "pan-y"
        });
        return mc;
    };
    return MyHammerConfig;
}(platform_browser_1.HammerGestureConfig));
exports.MyHammerConfig = MyHammerConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaGFtbWVyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWhhbW1lci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsOERBR21DO0FBSW5DO0lBQW9DLGtDQUFtQjtJQUF2RDs7SUFPQSxDQUFDO0lBTkMsb0NBQVcsR0FBWCxVQUFZLE9BQW9CO1FBQzlCLElBQUksRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMzQixXQUFXLEVBQUUsT0FBTztTQUNyQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVBELENBQW9DLHNDQUFtQixHQU90RDtBQVBZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSGFtbWVyR2VzdHVyZUNvbmZpZyxcbiAgSEFNTUVSX0dFU1RVUkVfQ09ORklHLFxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZGVjbGFyZSB2YXIgSGFtbWVyOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBNeUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgbWMgPSBuZXcgSGFtbWVyKGVsZW1lbnQsIHtcbiAgICAgIHRvdWNoQWN0aW9uOiBcInBhbi15XCJcbiAgICB9KTtcbiAgICByZXR1cm4gbWM7XG4gIH1cbn1cbiJdfQ==