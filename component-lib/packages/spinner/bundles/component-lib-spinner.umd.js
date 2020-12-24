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
    SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(); };
    SpinnerService.ɵprov = i0.ɵɵdefineInjectable({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SpinnerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
        }
        SpinnerComponent.prototype.ngOnInit = function () {
        };
        return SpinnerComponent;
    }());
    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
    SpinnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["lib-spinner"]], decls: 2, vars: 0, template: function SpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " New spinner works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-spinner',
                        template: "\n    <p>\n      New spinner works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        return SpinnerModule;
    }());
    SpinnerModule.ɵmod = i0.ɵɵdefineNgModule({ type: SpinnerModule });
    SpinnerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SpinnerModule, { declarations: [SpinnerComponent], exports: [SpinnerComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SpinnerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SpinnerComponent],
                        imports: [],
                        exports: [SpinnerComponent]
                    }]
            }], null, null);
    })();

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
