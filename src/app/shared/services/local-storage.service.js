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
var LocalStorageService = (function () {
    function LocalStorageService() {
        if (!localStorage) {
            console.warn('LOCAL_STORAGE_NOT_SUPPORTED');
        }
    }
    LocalStorageService.prototype.get = function (key) {
        if (localStorage) {
            return localStorage.getItem(key);
        }
        return null;
    };
    LocalStorageService.prototype.set = function (key, value) {
        if (localStorage) {
            return localStorage.setItem(key, value);
        }
    };
    LocalStorageService.prototype.remove = function (key) {
        if (localStorage) {
            return localStorage.removeItem(key);
        }
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LocalStorageService);
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBRzNDLElBQWEsbUJBQW1CO0lBQzlCO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxpQ0FBRyxHQUFILFVBQUksR0FBRyxFQUFFLEtBQUs7UUFDWixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxHQUFHO1FBQ1IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTs7R0FDQSxtQkFBbUIsQ0EwQi9CO0FBMUJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS53YXJuKCdMT0NBTF9TVE9SQUdFX05PVF9TVVBQT1JURUQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==