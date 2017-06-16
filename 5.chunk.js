webpackJsonp([5,16],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_map__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_circle__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_info_window__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_marker__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_polygon__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_polyline__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polyline_point__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_kml_layer__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_data_layer__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_maps_api_loader__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_browser_globals__ = __webpack_require__(985);
/* unused harmony export coreDirectives */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCoreModule; });














/**
 * @internal
 */
function coreDirectives() {
    return [
        __WEBPACK_IMPORTED_MODULE_1__directives_map__["a" /* AgmMap */], __WEBPACK_IMPORTED_MODULE_4__directives_marker__["a" /* AgmMarker */], __WEBPACK_IMPORTED_MODULE_3__directives_info_window__["a" /* AgmInfoWindow */], __WEBPACK_IMPORTED_MODULE_2__directives_circle__["a" /* AgmCircle */],
        __WEBPACK_IMPORTED_MODULE_5__directives_polygon__["a" /* AgmPolygon */], __WEBPACK_IMPORTED_MODULE_6__directives_polyline__["a" /* AgmPolyline */], __WEBPACK_IMPORTED_MODULE_7__directives_polyline_point__["a" /* AgmPolylinePoint */], __WEBPACK_IMPORTED_MODULE_8__directives_kml_layer__["a" /* AgmKmlLayer */],
        __WEBPACK_IMPORTED_MODULE_9__directives_data_layer__["a" /* AgmDataLayer */]
    ];
}
;
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: __WEBPACK_IMPORTED_MODULE_12__utils_browser_globals__["a" /* BROWSER_GLOBALS_PROVIDERS */].concat([
                { provide: __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], useClass: __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__["a" /* LazyMapsAPILoader */] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__["b" /* LAZY_MAPS_API_CONFIG */], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    return AgmCoreModule;
}());

AgmCoreModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
];
/** @nocollapse */
AgmCoreModule.ctorParameters = function () { return []; };
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_map__ = __webpack_require__(981);
/* unused harmony reexport AgmMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_circle__ = __webpack_require__(978);
/* unused harmony reexport AgmCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_info_window__ = __webpack_require__(947);
/* unused harmony reexport AgmInfoWindow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_kml_layer__ = __webpack_require__(980);
/* unused harmony reexport AgmKmlLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_data_layer__ = __webpack_require__(979);
/* unused harmony reexport AgmDataLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_marker__ = __webpack_require__(982);
/* unused harmony reexport AgmMarker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_polygon__ = __webpack_require__(983);
/* unused harmony reexport AgmPolygon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polyline__ = __webpack_require__(984);
/* unused harmony reexport AgmPolyline */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_polyline_point__ = __webpack_require__(948);
/* unused harmony reexport AgmPolylinePoint */









//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(1026);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(1028);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_module__ = __webpack_require__(1025);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__core_module__["a"]; });
// main modules


// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_google_maps_api_wrapper__ = __webpack_require__(926);
/* unused harmony reexport GoogleMapsAPIWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__(949);
/* unused harmony reexport CircleManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_info_window_manager__ = __webpack_require__(951);
/* unused harmony reexport InfoWindowManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_marker_manager__ = __webpack_require__(940);
/* unused harmony reexport MarkerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_polygon_manager__ = __webpack_require__(953);
/* unused harmony reexport PolygonManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_polyline_manager__ = __webpack_require__(954);
/* unused harmony reexport PolylineManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_kml_layer_manager__ = __webpack_require__(952);
/* unused harmony reexport KmlLayerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_data_layer_manager__ = __webpack_require__(950);
/* unused harmony reexport DataLayerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__(955);
/* unused harmony reexport GoogleMapsScriptProtocol */
/* unused harmony reexport LAZY_MAPS_API_CONFIG */
/* unused harmony reexport LazyMapsAPILoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_maps_api_loader_maps_api_loader__ = __webpack_require__(941);
/* unused harmony reexport MapsAPILoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_noop_maps_api_loader__ = __webpack_require__(1029);
/* unused harmony reexport NoOpMapsAPILoader */











