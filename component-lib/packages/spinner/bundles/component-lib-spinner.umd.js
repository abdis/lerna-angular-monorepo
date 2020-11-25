(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('component-lib-spinner', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['component-lib-spinner'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var SpinnerService = /** @class */ (function () {
        function SpinnerService() {
        }
        return SpinnerService;
    }());
    SpinnerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SpinnerService_Factory() { return new SpinnerService(); }, token: SpinnerService, providedIn: "root" });
    SpinnerService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SpinnerService.ctorParameters = function () { return []; };

    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
        }
        SpinnerComponent.prototype.ngOnInit = function () {
        };
        return SpinnerComponent;
    }());
    SpinnerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-spinner',
                    template: "\n    <p>\n      spinner works!\n    </p>\n  "
                },] }
    ];
    SpinnerComponent.ctorParameters = function () { return []; };

    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        return SpinnerModule;
    }());
    SpinnerModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SpinnerComponent],
                    imports: [],
                    exports: [SpinnerComponent]
                },] }
    ];

    /*
     * Public API Surface of spinner
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SpinnerComponent = SpinnerComponent;
    exports.SpinnerModule = SpinnerModule;
    exports.SpinnerService = SpinnerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=component-lib-spinner.umd.js.map
