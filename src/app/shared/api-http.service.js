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
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var environment_1 = require("../../environments/environment");
var local_storage_service_1 = require("./services/local-storage.service");
var ApiHttp = (function () {
    function ApiHttp(config, http, localStorage) {
        this.config = config;
        this.http = http;
        this.localStorage = localStorage;
        this.apiUrl = config.apiUrl;
    }
    ApiHttp.prototype.get = function (url, data, options) {
        if (options) {
            options.body = '';
        }
        else {
            options = { body: '' };
        }
        return this.http.get(this.apiUrl + url + this.serializeGetParams(data), this.appendHeaders(options))
            .map(this.mapJson)
            .catch(this.handleError);
    };
    ApiHttp.prototype.post = function (url, body, options) {
        return this.http.post(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options))
            .map(this.mapJson)
            .catch(this.handleError);
    };
    ApiHttp.prototype.put = function (url, body, options) {
        return this.http.put(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options))
            .map(this.mapJson)
            .catch(this.handleError);
    };
    ApiHttp.prototype.delete = function (url, options) {
        if (!options) {
            options = { body: "" };
        }
        return this.http.delete(this.apiUrl + url, this.appendHeaders(options))
            .map(this.mapJson)
            .catch(this.handleError);
    };
    ApiHttp.prototype.patch = function (url, body, options) {
        return this.http.patch(this.apiUrl + url, JSON.stringify(body), this.appendHeaders(options))
            .map(this.mapJson)
            .catch(this.handleError);
    };
    ApiHttp.prototype.head = function (url, options) {
        return this.http.head(this.apiUrl + url, this.appendHeaders(options))
            .map(this.mapJson)
            .catch(this.handleError);
    };
    ApiHttp.prototype.mapJson = function (res) {
        return res.json().data;
    };
    ApiHttp.prototype.appendHeaders = function (options) {
        if (!options) {
            options = {};
        }
        if (!options.headers) {
            options.headers = new http_1.Headers();
        }
        var headers = options.headers;
        headers.append('Authorization', 'Bearer ' + this.localStorage.get('access_token'));
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return options;
    };
    ApiHttp.prototype.handleError = function (error, observable) {
        try {
            var json = error.json();
            console.error(json);
        }
        catch (e) {
            console.error(error);
        }
        return rxjs_1.Observable.throw(json);
    };
    ApiHttp.prototype.serializeGetParams = function (object) {
        if (!object) {
            return "";
        }
        var str = "?";
        for (var key in object) {
            if (str != "") {
                str += "&";
            }
            if (Array.isArray(object[key])) {
                object[key].forEach(function (value) {
                    str += key + encodeURIComponent('[]') + "="
                        + (value ? encodeURIComponent(value) : '') + '&';
                });
            }
            else {
                str += key + "=" + (object[key] ? encodeURIComponent(object[key]) : '');
            }
        }
        return str;
    };
    return ApiHttp;
}());
ApiHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ApiConfig,
        http_1.Http,
        local_storage_service_1.LocalStorageService])
], ApiHttp);
exports.ApiHttp = ApiHttp;
var ApiConfig = (function () {
    function ApiConfig(apiUrl) {
        this.apiUrl = apiUrl;
    }
    return ApiConfig;
}());
exports.ApiConfig = ApiConfig;
function apiHttpServiceFactory(http, localStorage) {
    return new ApiHttp(new ApiConfig(environment_1.environment.apiUrl), http, localStorage);
}
exports.apiHttpServiceFactory = apiHttpServiceFactory;
exports.apiHttpServiceProvider = {
    provide: ApiHttp,
    useFactory: apiHttpServiceFactory,
    deps: [http_1.Http, local_storage_service_1.LocalStorageService]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWh0dHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaS1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQTBFO0FBQzFFLDZCQUFnQztBQUVoQyw4REFBMkQ7QUFDM0QsMEVBQXFFO0FBS3JFLElBQWEsT0FBTztJQUdsQixpQkFBb0IsTUFBaUIsRUFDakIsSUFBVSxFQUNWLFlBQWlDO1FBRmpDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUVuRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxHQUFVLEVBQUUsSUFBUyxFQUFFLE9BQTJCO1FBQ3BELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDVixPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDTCxPQUFPLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssR0FBVSxFQUFFLElBQVMsRUFBRSxPQUEyQjtRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFD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QyxHQUFHLEdBQUc7MEJBQ3ZDLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDckQsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUUsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBM0dELElBMkdDO0FBM0dZLE9BQU87SUFEbkIsaUJBQVUsRUFBRTtxQ0FJaUIsU0FBUztRQUNYLFdBQUk7UUFDSSwyQ0FBbUI7R0FMMUMsT0FBTyxDQTJHbkI7QUEzR1ksMEJBQU87QUE2R3BCO0lBQ0UsbUJBQW1CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO0lBQ2hDLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksOEJBQVM7QUFPdEIsK0JBQXVDLElBQVUsRUFBRSxZQUFpQztJQUNsRixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxTQUFTLENBQzlCLHlCQUFXLENBQUMsTUFBTSxDQUNuQixFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBSkQsc0RBSUM7QUFHVSxRQUFBLHNCQUFzQixHQUMvQjtJQUNFLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsSUFBSSxFQUFFLENBQUMsV0FBSSxFQUFFLDJDQUFtQixDQUFDO0NBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtlbnZpcm9ubWVudH0gZnJvbSBcIi4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpSHR0cCB7XG4gIHByaXZhdGUgYXBpVXJsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBBcGlDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuYXBpVXJsID0gY29uZmlnLmFwaVVybDtcbiAgfVxuXG4gIGdldCh1cmw6c3RyaW5nLCBkYXRhPzphbnksIG9wdGlvbnM/OlJlcXVlc3RPcHRpb25zQXJncyk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZihvcHRpb25zKXtcbiAgICAgIG9wdGlvbnMuYm9keSA9ICcnO1xuICAgIH1lbHNlIHtcbiAgICAgIG9wdGlvbnMgPSB7Ym9keTonJ307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsICsgdXJsICsgdGhpcy5zZXJpYWxpemVHZXRQYXJhbXMoZGF0YSksIHRoaXMuYXBwZW5kSGVhZGVycyhvcHRpb25zKSlcbiAgICAgIC5tYXAodGhpcy5tYXBKc29uKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcG9zdCh1cmw6c3RyaW5nLCBib2R5PzphbnksIG9wdGlvbnM/OlJlcXVlc3RPcHRpb25zQXJncyk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwgKyB1cmwsIEpTT04uc3RyaW5naWZ5KGJvZHkpLCB0aGlzLmFwcGVuZEhlYWRlcnMob3B0aW9ucykpXG4gICAgICAubWFwKHRoaXMubWFwSnNvbilcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHB1dCh1cmw6c3RyaW5nLCBib2R5OmFueSwgb3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpVXJsICsgdXJsLCBKU09OLnN0cmluZ2lmeShib2R5KSwgdGhpcy5hcHBlbmRIZWFkZXJzKG9wdGlvbnMpKVxuICAgICAgLm1hcCh0aGlzLm1hcEpzb24pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBkZWxldGUodXJsOnN0cmluZywgb3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHsgYm9keTogXCJcIiB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYXBpVXJsICsgdXJsLCB0aGlzLmFwcGVuZEhlYWRlcnMob3B0aW9ucykpXG4gICAgICAubWFwKHRoaXMubWFwSnNvbilcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHBhdGNoKHVybDpzdHJpbmcsIGJvZHk/OmFueSwgb3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2godGhpcy5hcGlVcmwgKyB1cmwsIEpTT04uc3RyaW5naWZ5KGJvZHkpLCB0aGlzLmFwcGVuZEhlYWRlcnMob3B0aW9ucykpXG4gICAgICAubWFwKHRoaXMubWFwSnNvbilcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGhlYWQodXJsOnN0cmluZywgb3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuaGVhZCh0aGlzLmFwaVVybCArIHVybCwgdGhpcy5hcHBlbmRIZWFkZXJzKG9wdGlvbnMpKVxuICAgICAgLm1hcCh0aGlzLm1hcEpzb24pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIG1hcEpzb24ocmVzOlJlc3BvbnNlKTphbnkge1xuICAgIHJldHVybiByZXMuanNvbigpLmRhdGE7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZEhlYWRlcnMob3B0aW9ucz86UmVxdWVzdE9wdGlvbnNBcmdzKTpSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIH1cbiAgICBsZXQgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbiAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRoaXMubG9jYWxTdG9yYWdlLmdldCgnYWNjZXNzX3Rva2VuJykpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjphbnksIG9ic2VydmFibGU6T2JzZXJ2YWJsZTxhbnk+KSB7XG4gICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICB0cnkge1xuICAgICAgdmFyIGpzb24gPSBlcnJvci5qc29uKCk7XG4gICAgICBjb25zb2xlLmVycm9yKGpzb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGpzb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVHZXRQYXJhbXMob2JqZWN0OmFueSk6c3RyaW5nIHtcbiAgICBpZiAoIW9iamVjdCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IFwiP1wiO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChzdHIgIT0gXCJcIikge1xuICAgICAgICBzdHIgKz0gXCImXCI7XG4gICAgICB9XG4gICAgICBpZihBcnJheS5pc0FycmF5KG9iamVjdFtrZXldKSl7XG4gICAgICAgIG9iamVjdFtrZXldLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHN0ciArPSBrZXkgKyBlbmNvZGVVUklDb21wb25lbnQoJ1tdJykgKyBcIj1cIlxuICAgICAgICAgICAgKyAodmFsdWUgPyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpIDogJycpICsgJyYnO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciArPSBrZXkgKyBcIj1cIiArIChvYmplY3Rba2V5XSA/IGVuY29kZVVSSUNvbXBvbmVudChvYmplY3Rba2V5XSkgOiAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwaUNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlVcmw6c3RyaW5nKSB7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcGlIdHRwU2VydmljZUZhY3RvcnkgKGh0dHA6IEh0dHAsIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSkgIHtcbiAgcmV0dXJuIG5ldyBBcGlIdHRwKG5ldyBBcGlDb25maWcoXG4gICAgZW52aXJvbm1lbnQuYXBpVXJsLFxuICApLCBodHRwLCBsb2NhbFN0b3JhZ2UpO1xufVxuXG5cbmV4cG9ydCBsZXQgYXBpSHR0cFNlcnZpY2VQcm92aWRlciA9XG4gIHtcbiAgICBwcm92aWRlOiBBcGlIdHRwLFxuICAgIHVzZUZhY3Rvcnk6IGFwaUh0dHBTZXJ2aWNlRmFjdG9yeSxcbiAgICBkZXBzOiBbSHR0cCwgTG9jYWxTdG9yYWdlU2VydmljZV1cbiAgfTtcblxuXG4iXX0=