//# sourceMappingURL=services.js.map

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NoOpMapsAPILoader */
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    ;
    return NoOpMapsAPILoader;
}());

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsComponent = (function () {
    function WidgetsComponent(colors) {
        this.colors = colors;
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        this.sparkOptions1 = {
            barColor: this.colors.byName('primary'),
            height: 20,
            barWidth: 3,
            barSpacing: 2
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: '#dddddd',
            spotColor: '#bbbbbb',
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.sparkOptions3 = {
            barColor: '#fff',
            height: 50,
            barWidth: 6,
            barSpacing: 6
        };
        this.sparkOptions4 = {
            barColor: this.colors.byName('primary'),
            height: 30,
            barWidth: 6,
            barSpacing: 6
        };
    }
    WidgetsComponent.prototype.ngOnInit = function () {
    };
    return WidgetsComponent;
}());
WidgetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widgets',
        template: __webpack_require__(1612),
        styles: [__webpack_require__(1518)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object])
], WidgetsComponent);

var _a;
//# sourceMappingURL=widgets.component.js.map

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1612:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Widgets</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"text-right text-muted\">\r\n                    <em class=\"fa fa-gamepad fa-2x\"></em>\r\n                </div>\r\n                <h3 class=\"mt0\">99.999</h3>\r\n                <p class=\"text-muted\">Games played last month</p>\r\n                <div class=\"progress progress-striped progress-xs\">\r\n                    <div class=\"progress-bar progress-bar-warning progress-60\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"70\">\r\n                        <span class=\"sr-only\">60% Complete</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"text-right text-muted\">\r\n                    <em class=\"fa fa-coffee fa-2x\"></em>\r\n                </div>\r\n                <h3 class=\"mt0\">300</h3>\r\n                <p class=\"text-muted\">Coffee cups per day</p>\r\n                <div class=\"progress progress-striped progress-xs\">\r\n                    <div class=\"progress-bar progress-bar-green progress-80\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">80% Complete</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"text-right text-muted\">\r\n                    <em class=\"fa fa-upload fa-2x\"></em>\r\n                </div>\r\n                <h3 class=\"mt0\">1000 Gb</h3>\r\n                <p class=\"text-muted\">Average Monthly Uploads</p>\r\n                <div class=\"progress progress-striped progress-xs\">\r\n                    <div class=\"progress-bar progress-bar-info progress-40\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">40% Complete</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 bb br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-info\">\r\n                            <em class=\"fa fa-users fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">10k</h4>\r\n                                <p class=\"mb0 text-muted\">VISITORS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 bb\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-danger\">\r\n                            <em class=\"fa fa-music fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">100%</h4>\r\n                                <p class=\"mb0 text-muted\">VOLUME</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-inverse\">\r\n                            <em class=\"fa fa-code-fork fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">150</h4>\r\n                                <p class=\"mb0 text-muted\">FORKS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-success\">\r\n                            <em class=\"fa fa-inbox fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">10</h4>\r\n                                <p class=\"mb0 text-muted\">NEW MESSAGES</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 bb br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-info\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\"  values=\"5,9,4,1,3,4,7,5\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">10k</h4>\r\n                                <p class=\"mb0 text-muted\">VISITORS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 bb\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-danger\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,2,3,4,5,6,7,8,9\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">100%</h4>\r\n                                <p class=\"mb0 text-muted\">CONVERSIONS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-inverse\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,0,4,9,5,7,8,4,7\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">150</h4>\r\n                                <p class=\"mb0 text-muted\">RETURNS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-success\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,5,2,2,8,4,4,8\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">10</h4>\r\n                                <p class=\"mb0 text-muted\">UNIQUES</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"half-float\">\r\n                <img class=\"img-responsive\" src=\"assets/img/bg3.jpg\" alt=\"\" />\r\n                <div class=\"half-float-bottom\">\r\n                    <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/09.jpg\" alt=\"Image\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body text-center\">\r\n                <h3 class=\"m0\">Ted Berry</h3>\r\n                <p class=\"text-muted\">Lead director</p>\r\n                <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>\r\n            </div>\r\n            <div class=\"panel-body text-center bg-gray-dark\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">400</h3>\r\n                        <p class=\"m0\">Photos</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">2000</h3>\r\n                        <p class=\"m0\">Likes</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">500</h3>\r\n                        <p class=\"m0\">Following</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body text-center bg-center\" style=\"background-image: url('assets/img/bg4.jpg')\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-12 text-white\">\r\n                        <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/06.jpg\" alt=\"Image\" />\r\n                        <h3 class=\"m0\">Chris</h3>\r\n                        <p class=\"m0\">\r\n                            <em class=\"fa fa-twitter fa-fw\"></em>@chris</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body text-center bg-gray-darker\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-4\">\r\n                        <a class=\"text-white\" href=\"#\">\r\n                            <em class=\"fa fa-twitter fa-2x\"></em>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <a class=\"text-white\" href=\"#\">\r\n                            <em class=\"fa fa-facebook fa-2x\"></em>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <a class=\"text-white\" href=\"#\">\r\n                            <em class=\"fa fa-comments fa-2x\"></em>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"list-group\">\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <span class=\"label label-primary pull-right\">15</span>\r\n                    <em class=\"fa fa-fw fa-clock-o text-muted\"></em>Recent Activity</a>\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <span class=\"label label-primary pull-right\">100</span>\r\n                    <em class=\"fa fa-fw fa-user text-muted\"></em>Following</a>\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <span class=\"label label-primary pull-right\">300</span>\r\n                    <em class=\"fa fa-fw fa-folder-open-o text-muted\"></em>Photos</a>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-success\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-success-dark pv-lg\">\r\n                    <em class=\"icon-share fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h1 m0 text-bold\">150</div>\r\n                    <div class=\"text-uppercase\">New connections</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-danger\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-danger-dark pv-lg\">\r\n                    <em class=\"icon-star fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h1 m0 text-bold\">7000</div>\r\n                    <div class=\"text-uppercase\">Ratings received</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget bg-warning\">\r\n            <div class=\"row row-table\">\r\n                <div class=\"col-xs-4 text-center bg-warning-dark pv-lg\">\r\n                    <em class=\"icon-trophy fa-3x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8 pv-lg\">\r\n                    <div class=\"h1 m0 text-bold\">10</div>\r\n                    <div class=\"text-uppercase\">Achievements</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body bg-success\">\r\n                <div class=\"h5 mt0\">Received all time</div>\r\n                <!-- Line chart-->\r\n                <div [sparkline]=\"sparkOptions2\" values=\"1,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\r\n                <!-- Bar chart-->\r\n                <div class=\"text-center\">\r\n                    <div [sparkline]=\"sparkOptions3\" values=\"1,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body bg-inverse\">\r\n                <div class=\"row row-table text-center\">\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">15080</p>\r\n                        <p class=\"m0 text-muted\">Shots</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">12000</p>\r\n                        <p class=\"m0 text-muted\">Likes</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">5100</p>\r\n                        <p class=\"m0 text-muted\">Comments</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body bg-primary\">\r\n                <div class=\"h5 mt0\">Monthly incomes</div>\r\n                <!-- Line chart-->\r\n                <div [sparkline]=\"sparkOptions2\" values=\"1,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\r\n            </div>\r\n            <div class=\"panel-body bg-inverse\">\r\n                <div class=\"row text-center\">\r\n                    <div class=\"col-xs-6\">\r\n                        <!-- Bar chart-->\r\n                        <div [sparkline]=\"sparkOptions4\"  values=\"1,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <h4 class=\"m0\">+150</h4>\r\n                        <p class=\"m0 text-muted\">\r\n                            <small>From last month</small>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row row-table text-center\">\r\n                    <div class=\"col-xs-6\">\r\n                        <p class=\"m0 text-muted\">Gross income</p>\r\n                        <h4 class=\"m0\">12000</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <p class=\"m0 text-muted\">Net income</p>\r\n                        <h4 class=\"m0\">5100</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-8\">\r\n                    <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"\" />\r\n                </div>\r\n                <div class=\"col-xs-4 align-middle bg-info\">\r\n                    <div class=\"text-center\">\r\n                        <div class=\"text-lg mt0\">11&deg;</div>\r\n                        <p>Cold</p>\r\n                        <em class=\"fa fa-sun-o fa-2x\"></em>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-info text-center\">\r\n                    <em class=\"fa fa-users fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">10k</h4>\r\n                        <p class=\"mb0 text-muted\">VISITORS</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-danger text-center\">\r\n                    <em class=\"fa fa-music fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">100%</h4>\r\n                        <p class=\"mb0 text-muted\">VOLUME</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-inverse text-center\">\r\n                    <em class=\"fa fa-code-fork fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">150</h4>\r\n                        <p class=\"mb0 text-muted\">FORKS</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-green text-center\">\r\n                    <em class=\"fa fa-inbox fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">10</h4>\r\n                        <p class=\"mb0 text-muted\">NEW MESSAGES</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-5\">\r\n                    <picture class=\"lateral-picture\">\r\n                        <img src=\"assets/img/bg2.jpg\" alt=\"\" />\r\n                    </picture>\r\n                </div>\r\n                <div class=\"col-xs-7 align-middle p-lg\">\r\n                    <div class=\"pull-right\"><a class=\"btn btn-primary btn-sm\" href=\"#\">Register</a>\r\n                    </div>\r\n                    <p>\r\n                        <span class=\"text-lg\">16</span>Aug</p>\r\n                    <p>\r\n                        <strong>EVENT INVITATION</strong>\r\n                    </p>\r\n                    <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body bg-danger text-center\">\r\n                <div class=\"clearfix\">\r\n                    <div class=\"pull-left\">200 Following</div>\r\n                    <div class=\"pull-right\">150 Followers</div>\r\n                </div>\r\n                <img class=\"img-thumbnail img-circle thumb96\" src=\"assets/img/user/06.jpg\" alt=\"Image\" />\r\n                <h4 class=\"mt0\">Lois Berry</h4>\r\n                <p class=\"m0\">\r\n                    <em class=\"fa fa-fw fa-map-marker\"></em>San Francisco, California</p>\r\n                <div class=\"clearfix\">\r\n                    <div class=\"pull-left\">15k Likes</div>\r\n                    <div class=\"pull-right\">100 Feeds</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n            </agm-map>\r\n            <div class=\"panel-body bg-inverse\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-6\">\r\n                        <div class=\"h2 m0\">Find Us!</div>\r\n                    </div>\r\n                    <div class=\"col-xs-1\">\r\n                        <em class=\"fa fa-map-marker fa-3x\"></em>\r\n                    </div>\r\n                    <div class=\"col-xs-5\">\r\n                        <p class=\"m0\">Street 123</p>\r\n                        <p class=\"m0\">Location, Unknow</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"Image\" />\r\n            <div class=\"panel-body\">\r\n                <div class=\"row row-table text-center\">\r\n                    <div class=\"col-xs-4\">\r\n                        <p>Comments</p>\r\n                        <h3 class=\"m0 text-primary\">700</h3>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p>Likes</p>\r\n                        <h3 class=\"m0 text-primary\">1500</h3>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p>Shots</p>\r\n                        <h3 class=\"m0 text-primary\">300</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-6 text-center\">\r\n                        <img class=\"img-circle thumb96\" src=\"assets/img/user/09.jpg\" alt=\"Image\" />\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <h3 class=\"mt0\">Peggy Peters</h3>\r\n                        <ul class=\"list-unstyled\">\r\n                            <li class=\"mb-sm\">\r\n                                <em class=\"fa fa-map-marker fa-fw\"></em>ASD, Qwerty</li>\r\n                            <li class=\"mb-sm\">\r\n                                <em class=\"fa fa-twitter fa-fw\"></em>@asdasd</li>\r\n                            <li class=\"mb-sm\">\r\n                                <em class=\"fa fa-envelope fa-fw\"></em>asdasd@mail.com</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body bg-inverse\">\r\n                <div class=\"row row-table text-center\">\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">700</p>\r\n                        <p class=\"m0 text-muted\">Followers</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">1500</p>\r\n                        <p class=\"m0 text-muted\">Following</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">510</p>\r\n                        <p class=\"m0 text-muted\">Loved</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-6 text-center\">\r\n                        <img class=\"img-thumbnail img-circle img-responsive thumb96\" src=\"assets/img/user/06.jpg\" alt=\"Image\" />\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <div class=\"pull-right\"><a class=\"btn btn-success\" href=\"#\">Follow</a>\r\n                        </div>\r\n                        <h3 class=\"mt0\">Sarah Pierce</h3>\r\n                        <p class=\"text-muted\">150 Following / 100 Followers</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <!-- START widget-->\r\n                <div class=\"panel widget\">\r\n                    <div class=\"panel-body bg-info text-center\">\r\n                        <div class=\"text-lg m0\">300</div>\r\n                        <p>Re-Tweets</p>\r\n                        <div class=\"mb-lg\"></div>\r\n                        <em class=\"fa fa-twitter text-alpha\"></em>\r\n                    </div>\r\n                </div>\r\n                <!-- END widget-->\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <!-- START widget-->\r\n                <div class=\"panel widget\">\r\n                    <div class=\"panel-body bg-primary text-center\">\r\n                        <div class=\"text-lg m0\">12&deg;</div>\r\n                        <p>Bariloche</p>\r\n                        <div class=\"mb-lg\"></div>\r\n                        <em class=\"fa fa-sun-o\"></em>\r\n                    </div>\r\n                </div>\r\n                <!-- END widget-->\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <!-- START widget-->\r\n                <div class=\"panel widget\">\r\n                    <div class=\"panel-body bg-danger text-center\">\r\n                        <div class=\"radial-bar radial-bar-40 radial-bar radial-bar-danger m0\">\r\n                            <img src=\"assets/img/user/03.jpg\" alt=\"\" />\r\n                        </div>\r\n                        <p>\r\n                            <strong>40%</strong>\r\n                            <span>complete</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <!-- END widget-->\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <!-- START widget-->\r\n                <div class=\"panel widget\">\r\n                    <div class=\"panel-body bg-purple text-center\">\r\n                        <p>\r\n                            <img class=\"img-rounded thumb80\" src=\"assets/img/user/08.jpg\" alt=\"\" />\r\n                        </p>\r\n                        <p>\r\n                            <strong>Mika</strong>\r\n                            <span>is now following you</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <!-- END widget-->\r\n            </div>\r\n        </div>\r\n        <div class=\"row\"></div>\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-3 text-center\">\r\n                        <img class=\"img-thumbnail img-circle img-responsive thumb64\" src=\"assets/img/user/06.jpg\" alt=\"Image\" />\r\n                    </div>\r\n                    <div class=\"col-xs-5 text-center\">\r\n                        <h3 class=\"m0\">Sylvia Morris</h3>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <a class=\"btn btn-purple\" href=\"#\">\r\n                            <em class=\"fa fa-hand-o-right\"></em>\r\n                            <span>Touch</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3 col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                        <em class=\"fa fa-comments fa-5x\"></em>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                        <div class=\"text-lg\">26</div>\r\n                        <p class=\"m0\">New Comments!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"panel-footer bg-gray-dark bt0 clearfix btn-block\" href=\"#\">\r\n                <span class=\"pull-left\">View Details</span>\r\n                <span class=\"pull-right\">\r\n               <em class=\"fa fa-chevron-circle-right\"></em>\r\n            </span>\r\n            </a>\r\n            <!-- END panel-->\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-green\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                        <em class=\"fa fa-tasks fa-5x\"></em>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                        <div class=\"text-lg\">12</div>\r\n                        <p class=\"m0\">New Tasks!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"panel-footer bg-gray-dark bt0 clearfix btn-block\" href=\"#\">\r\n                <span class=\"pull-left\">View Details</span>\r\n                <span class=\"pull-right\">\r\n               <em class=\"fa fa-chevron-circle-right\"></em>\r\n            </span>\r\n            </a>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-warning\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                        <em class=\"fa fa-shopping-cart fa-5x\"></em>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                        <div class=\"text-lg\">124</div>\r\n                        <p class=\"m0\">New Orders!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"panel-footer bg-gray-dark bt0 clearfix btn-block\" href=\"#\">\r\n                <span class=\"pull-left\">View Details</span>\r\n                <span class=\"pull-right\">\r\n               <em class=\"fa fa-chevron-circle-right\"></em>\r\n            </span>\r\n            </a>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-danger\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                        <em class=\"fa fa-support fa-5x\"></em>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                        <div class=\"text-lg\">13</div>\r\n                        <p class=\"m0\">Support Tickets!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <a class=\"panel-footer bg-gray-dark bt0 clearfix btn-block\" href=\"#\">\r\n                <span class=\"pull-left\">View Details</span>\r\n                <span class=\"pull-right\">\r\n               <em class=\"fa fa-chevron-circle-right\"></em>\r\n            </span>\r\n            </a>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START panel tab-->\r\n<div class=\"panel\">\r\n    <tabset class=\"bg-white p0\" [justified]=\"true\">\r\n        <tab>\r\n            <ng-template tabHeading>\r\n                <em class=\"fa fa-clock-o fa-fw\"></em>Tasks Panel\r\n            </ng-template>\r\n            <div>\r\n                <!-- START list group-->\r\n                <div class=\"list-group mb0\">\r\n                    <a class=\"list-group-item bt0\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">just now</span>\r\n                        <em class=\"fa fa-fw fa-calendar mr\"></em>Calendar updated</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">4 minutes ago</span>\r\n                        <em class=\"fa fa-fw fa-comment mr\"></em>Commented on a post</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">23 minutes ago</span>\r\n                        <em class=\"fa fa-fw fa-truck mr\"></em>Order 392 shipped</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">46 minutes ago</span>\r\n                        <em class=\"fa fa-fw fa-money mr\"></em>Invoice 653 has been paid</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">1 hour ago</span>\r\n                        <em class=\"fa fa-fw fa-user mr\"></em>A new user has been added</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">2 hours ago</span>\r\n                        <em class=\"fa fa-fw fa-check mr\"></em>Completed task: \"pick up dry cleaning\"</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">yesterday</span>\r\n                        <em class=\"fa fa-fw fa-globe mr\"></em>Saved the world</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">two days ago</span>\r\n                        <em class=\"fa fa-fw fa-check mr\"></em>Completed task: \"fix error on sales page\"</a>\r\n                    <a class=\"list-group-item\" href=\"#\">\r\n                        <span class=\"label label-purple pull-right\">two days ago</span>\r\n                        <em class=\"fa fa-fw fa-check mr\"></em>Completed task: \"fix error on sales page\"</a>\r\n                </div>\r\n                <!-- END list group-->\r\n                <div class=\"panel-footer text-right\"><a class=\"btn btn-default btn-sm\" href=\"#\">View All Activity </a>\r\n                </div>\r\n            </div>\r\n        </tab>\r\n        <tab>\r\n            <ng-template tabHeading>\r\n                <em class=\"fa fa-money fa-fw\"></em>Transactions Panel\r\n            </ng-template>\r\n            <div>\r\n                <!-- START table responsive-->\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-hover table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Order #</th>\r\n                                <th>Order Date</th>\r\n                                <th>Order Time</th>\r\n                                <th>Amount (USD)</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>3326</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>3:29 PM</td>\r\n                                <td>$321.33</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3325</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>3:20 PM</td>\r\n                                <td>$234.34</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3324</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>3:03 PM</td>\r\n                                <td>$724.17</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3323</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>3:00 PM</td>\r\n                                <td>$23.71</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3322</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>2:49 PM</td>\r\n                                <td>$8345.23</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3321</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>2:23 PM</td>\r\n                                <td>$245.12</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3320</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>2:15 PM</td>\r\n                                <td>$5663.54</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3319</td>\r\n                                <td>10/21/2013</td>\r\n                                <td>2:13 PM</td>\r\n                                <td>$943.45</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!-- END table responsive-->\r\n                <div class=\"panel-footer text-right\"><a class=\"btn btn-default btn-sm\" href=\"#\">View All Transactions</a>\r\n                </div>\r\n            </div>\r\n        </tab>\r\n    </tabset>\r\n</div>\r\n<!-- END panel tab-->\r\n"

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widgets_widgets_component__ = __webpack_require__(1424);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__widgets_widgets_component__["a" /* WidgetsComponent */] }
];
var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
            })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__widgets_widgets_component__["a" /* WidgetsComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__ = __webpack_require__(941);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsAPIWrapper; });



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._loader.load().then(function () {
            var map = new google.maps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
        if (options === void 0) { options = {}; }
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    return GoogleMapsAPIWrapper;
}());

GoogleMapsAPIWrapper.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
GoogleMapsAPIWrapper.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerManager; });



var MarkerManager = (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return MarkerManager;
}());

MarkerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MarkerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsAPILoader; });

var MapsAPILoader = (function () {
    function MapsAPILoader() {
    }
    return MapsAPILoader;
}());

MapsAPILoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MapsAPILoader.ctorParameters = function () { return []; };
//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__ = __webpack_require__(951);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmInfoWindow; });


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    AgmInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    AgmInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    return AgmInfoWindow;
}());

AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'agm-info-window',
                inputs: ['latitude', 'longitude', 'disableAutoPan', 'isOpen', 'zIndex', 'maxWidth'],
                outputs: ['infoWindowClose'],
                template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmInfoWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__["a" /* InfoWindowManager */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolylinePoint; });

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = (function () {
    function AgmPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    return AgmPolylinePoint;
}());

