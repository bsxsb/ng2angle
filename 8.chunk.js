webpackJsonp([8,16],{

/***/ 1356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsComponent = (function () {
    function ChartjsComponent(colors) {
        this.colors = colors;
        // Line chart
        // -----------------------------------
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }, {
                    label: 'My Second dataset',
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }
            ]
        };
        this.lineColors = [
            {
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                pointBackgroundColor: 'rgba(114,102,186,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(114,102,186,1)'
            }, {
                backgroundColor: 'rgba(35,183,229,0.2)',
                borderColor: 'rgba(35,183,229,1)',
                pointBackgroundColor: 'rgba(35,183,229,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(35,183,229,1)'
            }
        ];
        this.lineOptions = {
            animation: false,
            responsive: true
        };
        // Bar chart
        // -----------------------------------
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }, {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }
            ]
        };
        this.barColors = [
            {
                backgroundColor: this.colors.byName('info'),
                borderColor: this.colors.byName('info'),
                pointHoverBackgroundColor: this.colors.byName('info'),
                pointHoverBorderColor: this.colors.byName('info')
            }, {
                backgroundColor: this.colors.byName('primary'),
                borderColor: this.colors.byName('primary'),
                pointHoverBackgroundColor: this.colors.byName('primary'),
                pointHoverBorderColor: this.colors.byName('primary')
            }
        ];
        this.barOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        //  Doughnut chart
        // -----------------------------------
        this.doughnutData = {
            labels: [
                'Purple',
                'Info',
                'Yellow'
            ],
            datasets: [{
                    data: [30, 50, 20]
                }]
        };
        this.doughnutColors = [{
                borderColor: [
                    this.colors.byName('purple'),
                    this.colors.byName('info'),
                    this.colors.byName('yellow')
                ],
                backgroundColor: [
                    this.colors.byName('purple'),
                    this.colors.byName('info'),
                    this.colors.byName('yellow')
                ],
            }];
        this.doughnutOptions = {
            responsive: true
        };
        // Pie chart
        // -----------------------------------
        this.pieData = {
            labels: [
                'Purple',
                'Yellow',
                'Info'
            ],
            datasets: [{
                    data: [30, 40, 30]
                }]
        };
        this.pieColors = [{
                borderColor: [
                    this.colors.byName('info'),
                    this.colors.byName('yellow'),
                    this.colors.byName('purple')
                ],
                backgroundColor: [
                    this.colors.byName('info'),
                    this.colors.byName('yellow'),
                    this.colors.byName('purple')
                ],
            }];
        this.pieOptions = {
            responsive: true
        };
        // Polar chart
        // -----------------------------------
        this.polarData = {
            datasets: [{
                    data: [
                        300,
                        50,
                        100,
                        140
                    ],
                    label: 'My dataset' // for legend
                }],
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey'
            ]
        };
        this.polarColors = [
            {
                backgroundColor: [
                    this.colors.byName('pink'),
                    this.colors.byName('purple'),
                    this.colors.byName('pink'),
                    this.colors.byName('purple')
                ],
                borderColor: [
                    this.colors.byName('pink'),
                    this.colors.byName('purple'),
                    this.colors.byName('pink'),
                    this.colors.byName('purple')
                ],
            }
        ];
        this.polarOptions = {
            responsive: true
        };
        // Radar chart
        // -----------------------------------
        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: 'My Second dataset',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        this.radarColors = [
            {
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                pointColor: 'rgba(114,102,186,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(114,102,186,1)'
            }, {
                backgroundColor: 'rgba(151,187,205,0.2)',
                borderColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(151,187,205,1)'
            }
        ];
        this.radarOptions = {
            responsive: true
        };
    }
    ChartjsComponent.prototype.ngOnInit = function () {
    };
    // random values for demo
    ChartjsComponent.prototype.rFactor = function () {
        return Math.round(Math.random() * 100);
    };
    ;
    return ChartjsComponent;
}());
ChartjsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chartjs',
        template: __webpack_require__(1546),
        styles: [__webpack_require__(1452)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object])
], ChartjsComponent);

