webpackJsonp([6,16],{

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(963));
__export(__webpack_require__(992));
__export(__webpack_require__(1070));
__export(__webpack_require__(994));
__export(__webpack_require__(993));
__export(__webpack_require__(964));


/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var select_1 = __webpack_require__(994);
var select_pipes_1 = __webpack_require__(964);
var off_click_1 = __webpack_require__(992);
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesComponent = (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-articles',
        template: __webpack_require__(1542),
        styles: [__webpack_require__(1448)]
    }),
    __metadata("design:paramtypes", [])
], ArticlesComponent);

//# sourceMappingURL=articles.component.js.map

/***/ }),

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleviewComponent = (function () {
    function ArticleviewComponent() {
        this.itemsCategories = ['coding', 'less', 'sass', 'angularjs', 'node', 'expressJS'];
        this.itemsTags = ['JAVASCRIPT', 'WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS'];
        this.itemsReview = [
            'Adam <adam@email.com>',
            'Amalie <amalie@email.com>',
            'Wladimir <wladimir@email.com>',
            'Samantha <samantha@email.com>',
            'Estefanía <estefanía@email.com>',
            'Natasha <natasha@email.com>',
            'Nicole <nicole@email.com>',
            'Adrian <adrian@email.com>'
        ];
    }
    ArticleviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Summernote is currently not ported as a native angular2 module
        // For a quick use it we use the component a wrapper
        // Plugin events can be used to keep component props
        // in sync with the editor content
        $('#summernote').summernote({
            height: 280,
            dialogsInBody: true,
            callbacks: {
                onChange: function (contents, $editable) {
                    _this.contents = contents;
                    // console.log(contents);
                }
            }
        });
    };
    return ArticleviewComponent;
}());
ArticleviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-articleview',
        template: __webpack_require__(1543),
        styles: [__webpack_require__(1449)]
    }),
    __metadata("design:paramtypes", [])
], ArticleviewComponent);

//# sourceMappingURL=articleview.component.js.map

/***/ }),

/***/ 1354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
        this.words = [
            {
                text: 'Lorem',
                weight: 13
            }, {
                text: 'Ipsum',
                weight: 10.5
            }, {
                text: 'Dolor',
                weight: 9.4
            }, {
                text: 'Sit',
                weight: 8
            }, {
                text: 'Amet',
                weight: 6.2
            }, {
                text: 'Consectetur',
                weight: 5
            }, {
                text: 'Adipiscing',
                weight: 5
            }, {
                text: 'Sit',
                weight: 8
            }, {
                text: 'Amet',
                weight: 6.2
            }, {
                text: 'Consectetur',
                weight: 5
            }, {
                text: 'Adipiscing',
                weight: 5
            }
        ];
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(1544),
        styles: [__webpack_require__(1450)]
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 1355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = (function () {
    function PostComponent() {
        this.words = [
            {
                text: 'Lorem',
                weight: 13
            }, {
                text: 'Ipsum',
                weight: 10.5
            }, {
                text: 'Dolor',
                weight: 9.4
            }, {
                text: 'Sit',
                weight: 8
            }, {
                text: 'Amet',
                weight: 6.2
            }, {
                text: 'Consectetur',
                weight: 5
            }, {
                text: 'Adipiscing',
                weight: 5
            }, {
                text: 'Sit',
                weight: 8
            }, {
                text: 'Amet',
                weight: 6.2
            }, {
                text: 'Consectetur',
                weight: 5
            }, {
                text: 'Adipiscing',
                weight: 5
            }
        ];
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    return PostComponent;
}());
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__(1545),
        styles: [__webpack_require__(1451)]
    }),
    __metadata("design:paramtypes", [])
], PostComponent);

