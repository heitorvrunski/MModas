webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('Necessario logar para acessar esta pagina !');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_pipes/seachByClient.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeachByClientPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SeachByClientPipe = /** @class */ (function () {
    function SeachByClientPipe() {
    }
    SeachByClientPipe.prototype.transform = function (clients, searchText) {
        if (clients) {
            return clients.filter(function (client) { return client.name.indexOf(searchText) !== -1; });
        }
        return '';
    };
    SeachByClientPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'seachByClient'
        })
    ], SeachByClientPipe);
    return SeachByClientPipe;
}());



/***/ }),

/***/ "./src/app/_pipes/setDecimal.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetDecimalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SetDecimalPipe = /** @class */ (function () {
    function SetDecimalPipe() {
    }
    SetDecimalPipe.prototype.transform = function (input, places, args) {
        if (isNaN(input)) {
            return input;
        }
        this.factor = '1' + Array(+(places > 0 && places + 1)).join('0');
        return Math.round(input * this.factor) / this.factor;
    };
    SetDecimalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'setDecimal'
        })
    ], SetDecimalPipe);
    return SetDecimalPipe;
}());



/***/ }),

/***/ "./src/app/_resolvers/clients-detail-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("./src/app/_services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientDetailResolver = /** @class */ (function () {
    function ClientDetailResolver(clientService, router, alertify) {
        this.clientService = clientService;
        this.router = router;
        this.alertify = alertify;
    }
    ClientDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.clientService.getClient(route.params['id']).catch(function (error) {
            _this.alertify.error('Erro ao retornar dados');
            _this.router.navigate(['/clients']);
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    ClientDetailResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]])
    ], ClientDetailResolver);
    return ClientDetailResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallBack) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallBack();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseurl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseurl + 'auth/login', model, { headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json') })
            .map(function (user) {
            if (user) {
                localStorage.setItem('token', user.tokenString);
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.tokenString);
                console.log(_this.decodedToken);
                _this.userToken = user.tokenString;
            }
        });
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseurl + 'auth/register', model, { headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json') });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientService = /** @class */ (function () {
    function ClientService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    ClientService.prototype.getClients = function () {
        return this.authHttp.get(this.baseUrl + 'clients');
    };
    ClientService.prototype.getClient = function (id) {
        return this.authHttp.get(this.baseUrl + 'clients/' + id);
    };
    ClientService.prototype.updateClient = function (id, client) {
        return this.authHttp.put(this.baseUrl + 'clients/' + id, client);
    };
    ClientService.prototype.registerClient = function (model) {
        return this.authHttp.post(this.baseUrl + 'clients/registerClient', model);
    };
    ClientService.prototype.deleteClient = function (model) {
        return this.authHttp.post(this.baseUrl + 'clients/deleteClient', model);
    };
    ClientService.prototype.addPayment = function (model) {
        return this.authHttp.post(this.baseUrl + 'clients/addPayment', model);
    };
    ClientService.prototype.getPayments = function (clientId) {
        return this.authHttp.get(this.baseUrl + 'clients/getPayments/' + clientId);
    };
    ClientService.prototype.deletePayment = function (model) {
        return this.authHttp.post(this.baseUrl + 'clients/deletePayment/', model);
    };
    ClientService.prototype.getBITotals = function () {
        return this.authHttp.get(this.baseUrl + 'clients/getBITotals');
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(modelStateErrors || serverError || 'Server Error');
            }
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, jwtHelperService) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token != null) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAccessToken */
/* unused harmony export jwtConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clientes_clientes_component__ = __webpack_require__("./src/app/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vendas_vendas_component__ = __webpack_require__("./src/app/vendas/vendas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__route__ = __webpack_require__("./src/app/route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_client_service__ = __webpack_require__("./src/app/_services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_seachByClient_pipe__ = __webpack_require__("./src/app/_pipes/seachByClient.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__clientes_clientes_detail_clientes_detail_component__ = __webpack_require__("./src/app/clientes/clientes-detail/clientes-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__resolvers_clients_detail_resolver__ = __webpack_require__("./src/app/_resolvers/clients-detail-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_setDecimal_pipe__ = __webpack_require__("./src/app/_pipes/setDecimal.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_error_interceptor__ = __webpack_require__("./src/app/_services/error.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__delete_modal_delete_modal__ = __webpack_require__("./src/app/delete-modal/delete-modal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























function getAccessToken() {
    return localStorage.getItem('token');
}
var jwtConfig = {
    tokenGetter: getAccessToken,
    whitelistedDomains: ['localhost:5000']
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__clientes_clientes_component__["a" /* ClientesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__vendas_vendas_component__["a" /* VendasComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_seachByClient_pipe__["a" /* SeachByClientPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_setDecimal_pipe__["a" /* SetDecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_19__clientes_clientes_detail_clientes_detail_component__["a" /* ClientesDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_26__delete_modal_delete_modal__["a" /* DeleteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__route__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: jwtConfig
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_alertify_service__["a" /* AlertifyService */],
                __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_17__services_client_service__["a" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_20__resolvers_clients_detail_resolver__["a" /* ClientDetailResolver */],
                __WEBPACK_IMPORTED_MODULE_24__services_error_interceptor__["a" /* ErrorInterceptorProvider */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clientes/clientes-detail/clientes-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".btn.disabled {\r\n    background-color: silver;\r\n}\r\n.positive {\r\n    background-color: rgb(221, 255, 221);\r\n}\r\n.negative {\r\n    background-color: rgb(255, 218, 218);\r\n}"

/***/ }),

