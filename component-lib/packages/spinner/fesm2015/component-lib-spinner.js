import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class SpinnerService {
    constructor() { }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(); };
SpinnerService.ɵprov = ɵɵdefineInjectable({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpinnerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["lib-spinner"]], decls: 2, vars: 0, template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " New spinner works!! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'lib-spinner',
                template: `
    <p>
      New spinner works!!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class SpinnerModule {
}
SpinnerModule.ɵmod = ɵɵdefineNgModule({ type: SpinnerModule });
SpinnerModule.ɵinj = ɵɵdefineInjector({ factory: function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SpinnerModule, { declarations: [SpinnerComponent], exports: [SpinnerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SpinnerModule, [{
        type: NgModule,
        args: [{
                declarations: [SpinnerComponent],
                imports: [],
                exports: [SpinnerComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SpinnerComponent, SpinnerModule, SpinnerService };
//# sourceMappingURL=component-lib-spinner.js.map
