import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class CardService {
    constructor() { }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(); };
CardService.ɵprov = ɵɵdefineInjectable({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], decls: 2, vars: 0, template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " New card works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card',
                template: `
    <p>
      New card works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class CardModule {
}
CardModule.ɵmod = ɵɵdefineNgModule({ type: CardModule });
CardModule.ɵinj = ɵɵdefineInjector({ factory: function CardModule_Factory(t) { return new (t || CardModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CardModule, { declarations: [CardComponent], exports: [CardComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
                declarations: [CardComponent],
                imports: [],
                exports: [CardComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of card
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, CardModule, CardService };
//# sourceMappingURL=component-lib-card.js.map