/***/ "./src/app/clientes/clientes-detail/clientes-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12\">\n  <div class=\"col-md-12 order-md-1\">\n    <h4 class=\"mb-3\">Dados - Cliente</h4>\n    <form class=\"needs-validation\" #clientForm=\"ngForm\" novalidate=\"\" (ngSubmit)=\"editClient()\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 mb-3\">\n          <label for=\"name\">Nome</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\"\n            placeholder=\"\"\n            value=\"\" required=\"\" required name=\"name\" [(ngModel)]=\"model.name\" [disabled]=\"!editEnable\">\n          <div class=\"invalid-feedback\">\n            Nome é obrigatório !\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-6 mb-3\">\n          <label for=\"lastName\">Sobrenome/Apelido</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastName\"\n            placeholder=\"\"\n            value=\"\" required=\"\" required name=\"lastName\" [(ngModel)]=\"model.lastName\" [disabled]=\"!editEnable\">\n          <div class=\"invalid-feedback\">\n            Sobrenome/Apelido é obrigatório !\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-3 col-sm-3 mb-3\">\n        <label for=\"email\">Email <span class=\"text-muted\">(Opcional)</span></label>\n        <input type=\"email\" class=\"form-control\" id=\"email\"\n          placeholder=\"joao@email.com\" name=\"email\" [(ngModel)]=\"model.email\" [disabled]=\"!editEnable\">\n        <div class=\"invalid-feedback\">\n          Por favor coloque um e-mail válido !\n        </div>\n      </div>\n      \n      <div class=\"col-md-3 col-sm-3 mb-3\">\n        <label for=\"place\">Local</label>\n        <input type=\"text\" class=\"form-control\" id=\"place\"\n          placeholder=\"\"\n          required=\"\" required name=\"place\" [(ngModel)]=\"model.place\" [disabled]=\"!editEnable\">\n        <div class=\"invalid-feedback\">\n          Por favor informe o local do cliente !\n        </div>\n      </div>\n\n      <div class=\"col-md-3 col-sm-3 mb-3\">\n        <label for=\"phone\">Telefone</label>\n        <input type=\"text\" class=\"form-control\" id=\"phone\"\n          placeholder=\"\"\n          required=\"\" required name=\"phone\" [(ngModel)]=\"model.phone\" [disabled]=\"!editEnable\">\n        <div class=\"invalid-feedback\">\n          Por favor informe o telefone !\n        </div>\n      </div>\n    </div>\n      <hr class=\"mb-4\">\n      <div class=\"row\" >\n      <div class=\"col-md-3 col-sm-3 mb-3\">\n        <button class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!clientForm.valid && !editEnable\" type=\"submit\">Salvar</button>\n        </div>\n        <div class=\"col-md-3 col-sm-3 mb-3\">\n        <button class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!clientForm.valid && !editEnable\" (click)=\"deleteClient()\">Deletar</button>\n        </div>\n      </div> \n    </form>\n    <div class=\"col-md-3 col-sm-3 mb-3\">\n      <button (click)=\"enableEdit()\" class=\"btn btn-primary btn-lg\"><i class=\"fa fa-edit\"></i>Editar</button>\n    </div>\n  </div>\n</div>\n<hr>\n<div class=\"col-lg-12 col-md-12 col-sm-12\">\n  <div class=\"col-md-12 order-md-1\">\n<hr>\n<h4 class=\"mb-3\">Pagamentos Cliente</h4>\n    <form class=\"needs-validation\" [formGroup]=\"payForm\" >\n      <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 mb-3\" [ngClass]=\"{'has-error': (payForm.get('TS').errors || payForm.value.$invalid) && payForm.get('TS').touched}\">\n              <label for=\"TS\">Data</label>\n              <input type=\"date\" class=\"form-control\"\n                placeholder=\"\"\n                formControlName=\"TS\" >\n              <span class=\"help-block\" *ngIf=\"payForm.get('TS').errors  && payForm.get('TS').touched\">\n                Valor e requerido ! \n              </span>\n            </div>\n            <div class=\"col-md-3 col-sm-3 mb-3\">\n              <label for=\"Quantity\">Qtd</label>\n              <input type=\"Quantity\" class=\"form-control\" value=1\n                 formControlName=\"Quantity\">\n              <div class=\"invalid-feedback\">\n                Por favor coloque uma quantidade valida !\n              </div>\n            </div>\n        <div class=\"col-md-6 col-sm-6 mb-3\" [ngClass]=\"{'has-error': (payForm.get('Value').errors || payForm.value.$invalid) && payForm.get('Value').touched}\">\n          <label for=\"Value\">Valor em Reais (R$ 10.00)</label>\n          <input type=\"number\" class=\"form-control\"\n            placeholder=\"\"\n            value=\"\" formControlName=\"Value\" step=\"0.01\" >\n          <span class=\"help-block\" *ngIf=\"payForm.get('Value').errors  && payForm.get('Value').touched\">\n            Valor e requerido ! \n          </span>\n        </div>\n        <div class=\"col-md-3 col-sm-3 mb-3\">\n          <label for=\"Notes\">Comentario<span class=\"text-muted\"> (Opcional) </span></label>\n          <input type=\"Notes\" class=\"form-control\"\n             formControlName=\"Notes\">\n          <div class=\"invalid-feedback\">\n            Por favor coloque um comentario valido !\n          </div>\n        </div>\n      </div>\n\n      <hr class=\"mb-4\">\n      <div class=\"row\" >\n      <div class=\"col-md-3 col-sm-3 mb-3\">\n        <button class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!payForm.valid\" (click)=\"addPay('Comprou')\">Comprou</button>\n        </div>\n        <div class=\"col-md-3 col-sm-3 mb-3\">\n        <button class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!payForm.valid\" (click)=\"addPay('Pagou')\">Pagou</button>\n        </div>\n      </div> \n    </form>\n</div>\n</div>\n<table class=\"table table-hover\" id=\"pay-table\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Data</th>\n        <th>Tipo</th>\n        <th>Qtd</th>\n        <th>Valor</th>\n        <th>Comentario</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let p of paymentList\"\n        style=\"display: table-row;\" [ngClass]=\"{'positive' : p?.method == 'Comprou', 'negative' : p?.method == 'Pagou'}\">  \n        <td style=\"width:20px;\"><i class=\"fa fa-cart-arrow-down\"></i></td>\n        <td>{{p?.ts | date: 'dd/MM/yyyy'}}</td>\n        <td>{{p?.method}}</td>\n        <td>{{p?.quantity}}</td>\n        <td>{{p?.value * p?.quantity}}</td> \n        <td>{{p?.notes}}</td>\n        <td><button class=\"fa fa-trash\" (click)=\"deletePayment(p)\"></button></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td style=\"background: lightgreen;color:black\">Comprou: {{getTotalBuy() | setDecimal:2 }}</td>\n        <td style=\"background: rgb(247, 99, 99);color:black\">Pagou: {{getTotalSell() | setDecimal:2 }}</td>\n        <td style=\"background: rgb(137, 137, 243);color:black\">Saldo Devedor: {{getTotalBuy() - getTotalSell() | setDecimal:2 }}</td>\n        <td></td>\n      </tr>\n    </tbody>\n  </table>\n"