var _a;
//# sourceMappingURL=chartjs.component.js.map

/***/ }),

/***/ 1357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlotComponent = (function () {
    function FlotComponent(http) {
        var _this = this;
        this.http = http;
        this.areaOptions = {
            series: {
                lines: {
                    show: true,
                    fill: 0.8
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                tickColor: '#eee',
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v + ' visitors';
                }
            },
            shadowSize: 0
        };
        this.barOptions = {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickColor: '#eee'
            },
            shadowSize: 0
        };
        this.barStackedOptions = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 200,
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickColor: '#eee'
            },
            shadowSize: 0
        };
        this.lineOptions = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#eee',
                mode: 'categories'
            },
            yaxis: {
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickColor: '#eee'
            },
            shadowSize: 0
        };
        // PIE
        // -----------------------------------
        this.pieData = [{
                'label': 'jQuery',
                'color': '#4acab4',
                'data': 30
            }, {
                'label': 'CSS',
                'color': '#ffea88',
                'data': 40
            }, {
                'label': 'LESS',
                'color': '#ff8153',
                'data': 90
            }, {
                'label': 'SASS',
                'color': '#878bb6',
                'data': 75
            }, {
                'label': 'Jade',
                'color': '#b2d767',
                'data': 120
            }];
        this.pieOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0,
                    label: {
                        show: true,
                        radius: 0.8,
                        formatter: function (label, series) {
                            return '<div class="flot-pie-label">' +
                                // label + ' : ' +
                                Math.round(series.percent) +
                                '%</div>';
                        },
                        background: {
                            opacity: 0.8,
                            color: '#222'
                        }
                    }
                }
            }
        };
        // DONUT
        // -----------------------------------
        this.donutData = [{
                'color': '#39C558',
                'data': 60,
                'label': 'Coffee'
            },
            {
                'color': '#00b4ff',
                'data': 90,
                'label': 'CSS'
            },
            {
                'color': '#FFBE41',
                'data': 50,
                'label': 'LESS'
            },
            {
                'color': '#ff3e43',
                'data': 80,
                'label': 'Jade'
            },
            {
                'color': '#937fc7',
                'data': 116,
                'label': 'AngularJS'
            }
        ];
        this.donutOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            }
        };
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: (app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        // REALTIME
        // -----------------------------------
        this.rtAuxData = [];
        this.realTimeOptions = {
            series: {
                lines: { show: true, fill: true, fillColor: { colors: ['#a0e0f3', '#23b7e5'] } },
                shadowSize: 0 // Drawing is faster without shadows
            },
            grid: {
                show: false,
                borderWidth: 0,
                minBorderMargin: 20,
                labelMargin: 10
            },
            xaxis: {
                tickFormatter: function () {
                    return '';
                }
            },
            yaxis: {
                min: 0,
                max: 110
            },
            legend: {
                show: true
            },
            colors: ['#23b7e5']
        };
        this.getChartData('assets/server/chart/spline.json').subscribe(function (data) { return _this.splineData = data; });
        this.getChartData('assets/server/chart/bar.json').subscribe(function (data) { return _this.barData = data; });
        this.getChartData('assets/server/chart/barstacked.json').subscribe(function (data) { return _this.barStackeData = data; });
        this.getChartData('assets/server/chart/area.json').subscribe(function (data) { return _this.areaData = data; });
        this.getChartData('assets/server/chart/line.json').subscribe(function (data) { return _this.lineData = data; });
    }
    FlotComponent.prototype.ngOnInit = function () {
        // Generate random data for realtime demo
        this.update();
    };
    FlotComponent.prototype.getChartData = function (url) {
        return this.http.get(url).map(function (data) { return data.json(); });
    };
    FlotComponent.prototype.change = function () {
        // Change a value
        this.splineData[0].color = '#ff0000';
        // Create a new object in order to provide a different instance
        // so the directive can detect the change using ngOnChanges
        this.splineData = $.extend(true, [], this.splineData);
    };
    FlotComponent.prototype.ready = function ($event) {
        // $event == { plot: PlotObject }
        console.log('Ready!');
    };
    // REALTIME demo
    // -----------------------------------
    FlotComponent.prototype.getRandomData = function () {
        var totalPoints = 300;
        if (this.rtAuxData.length > 0) {
            this.rtAuxData = this.rtAuxData.slice(1);
        }
        // Do a random walk
        while (this.rtAuxData.length < totalPoints) {
            var prev = this.rtAuxData.length > 0 ? this.rtAuxData[this.rtAuxData.length - 1] : 50, y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            }
            else if (y > 100) {
                y = 100;
            }
            this.rtAuxData.push(y);
        }
        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.rtAuxData.length; ++i) {
            res.push([i, this.rtAuxData[i]]);
        }
        return [res];
    };
    FlotComponent.prototype.update = function () {
        this.realTimeData = this.getRandomData();
        setTimeout(this.update.bind(this), 30);
    };
    return FlotComponent;
}());
FlotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-flot',
        template: __webpack_require__(1547),
        styles: [__webpack_require__(1453)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FlotComponent);