AgmPolylinePoint.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
];
/** @nocollapse */
AgmPolylinePoint.ctorParameters = function () { return []; };
AgmPolylinePoint.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'positionChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleManager; });



var CircleManager = (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    ;
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    ;
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    ;
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    ;
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    ;
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    ;
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    ;
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    ;
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    ;
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    return CircleManager;
}());

CircleManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
CircleManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLayerManager; });



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    DataLayerManager.prototype.addDataLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            var dataLayer = new google.maps.Data({
                map: m,
                style: layer.style
            });
            if (layer.geoJson) {
                dataLayer.features = dataLayer.addGeoJson(layer.geoJson);
            }
            return dataLayer;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            l.features = l.addGeoJson(geoJson);
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return DataLayerManager;
}());

DataLayerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
DataLayerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marker_manager__ = __webpack_require__(940);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindowManager; });




var InfoWindowManager = (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return InfoWindowManager;
}());

InfoWindowManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
InfoWindowManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], },
    { type: __WEBPACK_IMPORTED_MODULE_3__marker_manager__["a" /* MarkerManager */], },
]; };
//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KmlLayerManager; });



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    KmlLayerManager.prototype.addKmlLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return KmlLayerManager;
}());

KmlLayerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
KmlLayerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonManager; });