/***/ }),

/***/ "./src/app/clientes/clientes-detail/clientes-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("./src/app/_services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientesDetailComponent = /** @class */ (function () {
    function ClientesDetailComponent(clientService, alertify, route, router, fb) {
        this.clientService = clientService;
        this.alertify = alertify;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.currentDate = new Date();
        this.editEnable = false;
    }
    ClientesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dateString = this.currentDate.getFullYear() + '-' + ('0' + (this.currentDate.getMonth() + 1)).slice(-2)
            + '-' + ('0' + this.currentDate.getDate()).slice(-2);
        this.route.data.subscribe(function (data) {
            _this.client = data['client'];
            _this.model = data['client'];
        });
        this.getPayments(this.model.id);
        this.createPayForm();
        // this.payForm = new FormGroup({
        //   payValue: new FormControl(0.00, [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')] ),
        //   notes: new FormControl('')
        // });
        this.getTotal();
    };
    ClientesDetailComponent.prototype.createPayForm = function () {
        this.payForm = this.fb.group({
            TS: [this.dateString, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            Value: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
            Notes: [''],
            Method: [null],
            Quantity: [1],
            ClientForeignKey: [0]
        });
    };
    ClientesDetailComponent.prototype.editClient = function () {
        var _this = this;
        this.clientService.updateClient(this.client.id, this.client).subscribe(function (next) {
            _this.alertify.success('Cliente alterado com sucesso');
            _this.clientForm.reset(_this.client);
            _this.editEnable = !_this.editEnable;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ClientesDetailComponent.prototype.enableEdit = function () {
        var _this = this;
        this.clientService.getClient(this.client.id).subscribe(function (client) {
            _this.clientForm.reset(client);
        });
        this.editEnable = !this.editEnable;
    };
    ClientesDetailComponent.prototype.deleteClient = function () {
        var _this = this;
        this.clientService.deleteClient(this.client).subscribe(function (next) {
            _this.alertify.success('Cliente removido com sucesso');
            _this.router.navigate(['/clientes']);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ClientesDetailComponent.prototype.addPay = function (method) {
        var _this = this;
        if (this.payForm.valid) {
            this.modelPay = Object.assign({}, this.payForm.value);
            this.modelPay.Method = method;
            if (this.modelPay.Notes == null) {
                this.modelPay.Notes = '';
            }
            this.modelPay.ClientForeignKey = this.client.id;
            this.clientService.addPayment(this.modelPay).subscribe(function (next) {
                _this.alertify.success('Registro salvo com sucesso!');
                _this.payForm.reset();
                _this.payForm.get('Quantity').setValue(1);
                _this.getPayments(_this.model.id);
                _this.payForm.get('TS').setValue(_this.dateString);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    ClientesDetailComponent.prototype.getPayments = function (clientId) {
        var _this = this;
        this.clientService.getPayments(clientId).subscribe(function (payList) {
            _this.paymentList = payList;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ClientesDetailComponent.prototype.getTotal = function () {
        if (this.paymentList != null) {
            var total = 0;
            for (var i = 0; i < this.paymentList.length; i++) {
                var product = this.paymentList[i];
                if (product.method === 'Comprou') {
                    total += product.value * product.quantity;
                }
                if (product.method === 'Pagou') {
                    total -= product.value * product.quantity;
                }
                return total;
            }
            return 0;
        }
    };
    ClientesDetailComponent.prototype.getTotalBuy = function () {
        if (this.paymentList != null) {
            var total = 0;
            for (var i = 0; i < this.paymentList.length; i++) {
                var product = this.paymentList[i];
                if (product.method === 'Comprou') {
                    total += product.value * product.quantity;
                }
            }
            return total;
        }
        return 0;
    };
    ClientesDetailComponent.prototype.getTotalSell = function () {
        if (this.paymentList != null) {
            var total = 0;
            for (var i = 0; i < this.paymentList.length; i++) {
                var product = this.paymentList[i];
                if (product.method === 'Pagou') {
                    total += product.value * product.quantity;
                }
            }
            return total;
        }
        return 0;
    };
    ClientesDetailComponent.prototype.deletePayment = function (p) {
        var _this = this;
        if (window.confirm('Deseja mesmo remover ?')) {
            this.clientService.deletePayment(p).subscribe(function (next) {
                _this.alertify.success('Registro removido com sucesso');
                _this.getPayments(_this.model.id);
            }, function (error) {
                _this.alertify.error(error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('clientForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* NgForm */])
    ], ClientesDetailComponent.prototype, "clientForm", void 0);
    ClientesDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientes-detail',
            template: __webpack_require__("./src/app/clientes/clientes-detail/clientes-detail.component.html"),
            styles: [__webpack_require__("./src/app/clientes/clientes-detail/clientes-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], ClientesDetailComponent);
    return ClientesDetailComponent;
}());



/***/ }),

/***/ "./src/app/clientes/clientes.component.css":
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td, \r\n.table > tbody > tr > th {\r\n    border-top-color:pink;\r\n}\r\ntable tr:hover {\r\n    background-color:pink;\r\n}"

/***/ }),

/***/ "./src/app/clientes/clientes.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <div class=\"form-group float-label-control\">\n            <input class=\"text-danger\" type=\"text\" id=\"searchTextId\"\n              [(ngModel)]=\"searchText\" name=\"searchText\" placeholder=\"Procure por nome\">\n          </div>\n        </div>\n        <table class=\"table table-hover\" id=\"dev-table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Nome</th>\n              <th>Sobrenome</th>\n              <th>Local</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let c of ( clients | seachByClient: searchText)\"\n              style=\"display: table-row;\" [routerLink]=\"['/clientes/',c.id]\">\n              <td><i class=\"fa fa-address-book\"></i></td>\n              <td>{{c.name}}</td>\n              <td>{{c.lastName}}</td>\n              <td>{{c.place}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n      <div class=\"col-sm-6\">\n        <div class=\"col-md-8 order-md-1\">\n          <h4 class=\"mb-3\">Cadastro</h4>\n          <form class=\"needs-validation\" #clientForm=\"ngForm\" novalidate=\"\" (ngSubmit)=\"registerClient()\">\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"name\">Nome</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\"\n                  placeholder=\"\"\n                  value=\"\" required=\"\" required name=\"name\" [(ngModel)]=\"model.name\">\n                <div class=\"invalid-feedback\">\n                  Nome é obrigatório !\n                </div>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"lastName\">Sobrenome/Apelido</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\"\n                  placeholder=\"\"\n                  value=\"\" required=\"\" required name=\"lastName\" [(ngModel)]=\"model.lastName\">\n                <div class=\"invalid-feedback\">\n                  Sobrenome/Apelido é obrigatório !\n                </div>\n              </div>\n            </div>\n\n            <div class=\"mb-3\">\n              <label for=\"email\">Email <span class=\"text-muted\">(Opcional)</span></label>\n              <input type=\"email\" class=\"form-control\" id=\"email\"\n                placeholder=\"joao@email.com\" name=\"email\" [(ngModel)]=\"model.email\">\n              <div class=\"invalid-feedback\">\n                Por favor coloque um e-mail válido !\n              </div>\n            </div>\n\n            <div class=\"mb-3\">\n              <label for=\"place\">Local</label>\n              <input type=\"text\" class=\"form-control\" id=\"place\"\n                placeholder=\"\"\n                required=\"\" required name=\"place\" [(ngModel)]=\"model.place\">\n              <div class=\"invalid-feedback\">\n                Por favor informe o local do cliente !\n              </div>\n            </div>\n\n            <div class=\"mb-3\">\n              <label for=\"phone\">Telefone</label>\n              <input type=\"text\" class=\"form-control\" id=\"phone\"\n                placeholder=\"\"\n                required=\"\" required name=\"phone\" [(ngModel)]=\"model.phone\">\n              <div class=\"invalid-feedback\">\n                Por favor o telefone !\n              </div>\n            </div>\n\n            <hr class=\"mb-4\">\n            <button class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!clientForm.valid\" type=\"submit\">Adicionar</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/clientes/clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("./src/app/_services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(clientService, alertify) {
        this.clientService = clientService;
        this.alertify = alertify;
        this.model = {};
        this.searchText = '';
    }
    ClientesComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    ClientesComponent.prototype.loadClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) {
            _this.clients = clients;
            console.log(_this.clients);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ClientesComponent.prototype.registerClient = function () {
        var _this = this;
        this.clientService.registerClient(this.model).subscribe(function () {
            _this.alertify.success('Cliente Cadastrado !');
            _this.loadClients();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientes',
            template: __webpack_require__("./src/app/clientes/clientes.component.html"),
            styles: [__webpack_require__("./src/app/clientes/clientes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/delete-modal/delete-modal.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete-modal/delete-modal.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n\t.customBtn {\r\n\t\tbackground: #e2e2e2;\r\n\t}\r\n\t\r\n\t.customBtn .glyphicon-trash {\r\n\t\tcolor: red;\r\n\t}\r\n</style>\r\n<div class=\"modal fade\" id=\"delete_category{{pk}}\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header modal_header_color\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Delete</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row margin_both\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"row form-group text-center\">\r\n\t\t\t\t\t\t\t<span>Are you sure you want to Delete !</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row form-group\">\r\n\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)='DeleteFunction()' data-dismiss=\"modal\">Delete</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<button class=\"btn customBtn\" data-toggle=\"modal\" attr.data-target=\"#delete_category{{pk}}\" *ngIf='!lg'>\r\n\t<span class=\"glyphicon glyphicon-trash\"></span>\r\n</button>\r\n\r\n<!--<button class=\"btn btn-primary btn-lg hidden-xs\" *ngIf='lg' data-toggle=\"modal\" attr.data-target=\"#delete_category{{pk}}\">Delete</button>-->"

/***/ }),

/***/ "./src/app/delete-modal/delete-modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteComponent = /** @class */ (function () {
    function DeleteComponent() {
        this.deleteFun = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.lg = false;
        this.name = 'Pardeep Jain';
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent.prototype.DeleteFunction = function () {
        this.deleteFun.emit('emit');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DeleteComponent.prototype, "deleteFun", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DeleteComponent.prototype, "pk", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DeleteComponent.prototype, "lg", void 0);
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete-modal',
            template: __webpack_require__("./src/app/delete-modal/delete-modal.html"),
            styles: [__webpack_require__("./src/app/delete-modal/delete-modal.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- home page html -->\n\n<div *ngIf=\"!registerMode\" class=\"text-center\">\n  <h1>\n    Marlene Modas - controle de vendas\n  </h1>\n\n  <p class=\"lead\">\n    Registre uma conta para controlar suas vendas !\n  </p>\n\n  <div class=\"text-center\">\n    <button\n      class=\"btn btn-primary btn-lg\"\n      (click)=\"registerToggle()\"\n    >Registro</button>\n\n    <button class=\"btn btn-info btn-lg\">Saiba Mais...</button>\n  </div>\n</div>\n\n<div\n  *ngIf=\"registerMode\"\n  class=\"container\"\n>\n  <div class=\"text-center col-md-10\">\n    <app-register (registerEvent)=\"cancelRegister($event)\"></app-register>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegister = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n  <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n  <h1 class=\"h3 mb-3 font-weight-normal\">Por favor, Logue</h1>\n  <label for=\"inputEmail\" class=\"sr-only\">Email</label>\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n  <div class=\"checkbox mb-3\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Lembrar Login\n    </label>\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n  <p class=\"mt-5 mb-3 text-muted\">© 2017-2018</p>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown-menu li {\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-toggle {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark m-4\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >MM App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"  aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarsExampleDefault\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExampleDefault\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/clientes']\" routerLinkActive=\"router-link-active\">Clientes <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"['/vendas']\" routerLinkActive=\"router-link-active\">Vendas <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li> -->\n        <ul class=\"navbar-nav ml-auto\">\n        <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\n          <div >\n            <input type=\"text\" placeholder=\"Usuario\" class=\"form-control mr-sm-2\" required name=\"username\" [(ngModel)]=\"model.username\" >\n          </div>\n          <div>\n            <input type=\"password\" placeholder=\"Senha\" class=\"form-control mr-sm-2\" required name=\"password\"  [(ngModel)]=\"model.password\" >\n          </div>\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\n        </form>\n      </ul>\n      <ul *ngIf=\"loggedIn()\" class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item dropdown\" dropdown>\n          <a class=\"nav-link dropdown-toggle\" dropdownToggle>\n            Ola' {{authService.decodedToken?.unique_name | titlecase}}\n          </a>\n          <ul class=\"dropdown-menu\" *dropdownMenu >\n            <li><a class=\"dropdown-item\" (click)=\"logOut()\" ><i class=\"fa fa-sign-out\"></i> Logout</a></li>\n          </ul>\n        </li>\n       </ul>\n        <!-- <li class=\"nav-item dropdown\" *ngIf=\"loggedIn()\" >\n          <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li> -->\n    </div>\n  </nav>\n  \n<!-- <nav class=\"navbar navbar-expand-md\" style=\"background:pink;\">\n  <div class=\"container\">\n     <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >MM App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      \n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"loggedIn()\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/clientes']\" routerLinkActive=\"router-link-active\" >Clientes</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/vendas']\" routerLinkActive=\"router-link-active\" >Vendas</a></li>\n      </ul>\n\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"navbar-form navbar-right\" (ngSubmit)=\"login()\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Email\" class=\"form-control\" required name=\"username\" [(ngModel)]=\"model.username\" >\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\" required name=\"password\"  [(ngModel)]=\"model.password\" >\n        </div>\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\n      </form>\n\n     <ul *ngIf=\"loggedIn()\" class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\" dropdown>\n        <a class=\"dropdown-toggle\" dropdownToggle>\n          Welcome {{authService.decodedToken?.unique_name | titlecase}}\n        </a>\n        <ul class=\"dropdown-menu\" *dropdownMenu >\n          <li><a href=\"#\" (click)=\"logOut()\" ><i class=\"fa fa-sign-out\"></i> Logout</a></li>\n        </ul>\n      </li>\n     </ul>\n    </div>\n  </div>\n</nav> -->\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
        this.isCollapsed = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.alertify.success('Login realizado com sucesso');
        }, function (error) {
            _this.alertify.error('Erro ao logar');
        }, function () {
            _this.router.navigate(['/clientes']);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        this.authService.userToken = null;
        this.router.navigate(['/home']);
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- register page html -->\n\n<form class=\"text-center\" #registerForm=\"ngForm\" (ngSubmit)=\"register()\">\n\n  <h2 class=\"text-center text-primary\">Registro</h2>\n\n  <hr>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=\"username\" required [(ngModel)]=\"model.username\" placeholder=\"Usuario\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" name=\"password\" required [(ngModel)]=\"model.password\" placeholder=\"Senha\">\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" type=\"submit\">Registro</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\" >Cancelar</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.model = {};
        this.registerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.model).subscribe(function () {
            _this.alertify.success('Usuario Registrado !');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.registerEvent.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "registerEvent", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendas_vendas_component__ = __webpack_require__("./src/app/vendas/vendas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_clientes_component__ = __webpack_require__("./src/app/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clientes_clientes_detail_clientes_detail_component__ = __webpack_require__("./src/app/clientes/clientes-detail/clientes-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolvers_clients_detail_resolver__ = __webpack_require__("./src/app/_resolvers/clients-detail-resolver.ts");






var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'vendas', component: __WEBPACK_IMPORTED_MODULE_1__vendas_vendas_component__["a" /* VendasComponent */] },
            { path: 'clientes', component: __WEBPACK_IMPORTED_MODULE_2__clientes_clientes_component__["a" /* ClientesComponent */] },
            { path: 'clientes/:id', component: __WEBPACK_IMPORTED_MODULE_4__clientes_clientes_detail_clientes_detail_component__["a" /* ClientesDetailComponent */], resolve: { client: __WEBPACK_IMPORTED_MODULE_5__resolvers_clients_detail_resolver__["a" /* ClientDetailResolver */], model: __WEBPACK_IMPORTED_MODULE_5__resolvers_clients_detail_resolver__["a" /* ClientDetailResolver */] } }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/vendas/vendas.component.css":
/***/ (function(module, exports) {

module.exports = ".positive {\r\n    background-color: rgb(221, 255, 221);\r\n}\r\n\r\n.negative {\r\n    background-color: rgb(255, 218, 218);\r\n}"

/***/ }),

/***/ "./src/app/vendas/vendas.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header class=\"text-center\">\n<h3 class=\"m-2\">Total Vendido : {{totalBuy | setDecimal:2}} </h3>\n<h3 class=\"m-2\">Total Pago : {{totalPay | setDecimal:2}} </h3>\n<h3 class=\"m-2\">A receber : {{totalBuy - totalPay | setDecimal:2}} </h3>\n</header>\n<table class=\"table table-hover\" id=\"bi-table\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Cliente</th>\n        <th>Metodo</th>\n        <th>Valor</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let p of biTotals\"\n        style=\"display: table-row;\" [ngClass]=\"{'positive' : p?.method == 'Comprou', 'negative' : p?.method == 'Pagou'}\">  \n        <td style=\"width:20px;\"><i class=\"fa fa-cart-arrow-down\"></i></td>\n        <td>{{p?.clientName}}</td>  \n        <td>{{p?.method}}</td>\n        <td>{{p?.value }}</td>\n      </tr>\n      <!-- <tr>\n        <td></td>\n        <td style=\"background: lightgreen;color:black\">Comprou: {{getTotalBuy() | setDecimal:2 }}</td>\n        <td style=\"background: rgb(247, 99, 99);color:black\">Pagou: {{getTotalSell() | setDecimal:2 }}</td>\n        <td style=\"background: rgb(137, 137, 243);color:black\">Saldo Devedor: {{getTotalBuy() - getTotalSell() | setDecimal:2 }}</td>\n        <td></td>\n      </tr> -->\n    </tbody>\n  </table>\n\n"

/***/ }),

/***/ "./src/app/vendas/vendas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("./src/app/_services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("./src/app/_services/alertify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendasComponent = /** @class */ (function () {
    function VendasComponent(clientService, alertify) {
        this.clientService = clientService;
        this.alertify = alertify;
        this.totalBuy = 0;
        this.totalPay = 0;
    }
    VendasComponent.prototype.ngOnInit = function () {
        this.loadTotals();
    };
    VendasComponent.prototype.loadTotals = function () {
        var _this = this;
        this.clientService.getBITotals().subscribe(function (biTotals) {
            biTotals.forEach(function (b) {
                if (b.method === 'Comprou') {
                    _this.totalBuy += b.value;
                    console.log(_this.totalBuy);
                }
                else {
                    _this.totalPay += b.value;
                    console.log(_this.totalPay);
                }
            });
            _this.biTotals = biTotals;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    VendasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vendas',
            template: __webpack_require__("./src/app/vendas/vendas.component.html"),
            styles: [__webpack_require__("./src/app/vendas/vendas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */]])
    ], VendasComponent);
    return VendasComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map