var _a;
//# sourceMappingURL=flot.component.js.map

/***/ }),

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadialComponent = (function () {
    function RadialComponent(colors) {
        this.colors = colors;
        this.easyPiePercent1 = 85;
        this.easyPiePercent2 = 45;
        this.easyPiePercent3 = 25;
        this.easyPiePercent4 = 60;
        this.pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('success'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };
        this.pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('warning'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };
        this.pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('danger'),
            trackColor: false,
            scaleColor: this.colors.byName('gray'),
            lineWidth: 15,
            lineCap: 'circle'
        };
        this.pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('danger'),
            trackColor: this.colors.byName('yellow'),
            scaleColor: this.colors.byName('gray-dark'),
            lineWidth: 15,
            lineCap: 'circle'
        };
    }
    RadialComponent.prototype.ngOnInit = function () {
    };
    RadialComponent.prototype.randomize = function () {
        this.easyPiePercent1 = this.random();
        this.easyPiePercent2 = this.random();
        this.easyPiePercent3 = this.random();
        this.easyPiePercent4 = this.random();
    };
    RadialComponent.prototype.random = function () {
        return Math.floor((Math.random() * 100) + 1);
    };
    return RadialComponent;
}());
RadialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-radial',
        template: __webpack_require__(1548),
        styles: [__webpack_require__(1454)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object])
], RadialComponent);

var _a;
//# sourceMappingURL=radial.component.js.map

/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'canvas[baseChart]', exportAs: 'base-chart' },] },
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    BaseChartDirective.propDecorators = {
        'data': [{ type: core_1.Input },],
        'datasets': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'chartType': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'chartClick': [{ type: core_1.Output },],
        'chartHover': [{ type: core_1.Output },],
    };
    return BaseChartDirective;
}());
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = function () { return []; };
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1521));


/***/ }),

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1522));


/***/ }),