var PolygonManager = (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolygonManager;
}());

PolygonManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
PolygonManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolylineManager; });



var PolylineManager = (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolylineManager;
}());

PolylineManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
PolylineManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader__ = __webpack_require__(941);
/* unused harmony export GoogleMapsScriptProtocol */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyMapsAPILoader; });
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



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        var _this = _super.call(this) || this;
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        script.src = this._getScriptSrc(callbackName);
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[callbackName] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    return LazyMapsAPILoader;
}(__WEBPACK_IMPORTED_MODULE_2__maps_api_loader__["a" /* MapsAPILoader */]));

LazyMapsAPILoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
LazyMapsAPILoader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["b" /* WindowRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["c" /* DocumentRef */], },
]; };
//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__(949);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCircle; });


var AgmCircle = (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    AgmCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    AgmCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    return AgmCircle;
}());

AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex'
];
AgmCircle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-circle',
                inputs: [
                    'latitude', 'longitude', 'clickable', 'draggable: circleDraggable', 'editable', 'fillColor',
                    'fillOpacity', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
                    'visible', 'zIndex'
                ],
                outputs: [
                    'centerChange', 'circleClick', 'circleDblClick', 'drag', 'dragEnd', 'dragStart', 'mouseDown',
                    'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'radiusChange', 'rightClick'
                ]
            },] },
];
/** @nocollapse */
AgmCircle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__["a" /* CircleManager */], },
]; };
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__ = __webpack_require__(950);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmDataLayer; });


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmDataLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmDataLayer.prototype.toString = function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmDataLayer._dataOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return dataOptions[k] = changes[k].currentValue; });
        this._manager.setDataOptions(this, dataOptions);
    };
    return AgmDataLayer;
}());

AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-data-layer',
                inputs: ['geoJson', 'style'],
                outputs: ['layerClick']
            },] },
];
/** @nocollapse */
AgmDataLayer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__["a" /* DataLayerManager */], },
]; };
//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__ = __webpack_require__(952);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmKmlLayer; });


var layerId = 0;
var AgmKmlLayer = (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmKmlLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmKmlLayer;
}());

AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-kml-layer',
                inputs: ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'],
                outputs: ['layerClick', 'defaultViewportChange', 'statusChange']
            },] },
];
/** @nocollapse */
AgmKmlLayer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], },
]; };
//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_info_window_manager__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_marker_manager__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_polygon_manager__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_polyline_manager__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_kml_layer_manager__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_managers_data_layer_manager__ = __webpack_require__(950);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMap; });









/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = (function () {
    function AgmMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /** @internal */
    AgmMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleIdleEvent();
    };
    /** @internal */
    AgmMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    AgmMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * Returns a promise that gets resolved after the event was triggered.
     */
    AgmMap.prototype.triggerResize = function () {
        var _this = this;
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () { return _this._mapsWrapper.triggerMapEvent('resize').then(function () { return resolve(); }); });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    return AgmMap;
}());

/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
    'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
    'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
    'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
    'mapTypeId', 'clickableIcons', 'gestureHandling'
];
AgmMap.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'agm-map',
                providers: [
                    __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_4__services_managers_marker_manager__["a" /* MarkerManager */], __WEBPACK_IMPORTED_MODULE_3__services_managers_info_window_manager__["a" /* InfoWindowManager */], __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__["a" /* CircleManager */], __WEBPACK_IMPORTED_MODULE_6__services_managers_polyline_manager__["a" /* PolylineManager */],
                    __WEBPACK_IMPORTED_MODULE_5__services_managers_polygon_manager__["a" /* PolygonManager */], __WEBPACK_IMPORTED_MODULE_7__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], __WEBPACK_IMPORTED_MODULE_8__services_managers_data_layer_manager__["a" /* DataLayerManager */]
                ],
                inputs: [
                    'longitude', 'latitude', 'zoom', 'minZoom', 'maxZoom', 'draggable: mapDraggable',
                    'disableDoubleClickZoom', 'disableDefaultUI', 'scrollwheel', 'backgroundColor', 'draggableCursor',
                    'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'usePanning',
                    'streetViewControl', 'streetViewControlOptions', 'fitBounds', 'mapTypeControl', 'mapTypeControlOptions',
                    'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions',
                    'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling'
                ],
                outputs: [
                    'mapClick', 'mapRightClick', 'mapDblClick', 'centerChange', 'idle', 'boundsChange', 'zoomChange', 'mapReady'
                ],
                host: {
                    // todo: deprecated - we will remove it with the next version
                    '[class.sebm-google-map-container]': 'true'
                },
                styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmMap.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
]; };
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_marker_manager__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_window__ = __webpack_require__(947);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMarker; });



