"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var api_http_service_1 = require("./api-http.service");
var router_1 = require("@angular/router");
var void_component_1 = require("./components/void/void.component");
var resolution_service_1 = require("./services/resolution.service");
var forms_1 = require("@angular/forms");
var local_storage_service_1 = require("./services/local-storage.service");
var exif_service_1 = require("./services/exif.service");
var angular2_notifications_1 = require("angular2-notifications");
var notify_service_1 = require("./services/notify.service");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var logo_component_1 = require("./components/logo/logo.component");
var ng_sidebar_1 = require("ng-sidebar");
var navbar_service_1 = require("./services/navbar.service");
var platform_browser_1 = require("@angular/platform-browser");
var my_hammer_config_1 = require("./my-hammer-config");
var google_analytics_service_1 = require("./services/google-analytics.service");
var script_service_1 = require("./services/script.service");
var ng2_adsense_1 = require("ng2-adsense");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                navbar_service_1.NavbarService,
                api_http_service_1.apiHttpServiceProvider,
                resolution_service_1.ResolutionService,
                local_storage_service_1.LocalStorageService,
                exif_service_1.EXIFService,
                notify_service_1.NotifyService,
                script_service_1.ScriptService,
                google_analytics_service_1.GoogleAnalyticsService,
                {
                    provide: platform_browser_1.HAMMER_GESTURE_CONFIG,
                    useClass: my_hammer_config_1.MyHammerConfig,
                },
            ],
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            router_1.RouterModule,
            material_1.MdDialogModule,
            material_1.MdButtonModule,
            material_1.MdSelectModule,
            material_1.MdInputModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            angular2_notifications_1.SimpleNotificationsModule,
            ng_sidebar_1.SidebarModule,
            ng2_adsense_1.AdsenseModule,
        ],
        declarations: [
            void_component_1.VoidComponent,
            logo_component_1.LogoComponent,
        ],
        exports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            ng_sidebar_1.SidebarModule,
            ng2_adsense_1.AdsenseModule,
            void_component_1.VoidComponent,
            material_1.MdDialogModule,
            material_1.MdButtonModule,
            material_1.MdInputModule,
            material_1.MdSelectModule,
            logo_component_1.LogoComponent,
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBNEQ7QUFDNUQsMENBQStDO0FBQy9DLHVEQUE0RDtBQUM1RCwwQ0FBNkM7QUFDN0MsbUVBQWlFO0FBQ2pFLG9FQUFnRTtBQUNoRSx3Q0FBZ0U7QUFDaEUsMEVBQXFFO0FBQ3JFLHdEQUFvRDtBQUNwRCxpRUFBaUU7QUFDakUsNERBQXdEO0FBQ3hELHNDQUF5QztBQUN6Qyw4Q0FBZ0c7QUFDaEcsbUVBQWlFO0FBQ2pFLHlDQUF5QztBQUN6Qyw0REFBd0Q7QUFDeEQsOERBQWdFO0FBQ2hFLHVEQUFrRDtBQUNsRCxnRkFBMkU7QUFDM0UsNERBQXdEO0FBQ3hELDJDQUEwQztBQXNDMUMsSUFBYSxZQUFZO0lBQXpCO0lBb0JBLENBQUM7SUFuQlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCw4QkFBYTtnQkFDYix5Q0FBc0I7Z0JBQ3RCLHNDQUFpQjtnQkFDakIsMkNBQW1CO2dCQUNuQiwwQkFBVztnQkFDWCw4QkFBYTtnQkFDYiw4QkFBYTtnQkFDYixpREFBc0I7Z0JBQ3RCO29CQUNFLE9BQU8sRUFBRSx3Q0FBcUI7b0JBQzlCLFFBQVEsRUFBRSxpQ0FBYztpQkFDekI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLFlBQVk7SUFuQ3hCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1osaUJBQVU7WUFDVixxQkFBWTtZQUNaLHlCQUFjO1lBQ2QseUJBQWM7WUFDZCx5QkFBYztZQUNkLHdCQUFhO1lBQ2IsbUJBQVc7WUFDWCwyQkFBbUI7WUFDbkIsa0RBQXlCO1lBQ3pCLDBCQUFhO1lBQ2IsMkJBQWE7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLDhCQUFhO1lBQ2IsOEJBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1osaUJBQVU7WUFDVixtQkFBVztZQUNYLDJCQUFtQjtZQUNuQixxQkFBWTtZQUNaLDBCQUFhO1lBQ2IsMkJBQWE7WUFDYiw4QkFBYTtZQUNiLHlCQUFjO1lBQ2QseUJBQWM7WUFDZCx3QkFBYTtZQUNiLHlCQUFjO1lBQ2QsOEJBQWE7U0FDZDtLQUNGLENBQUM7R0FDVyxZQUFZLENBb0J4QjtBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGFwaUh0dHBTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuL2FwaS1odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBWb2lkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3ZvaWQvdm9pZC5jb21wb25lbnQnO1xuaW1wb3J0IHtSZXNvbHV0aW9uU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNvbHV0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0VYSUZTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2V4aWYuc2VydmljZSc7XG5pbXBvcnQge1NpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGV9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtOb3RpZnlTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL25vdGlmeS5zZXJ2aWNlJztcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge01kQnV0dG9uTW9kdWxlLCBNZERpYWxvZ01vZHVsZSwgTWRJbnB1dE1vZHVsZSwgTWRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IExvZ29Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZGViYXJNb2R1bGV9IGZyb20gJ25nLXNpZGViYXInO1xuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7SEFNTUVSX0dFU1RVUkVfQ09ORklHfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TXlIYW1tZXJDb25maWd9IGZyb20gJy4vbXktaGFtbWVyLWNvbmZpZyc7XG5pbXBvcnQge0dvb2dsZUFuYWx5dGljc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZ29vZ2xlLWFuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7U2NyaXB0U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZSc7XG5pbXBvcnQge0Fkc2Vuc2VNb2R1bGV9IGZyb20gJ25nMi1hZHNlbnNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1kRGlhbG9nTW9kdWxlLFxuICAgIE1kQnV0dG9uTW9kdWxlLFxuICAgIE1kU2VsZWN0TW9kdWxlLFxuICAgIE1kSW5wdXRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTaW1wbGVOb3RpZmljYXRpb25zTW9kdWxlLFxuICAgIFNpZGViYXJNb2R1bGUsXG4gICAgQWRzZW5zZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVm9pZENvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgU2lkZWJhck1vZHVsZSxcbiAgICBBZHNlbnNlTW9kdWxlLFxuICAgIFZvaWRDb21wb25lbnQsXG4gICAgTWREaWFsb2dNb2R1bGUsXG4gICAgTWRCdXR0b25Nb2R1bGUsXG4gICAgTWRJbnB1dE1vZHVsZSxcbiAgICBNZFNlbGVjdE1vZHVsZSxcbiAgICBMb2dvQ29tcG9uZW50LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5hdmJhclNlcnZpY2UsXG4gICAgICAgIGFwaUh0dHBTZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgIFJlc29sdXRpb25TZXJ2aWNlLFxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBFWElGU2VydmljZSxcbiAgICAgICAgTm90aWZ5U2VydmljZSxcbiAgICAgICAgU2NyaXB0U2VydmljZSxcbiAgICAgICAgR29vZ2xlQW5hbHl0aWNzU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgICAgICB1c2VDbGFzczogTXlIYW1tZXJDb25maWcgLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=