/***/ 1546:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Chart JS</div>\r\n<div class=\"container-fluid\">\r\n   <div class=\"row mb-lg\">\r\n      <div class=\"col-lg-6\">\r\n         <h4>Line Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'line'\" [options]=\"lineOptions\" [datasets]=\"lineData.datasets\" [colors]=\"lineColors\" [labels]=\"lineData.labels\" [legend]=\"false\" height=\"120\"></canvas>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n         <h4>Bar Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'bar'\" [options]=\"barOptions\" [datasets]=\"barData.datasets\" [colors]=\"barColors\" [labels]=\"barData.labels\" [legend]=\"false\" height=\"120\"></canvas>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"row mb-lg\">\r\n      <div class=\"col-lg-6\">\r\n         <h4>Polar Area Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'polarArea'\" [options]=\"polarOptions\" [datasets]=\"polarData.datasets\" [labels]=\"polarData.labels\" [colors]=\"polarColors\" [legend]=\"false\" height=\"180\"></canvas>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n         <h4>Radar Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'radar'\" [options]=\"radarOptions\" [datasets]=\"radarData.datasets\" [colors]=\"radarColors\" [labels]=\"radarData.labels\" [legend]=\"false\" height=\"180\"></canvas>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"row mb-lg\">\r\n      <div class=\"col-lg-6\">\r\n         <h4>Pie Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'pie'\" [options]=\"pieOptions\" [datasets]=\"pieData.datasets\" [colors]=\"pieColors\" [labels]=\"pieData.labels\" [legend]=\"false\" height=\"80\"></canvas>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n         <h4>Doughnut Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'doughnut'\" [options]=\"doughnutOptions\" [datasets]=\"doughnutData.datasets\" [colors]=\"doughnutColors\" [labels]=\"doughnutData.labels\" [legend]=\"false\" height=\"80\"></canvas>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ 1547:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n   <div class=\"pull-right text-center\">\r\n        <div sparkline data-bar-color=\"#cfdbe2\" data-height=\"20\" data-bar-width=\"3\" data-bar-spacing=\"2\" values=\"1,0,4,9,5,7,8,9,5,7,8,4,7\"></div>\r\n   </div>\r\n   Flot charts\r\n</div>\r\n<div class=\"container-fluid\">\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n         <div class=\"panel panel-default\" id=\"panelChart1\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Area</div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div flot [dataset]=\"areaData\" [options]=\"areaOptions\" height=\"300\" (ready)=\"ready($event)\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n         <div class=\"panel panel-default\" id=\"panelChart9\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Area Spline</div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n         <div class=\"panel panel-default\" id=\"panelChart2\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Bar</div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div flot [dataset]=\"barData\" [options]=\"barOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n         <div class=\"panel panel-default\" id=\"panelChart3\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Bar - Stacked</div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div class=\"indicator show\">\r\n                     <span class=\"spinner\"></span>\r\n                  </div>\r\n                  <div flot [dataset]=\"barStackeData\" [options]=\"barStackedOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n         <div class=\"panel panel-default\" id=\"panelChart4\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Real Time <small>(30ms)</small></div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div flot [dataset]=\"realTimeData\" [options]=\"realTimeOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n         <div class=\"panel panel-default\" id=\"panelChart4\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Line</div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div flot [dataset]=\"lineData\" [options]=\"lineOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n         <div class=\"panel panel-default\" id=\"panelChart5\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Pie</div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div flot [dataset]=\"pieData\" [options]=\"pieOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n         <div class=\"panel panel-default\" id=\"panelChart6\">\r\n            <div class=\"panel-heading\">\r\n               <div class=\"panel-title\">Donut</div>\r\n            </div>\r\n            <div class=\"panel-wrapper\">\r\n               <div class=\"panel-body\">\r\n                  <div flot [dataset]=\"donutData\" [options]=\"donutOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n</div>\r\n"

/***/ }),