//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1542:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Articles</div>\r\n<!-- Zero Configuration-->\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">Blog articles manager</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n            <table datatable=\"\" class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"wd-md\">Post title</th>\r\n                        <th>Author</th>\r\n                        <th>Categories</th>\r\n                        <th>Tags</th>\r\n                        <th>Created</th>\r\n                        <th>Updated</th>\r\n                        <th>Comments</th>\r\n                        <th>Status</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td><a href=\"\">AngularJS</a>\r\n                        </td>\r\n                        <td><a href=\"\">Keith Gutierrez</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">HTML5</a><a href=\"\">JAVASCRIPT</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">angularjs</a><a class=\"mr-sm label label-primary\" href=\"\">mvc</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>1251</td>\r\n                        <td><a class=\"mr-sm label label-success\" href=\"\">Public</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">MeteorJs and Angularjs</a>\r\n                        </td>\r\n                        <td><a href=\"\">Carlos Wilson</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">WEB</a><a href=\"\">JAVASCRIPT</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">angularjs</a><a class=\"mr-sm label label-primary\" href=\"\">node</a><a class=\"mr-sm label label-primary\" href=\"\">meteor</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>1361</td>\r\n                        <td><a class=\"mr-sm label label-warning\" href=\"\">Pending</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Working with ExpressJS </a>\r\n                        </td>\r\n                        <td><a href=\"\">Carlos Wilson</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">SERVER</a><a href=\"\">JAVASCRIPT</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">expressJS</a><a class=\"mr-sm label label-primary\" href=\"\">node</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-success\" href=\"\">Public</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Abstract object styles</a>\r\n                        </td>\r\n                        <td><a href=\"\">Carlos Wilson</a>\r\n                        </td>\r\n                        <td><a href=\"\">JAVASCRIPT</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">node</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-success\" href=\"\">Public</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Animating progress bars</a>\r\n                        </td>\r\n                        <td><a href=\"\">Clyde Bailey</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">BOOTSTRAP</a><a href=\"\">WEB</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">css</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-danger\" href=\"\">Deleted</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Contextual alternatives</a>\r\n                        </td>\r\n                        <td><a href=\"\">Tracy Black</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">BOOTSTRAP</a><a href=\"\">WEB</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">less</a><a class=\"mr-sm label label-primary\" href=\"\">sass</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-warning\" href=\"\">Pending</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Responsive embed</a>\r\n                        </td>\r\n                        <td><a href=\"\">Brittany Harrison</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">FOUNDATION</a><a href=\"\">WEB</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">techniques</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-default\" href=\"\">Draft</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Digging into AngularJS</a>\r\n                        </td>\r\n                        <td><a href=\"\">Keith Gutierrez</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">HTML5</a><a href=\"\">JAVASCRIPT</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">angularjs</a><a class=\"mr-sm label label-primary\" href=\"\">mvc</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-success\" href=\"\">Public</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Application with MeteorJs and Angularjs</a>\r\n                        </td>\r\n                        <td><a href=\"\">Nevaeh Hunter</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">WEB</a><a href=\"\">SERVER</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">angularjs</a><a class=\"mr-sm label label-primary\" href=\"\">node</a><a class=\"mr-sm label label-primary\" href=\"\">meteor</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-warning\" href=\"\">Pending</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Introduction to ExpressJS </a>\r\n                        </td>\r\n                        <td><a href=\"\">Carlos Wilson</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">SERVER</a><a href=\"\">JAVASCRIPT</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">expressJS</a><a class=\"mr-sm label label-primary\" href=\"\">node</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-success\" href=\"\">Public</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Optional classes</a>\r\n                        </td>\r\n                        <td><a href=\"\">Peter Lucas</a>\r\n                        </td>\r\n                        <td><a href=\"\">WEB</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">node</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>125</td>\r\n                        <td><a class=\"mr-sm label label-success\" href=\"\">Public</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Typical user actions</a>\r\n                        </td>\r\n                        <td><a href=\"\">Clyde Bailey</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">BOOTSTRAP</a><a href=\"\">WEB</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">css</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>1471</td>\r\n                        <td><a class=\"mr-sm label label-danger\" href=\"\">Deleted</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">A lightweight, flexible component</a>\r\n                        </td>\r\n                        <td><a href=\"\">Brittany Harrison</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">BOOTSTRAP</a><a href=\"\">WEB</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">less</a><a class=\"mr-sm label label-primary\" href=\"\">sass</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>1581</td>\r\n                        <td><a class=\"mr-sm label label-warning\" href=\"\">Pending</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">Highlight new or unread items </a>\r\n                        </td>\r\n                        <td><a href=\"\">Abigail Phillips</a>\r\n                        </td>\r\n                        <td><a class=\"mr\" href=\"\">FOUNDATION</a><a href=\"\">WEB</a>\r\n                        </td>\r\n                        <td> <a class=\"mr-sm label label-primary\" href=\"\">coding</a><a class=\"mr-sm label label-primary\" href=\"\">techniques</a>\r\n                        </td>\r\n                        <td>10/05/2015</td>\r\n                        <td>10/05/2015</td>\r\n                        <td>1691</td>\r\n                        <td><a class=\"mr-sm label label-default\" href=\"\">Draft</a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1543:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">New Article</div>\r\n<div class=\"container-fluid\">\r\n    <alert type=\"info\">\r\n        <em class=\"fa fa-exclamation-circle fa-lg fa-fw\"></em>\r\n        <span>There is an autosaved version of this article that is more recent than the version below. <a href=\"#\" class=\"text-white\">Restore</a></span>\r\n    </alert>\r\n    <div class=\"row\">\r\n        <!-- Article Content-->\r\n        <div class=\"col-lg-9\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">\r\n                    <form action=\"\">\r\n                        <input class=\"mb-lg form-control input-lg\" type=\"text\" name=\"article-title\" placeholder=\"Article title...\" />\r\n                        <!-- Wysiswyg editor-->\r\n                        <div id=\"summernote\" class=\"summernote\">\r\n                            <span>Rich text presentation here..</span>\r\n                        </div>\r\n                        <br/>\r\n                        <p>Notes</p>\r\n                        <textarea class=\"mb-lg form-control\" cols=\"6\"></textarea>\r\n                        <div class=\"clearfix\">\r\n                            <div class=\"pull-left\">\r\n                                <button class=\"btn btn-default m-r-10 m-t-10\" type=\"button\">\r\n                                    <em class=\"fa fa-edit fa-fw\"></em>Draft</button>\r\n                                <button class=\"btn btn-primary m-t-10\" type=\"button\">\r\n                                    <em class=\"fa fa-check fa-fw\"></em>Save</button>\r\n                            </div>\r\n                            <div class=\"pull-right\">\r\n                                <button class=\"btn btn-danger m-r-10 m-t-10\" type=\"button\">\r\n                                    <em class=\"fa fa-trash fa-fw\"></em>Remove</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <p class=\"lead\">List of Comments</p>\r\n            <div class=\"panel\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>\r\n                                    <strong>Comment ID</strong>\r\n                                </th>\r\n                                <th>\r\n                                    <strong>Date</strong>\r\n                                </th>\r\n                                <th>\r\n                                    <strong>Username</strong>\r\n                                </th>\r\n                                <th>\r\n                                    <strong>Comment excerpt</strong>\r\n                                </th>\r\n                                <th class=\"text-center\">\r\n                                    <strong>Current status</strong>\r\n                                </th>\r\n                                <th class=\"text-right\" style=\"width:130px\">\r\n                                    <strong>Actions</strong>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>123</td>\r\n                                <td>10/05/2015</td>\r\n                                <td><a href=\"\">Jack Jordan</a>\r\n                                </td>\r\n                                <td>Sed quis eros libero, a euismod nisl....</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"label label-success\">Approved</span>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                    <button class=\"btn btn-sm btn-default\" type=\"button\">\r\n                                        <em class=\"fa fa-pencil\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"button\">\r\n                                        <em class=\"fa fa-trash\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"button\">\r\n                                        <em class=\"fa fa-check\"></em>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>456</td>\r\n                                <td>10/07/2015</td>\r\n                                <td><a href=\"\">Hailey Mckinney</a>\r\n                                </td>\r\n                                <td>Nulla facilisi.</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"label label-success\">Approved</span>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                    <button class=\"btn btn-sm btn-default\" type=\"button\">\r\n                                        <em class=\"fa fa-pencil\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"button\">\r\n                                        <em class=\"fa fa-trash\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"button\">\r\n                                        <em class=\"fa fa-check\"></em>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>789</td>\r\n                                <td>11/05/2015</td>\r\n                                <td><a href=\"\">Peyton Reyes</a>\r\n                                </td>\r\n                                <td>Quisque enim nisi, semper non pulvinar et, aliquam id lorem...</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"label label-warning\">Pending</span>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                    <button class=\"btn btn-sm btn-default\" type=\"button\">\r\n                                        <em class=\"fa fa-pencil\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"button\">\r\n                                        <em class=\"fa fa-trash\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"button\">\r\n                                        <em class=\"fa fa-check\"></em>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>999</td>\r\n                                <td>10/06/2015</td>\r\n                                <td><a href=\"\">Darryl Harper</a>\r\n                                </td>\r\n                                <td>Nulla facilisi.</td>\r\n                                <td class=\"text-center\">\r\n                                    <span class=\"label label-danger\">Rejected</span>\r\n                                </td>\r\n                                <td class=\"text-right\">\r\n                                    <button class=\"btn btn-sm btn-default\" type=\"button\">\r\n                                        <em class=\"fa fa-pencil\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-danger\" type=\"button\" disabled=\"\">\r\n                                        <em class=\"fa fa-trash\"></em>\r\n                                    </button>\r\n                                    <button class=\"btn btn-sm btn-success\" type=\"button\">\r\n                                        <em class=\"fa fa-check\"></em>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Article sidebar-->\r\n        <div class=\"col-lg-3\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">\r\n                    <p class=\"lead\">Article Data</p>\r\n                    <p>Categories</p>\r\n                    <ng-select class=\"mb-lg\" (data)=\"valueCategory\" [multiple]=\"true\" [items]=\"itemsCategories\"></ng-select>\r\n                    <p>Tags</p>\r\n                    <ng-select class=\"mb-lg\" (data)=\"valueTag\" [multiple]=\"true\" [items]=\"itemsTags\"></ng-select>\r\n                    <p>Reviewers</p>\r\n                    <ng-select class=\"mb-lg\" (data)=\"valueReview\" [multiple]=\"true\" [items]=\"itemsReview\"></ng-select>\r\n                    <p class=\"lead\">SEO Metadata</p>\r\n                    <div class=\"form-group\">\r\n                        <p>Title</p>\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Brief description..\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <p>Description</p>\r\n                        <textarea class=\"form-control\" rows=\"5\" placeholder=\"Max 255 characters...\"></textarea>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <p>Keywords</p>\r\n                        <textarea class=\"form-control\" rows=\"5\" placeholder=\"Max 1000 characters...\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1544:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- Blog Content-->\r\n    <div class=\"col-lg-9\">\r\n        <div class=\"row\">\r\n            <!-- Posts column 1-->\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"panel\">\r\n                    <a href=\"\">\r\n                        <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" />\r\n                    </a>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Erica Castro</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>56</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                        <h4> <a href=\"\">Trip down the river</a>\r\n                  </h4>\r\n                        <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-body bg-primary\">\r\n                        <h3 class=\"mv-lg\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Erica Castro</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>56</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel\">\r\n                    <a href=\"\">\r\n                        <img class=\"img-responsive\" src=\"assets/img/bg10.jpg\" />\r\n                    </a>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Erin Clark</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">Apr 13, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>1000</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                        <h4> <a href=\"\">New camera</a>\r\n                  </h4>\r\n                        <p>Nullam posuere euismod volutpat. Quisque in ligula eget libero tristique varius sed euismod dolor. Sed ultrices, diam varius pellentesque porta, nulla neque auctor elit, quis tempus orci massa eget odio. Duis eleifend elementum commodo. Donec volutpat tristique laoreet. Cras vitae turpis enim, eget malesuada erat. Suspendisse quam leo, gravida a ullamcorper a, interdum id odio. Nullam eu lacus in nibh rutrum ornare at eget tellus.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Posts column 2-->\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"panel\">\r\n                    <a href=\"\">\r\n                        <img class=\"img-responsive\" src=\"assets/img/bg2.jpg\" />\r\n                    </a>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Erica Castro</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>56</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                        <h4> <a href=\"\">Reviewing latests phones</a>\r\n                  </h4>\r\n                        <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel\">\r\n                    <a href=\"\">\r\n                        <img class=\"img-responsive\" src=\"assets/img/bg8.jpg\" />\r\n                    </a>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Allen Stephens</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>5600</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                        <h4> <a href=\"\">Workspace showcase</a>\r\n                  </h4>\r\n                        <p>Aenean iaculis diam lectus. Morbi quis purus velit. Maecenas tincidunt tempus sapien id ultrices. Vivamus fermentum libero vel felis aliquet interdum.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Posts column 3-->\r\n            <div class=\"col-lg-4\">\r\n                <div class=\"panel\">\r\n                    <a href=\"\">\r\n                        <img class=\"img-responsive\" src=\"assets/img/bg3.jpg\" />\r\n                    </a>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Erica Castro</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>56</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                        <h4> <a href=\"\">Incredible panoramic</a>\r\n                  </h4>\r\n                        <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-body bg-purple\">\r\n                        <h3 class=\"mv-lg\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Ava Chavez</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>999</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel\">\r\n                    <a href=\"\">\r\n                        <img class=\"img-responsive\" src=\"assets/img/bg4.jpg\" />\r\n                    </a>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Danny Ford</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>1000</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                        <h4> <a href=\"\">Sunset in the forest</a>\r\n                  </h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel\">\r\n                    <a href=\"\">\r\n                        <img class=\"img-responsive\" src=\"assets/img/bg5.jpg\" />\r\n                    </a>\r\n                    <div class=\"panel-body\">\r\n                        <p class=\"clearfix\">\r\n                            <span class=\"pull-left\">\r\n                        <small class=\"mr-sm\">By <a href=\"\">Danny Ford</a>\r\n                        </small>\r\n                        <small class=\"mr-sm\">May 03, 2015</small>\r\n                     </span>\r\n                            <span class=\"pull-right\">\r\n                        <small>\r\n                           <strong>1000</strong>\r\n                           <span>Comments</span>\r\n                            </small>\r\n                            </span>\r\n                        </p>\r\n                        <h4> <a href=\"\">Tech review</a>\r\n                  </h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Blog Sidebar-->\r\n    <div class=\"col-lg-3\">\r\n        <!-- Search-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Search</div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Search for...\" />\r\n                        <span class=\"input-group-btn\">\r\n                     <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-search\"></em>\r\n                     </button>\r\n                  </span>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <!-- Categories-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Categories</div>\r\n            <div class=\"panel-body\">\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Smartphones</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Mobiles</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Tech</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Inpiration</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Workspace</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <!-- Tag Cloud-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Tag Cloud</div>\r\n            <div class=\"panel-body\">\r\n                <div jqcloud class=\"center-block\" [words]=\"words\" [width]=\"240\" [height]=\"200\" [steps]=\"7\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- Ads-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ads</div>\r\n            <div class=\"panel-body\">\r\n                <a href=\"\">\r\n                    <img class=\"img-responsive img-thumbnail\" src=\"assets/img/mockup.png\" />\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1545:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- Blog Content-->\r\n    <div class=\"col-lg-9\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <div class=\"bb\">\r\n                    <h2 class=\"text-lg\">Maecenas rutrum fringilla vehicula.</h2>\r\n                    <p class=\"clearfix\">\r\n                        <span class=\"pull-left\">\r\n                     <small class=\"mr-sm\">By <a href=\"\">Erica Castro</a>\r\n                     </small>\r\n                     <small class=\"mr-sm\">May 03, 2015</small>\r\n                     <small>\r\n                        <strong>56</strong>\r\n                        <span>Comments</span>\r\n                        </small>\r\n                        </span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body text-md\">\r\n                <p>Praesent bibendum eros urna, in mattis est. Curabitur a purus urna, sit amet auctor erat. Praesent pellentesque augue eu tellus facilisis pretium. Aenean sollicitudin facilisis tortor eu mollis. Vivamus feugiat faucibus enim. Sed ut semper leo. Etiam feugiat risus massa. Nunc et magna in metus pharetra ultricies ac sit amet justo. Donec eu dolor sem, non auctor sapien. Suspendisse nisl nulla, interdum at fermentum eget, adipiscing in elit.</p>\r\n                <p>Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Praesent blandit venenatis mauris ac cursus. Nulla commodo interdum magna consectetur lacinia. Maecenas vitae adipiscing mauris. Nam sodales sollicitudin adipiscing.</p>\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                        <a href=\"\">\r\n                            <img class=\"img-responsive\" src=\"assets/img/bg4.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <a href=\"\">\r\n                            <img class=\"img-responsive\" src=\"assets/img/bg5.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <a href=\"\">\r\n                            <img class=\"img-responsive\" src=\"assets/img/bg7.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xs-3\">\r\n                        <a href=\"\">\r\n                            <img class=\"img-responsive\" src=\"assets/img/bg8.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <br/>\r\n                <p>Praesent tristique dui eu nunc fringilla et iaculis magna ornare. Proin sed erat sit amet metus rhoncus tincidunt. Vivamus commodo, tortor ut interdum posuere, urna risus aliquet purus, eu fringilla dui neque quis nisi. Proin posuere gravida ipsum, a pretium augue commodo eget. In id elit nulla. Donec nec magna a diam eleifend facilisis non in urna. Nam enim libero, lacinia a tristique a, accumsan sed purus. Phasellus ullamcorper rhoncus sagittis.</p>\r\n                <p>Sed eu rhoncus magna. Morbi non dui elementum nisl ultrices tincidunt. Nullam sagittis hendrerit erat, sit amet gravida ante tristique non. Nam arcu quam, aliquet eget varius sed, placerat et elit. Morbi nec luctus eros. Cras rutrum scelerisque auctor. Praesent malesuada erat ut tellus egestas sagittis. Etiam feugiat risus massa. Aliquam eget turpis eget dui eleifend suscipit ac sed dolor. Sed accumsan adipiscing enim. Sed auctor dignissim fringilla. Sed id turpis tellus. Nam vel tristique dolor. Ut scelerisque ligula tellus. Duis accumsan, est vel convallis dignissim, est massa pharetra ipsum, eu auctor nunc mi ac libero. Integer fermentum molestie massa at congue. Vestibulum congue tempus odio ac posuere. Integer lorem metus, rutrum non rhoncus sed, fringilla interdum urna.</p>\r\n                <hr/>\r\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                    <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-facebook text-muted\"></em>\r\n                    </button>\r\n                    <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-twitter text-muted\"></em>\r\n                    </button>\r\n                    <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-google-plus text-muted\"></em>\r\n                    </button>\r\n                    <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-tumblr text-muted\"></em>\r\n                    </button>\r\n                    <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-pinterest text-muted\"></em>\r\n                    </button>\r\n                    <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-share-alt text-muted\"></em>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel\">\r\n            <div class=\"panel-heading\">3 Comments</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                        <a href=\"#\">\r\n                            <img class=\"media-object img-circle thumb64\" src=\"assets/img/user/01.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <h4 class=\"media-heading\" id=\"media-heading\"><a href=\"\">Susan Grant</a>\r\n                     <small>10 min</small>\r\n                     <a class=\"anchorjs-link\" href=\"#media-heading\">\r\n                        <span class=\"anchorjs-icon\"></span>\r\n                     </a>\r\n                  </h4>\r\n                        <p>Donec ac massa tortor. In hac habitasse platea dictumst. Nam blandit fringilla faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget metus semper congue.</p>\r\n                        <p>Fusce ullamcorper placerat tortor, placerat consequat diam cursus posuere.</p>\r\n                    </div>\r\n                </div>\r\n                <hr/>\r\n                <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                        <a href=\"#\">\r\n                            <img class=\"media-object img-circle thumb64\" src=\"assets/img/user/03.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body mb-lg\">\r\n                        <h4 class=\"media-heading\" id=\"media-heading\"><a href=\"\">Dustin Dunn</a>\r\n                     <small>20 min</small>\r\n                     <a class=\"anchorjs-link\" href=\"#media-heading\">\r\n                        <span class=\"anchorjs-icon\"></span>\r\n                     </a>\r\n                  </h4>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n                        <hr/>\r\n                        <div class=\"media\">\r\n                            <div class=\"media-left\">\r\n                                <a href=\"#\">\r\n                                    <img class=\"media-object img-circle thumb64\" src=\"assets/img/user/06.jpg\" />\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"media-body\">\r\n                                <h4 class=\"media-heading\" id=\"nested-media-heading\"><a href=\"\">Marcus Gomez</a>\r\n                           <small>1 hour</small>\r\n                           <a class=\"anchorjs-link\" href=\"#nested-media-heading\">\r\n                              <span class=\"anchorjs-icon\"></span>\r\n                           </a>\r\n                        </h4>Integer ac nisl et urna gravida malesuada. Vivamus fermentum libero vel felis aliquet interdum.</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel\">\r\n            <div class=\"panel-heading\">\r\n                <em class=\"fa fa-pencil mr\"></em>Add your Comment</div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\" action=\"/\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-xs-6\">\r\n                            <input class=\"form-control\" id=\"post-firstname\" type=\"text\" name=\"post-firstname\" placeholder=\"Your firstname\" />\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <input class=\"form-control\" id=\"post-lastname\" type=\"text\" name=\"post-lastname\" placeholder=\"Your lastname\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-xs-12\">\r\n                            <textarea class=\"form-control\" id=\"post-comment\" name=\"post-comment\" rows=\"4\" placeholder=\"Comment here..\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-xs-12\">\r\n                            <button class=\"btn btn-effect-ripple btn-primary\" type=\"submit\">Send Comment</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Blog Sidebar-->\r\n    <div class=\"col-lg-3\">\r\n        <!-- Search-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Search</div>\r\n            <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Search for...\" />\r\n                        <span class=\"input-group-btn\">\r\n                     <button class=\"btn btn-default\" type=\"button\">\r\n                        <em class=\"fa fa-search\"></em>\r\n                     </button>\r\n                  </span>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <!-- Categories-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Categories</div>\r\n            <div class=\"panel-body\">\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Smartphones</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Mobiles</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Tech</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Inpiration</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <em class=\"fa fa-angle-right fa-fw\"></em>Workspace</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <!-- Tag Cloud-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Tag Cloud</div>\r\n            <div class=\"panel-body\">\r\n                <div jqcloud class=\"center-block\" [words]=\"words\" [width]=\"240\" [height]=\"200\" [steps]=\"7\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- Ads-->\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Ads</div>\r\n            <div class=\"panel-body\">\r\n                <a href=\"\">\r\n                    <img class=\"img-responsive img-thumbnail\" src=\"assets/img/mockup.png\" />\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__(1354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_component__ = __webpack_require__(1355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__articles_articles_component__ = __webpack_require__(1352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__articleview_articleview_component__ = __webpack_require__(1353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_5__post_post_component__["a" /* PostComponent */] },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_6__articles_articles_component__["a" /* ArticlesComponent */] },
    { path: 'articleview', component: __WEBPACK_IMPORTED_MODULE_7__articleview_articleview_component__["a" /* ArticleviewComponent */] }
];
var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2_ng2_select__["SelectModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_6__articles_articles_component__["a" /* ArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__articleview_articleview_component__["a" /* ArticleviewComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], BlogModule);

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(963);
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var platform_browser_1 = __webpack_require__(43);
var select_item_1 = __webpack_require__(993);
var select_pipes_1 = __webpack_require__(964);
var common_1 = __webpack_require__(963);
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        _super.call(this, actor);
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        _super.call(this, actor);
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ })

});
//# sourceMappingURL=6.chunk.js.map