var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @internal
         */
        this.infoWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    AgmMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    AgmMarker.prototype.id = function () { return this._id; };
    /** @internal */
    AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmMarker;
}());

AgmMarker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-marker',
                inputs: [
                    'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                    'openInfoWindow', 'opacity', 'visible', 'zIndex'
                ],
                outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
            },] },
];
/** @nocollapse */
AgmMarker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_marker_manager__["a" /* MarkerManager */], },
]; };
AgmMarker.propDecorators = {
    'infoWindow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__info_window__["a" /* AgmInfoWindow */],] },],
};
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__ = __webpack_require__(953);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolygon; });


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This even is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    AgmPolygon.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolygon;
}());

AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible'
];
AgmPolygon.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-polygon',
                inputs: [
                    'clickable',
                    'draggable: polyDraggable',
                    'editable',
                    'fillColor',
                    'fillOpacity',
                    'geodesic',
                    'paths',
                    'strokeColor',
                    'strokeOpacity',
                    'strokeWeight',
                    'visible',
                    'zIndex',
                ],
                outputs: [
                    'polyClick', 'polyDblClick', 'polyDrag', 'polyDragEnd', 'polyMouseDown', 'polyMouseMove',
                    'polyMouseOut', 'polyMouseOver', 'polyMouseUp', 'polyRightClick'
                ]
            },] },
];
/** @nocollapse */
AgmPolygon.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__["a" /* PolygonManager */], },
]; };
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyline_point__ = __webpack_require__(948);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolyline; });



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmPolyline.prototype._getPoints = function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    AgmPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolyline;
}());

AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex'
];
AgmPolyline.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-polyline',
                inputs: [
                    'clickable', 'draggable: polylineDraggable', 'editable', 'geodesic', 'strokeColor',
                    'strokeWeight', 'strokeOpacity', 'visible', 'zIndex'
                ],
                outputs: [
                    'lineClick', 'lineDblClick', 'lineDrag', 'lineDragEnd', 'lineMouseDown', 'lineMouseMove',
                    'lineMouseOut', 'lineMouseOver', 'lineMouseUp', 'lineRightClick'
                ]
            },] },
];
/** @nocollapse */
AgmPolyline.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__["a" /* PolylineManager */], },
]; };
AgmPolyline.propDecorators = {
    'points': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__polyline_point__["a" /* AgmPolylinePoint */],] },],
};
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map