/***/ 1548:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Radial charts\r\n   <small>Canvas based &amp; No canvas Pure CSS radial progress bars solutions</small>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <h4 class=\"page-header clearfix\">\r\n      <div class=\"pull-left\">Easypie Charts</div>\r\n      <div class=\"pull-right\">\r\n         <button class=\"btn btn-sm btn-info\" type=\"button\" (click)=\"randomize()\">\r\n            <em class=\"fa fa-refresh\"></em>\r\n         </button>\r\n      </div>\r\n   </h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-heading\">Default</div>\r\n                <div class=\"panel-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions1\" [percent]=\"easyPiePercent1\">\r\n                        <span>{{easyPiePercent1}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-heading\">Slim</div>\r\n                <div class=\"panel-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions2\" [percent]=\"easyPiePercent2\">\r\n                        <span>{{easyPiePercent2}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-heading\">Track color</div>\r\n                <div class=\"panel-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions3\" [percent]=\"easyPiePercent3\">\r\n                        <span>{{easyPiePercent3}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n            <div class=\"panel\">\r\n                <div class=\"panel-heading\">Scale color</div>\r\n                <div class=\"panel-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions4\" [percent]=\"easyPiePercent4\">\r\n                        <span>{{easyPiePercent4}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<h4 class=\"page-header\">Pure CSS\r\n   <small>radial progress bars solutions</small>\r\n</h4>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Radial Size</div>\r\n            <div class=\"panel-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-85 radial-bar-lg\" data-label=\"85%\"></div>\r\n                        <p><code>.radial-bar.radial-bar-85.radial-bar-lg</code>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-45\" data-label=\"45%\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-60 radial-bar-sm\" data-label=\"60%\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-20 radial-bar-xs\" data-label=\"20%\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Radial with Images</div>\r\n            <div class=\"panel-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-20 radial-bar radial-bar-danger\">\r\n                            <img src=\"assets/img/user/03.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-35 radial-bar-warning\" data-label=\"35%\">\r\n                            <img src=\"assets/img/user/01.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-50 radial-bar-info\" data-label=\"50%\">\r\n                            <img src=\"assets/img/user/04.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-100 radial-bar-success\" data-label=\"100%\">\r\n                            <img src=\"assets/img/user/05.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Radial with Tooltips</div>\r\n            <div class=\"panel-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-85\" data-label=\"85%\" tooltip=\"85%\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-45\" data-label=\"45%\" tooltip=\"45%\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-60\" data-label=\"60%\" tooltip=\"60%\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-20\" data-label=\"20%\" tooltip=\"20%\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Radial Variants</div>\r\n            <div class=\"panel-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-20 radial-bar-lg radial-bar-danger\" data-label=\"20%\"></div>\r\n                        <p><code>.radial-bar.radial-bar-20.radial-bar-lg.radial-bar-danger</code>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-35 radial-bar-lg radial-bar-warning\" data-label=\"35%\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-50 radial-bar-lg radial-bar-info\" data-label=\"50%\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"radial-bar radial-bar-100 radial-bar-lg radial-bar-success\" data-label=\"100%\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n        <!-- START panel-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Radial applications</div>\r\n            <div class=\"panel-body text-center\">\r\n                <div class=\"radial-bar radial-bar-85 radial-bar-lg\" data-label=\"85%\"></div>\r\n                <p>Visitors</p>\r\n            </div>\r\n            <div class=\"panel-footer text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"radial-bar radial-bar-warning radial-bar-35 radial-bar-sm\" data-label=\"35%\"></div>\r\n                        <p>\r\n                            <small>Conversions</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"radial-bar radial-bar-info radial-bar-45 radial-bar-sm\" data-label=\"45%\"></div>\r\n                        <p>\r\n                            <small>Recurrent</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"radial-bar radial-bar-success radial-bar-20 radial-bar-sm\" data-label=\"20%\"></div>\r\n                        <p>\r\n                            <small>Uniques</small>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END panel-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n"

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__(1523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chartjs_chartjs_component__ = __webpack_require__(1356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flot_flot_component__ = __webpack_require__(1357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radial_radial_component__ = __webpack_require__(1358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'flot', component: __WEBPACK_IMPORTED_MODULE_5__flot_flot_component__["a" /* FlotComponent */] },
    { path: 'radial', component: __WEBPACK_IMPORTED_MODULE_6__radial_radial_component__["a" /* RadialComponent */] },
    { path: 'chartjs', component: __WEBPACK_IMPORTED_MODULE_4__chartjs_chartjs_component__["a" /* ChartjsComponent */] }
];
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__flot_flot_component__["a" /* FlotComponent */],
            __WEBPACK_IMPORTED_MODULE_6__radial_radial_component__["a" /* RadialComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chartjs_chartjs_component__["a" /* ChartjsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], ChartsModule);

//# sourceMappingURL=charts.module.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map