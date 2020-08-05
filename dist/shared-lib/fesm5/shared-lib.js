import { ɵɵdefineComponent, ɵɵtext, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var SharedComponent = /** @class */ (function () {
    function SharedComponent() {
    }
    SharedComponent.prototype.ngOnInit = function () {
    };
    SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
    SharedComponent.ɵcmp = ɵɵdefineComponent({ type: SharedComponent, selectors: [["lib-app-shared"]], decls: 1, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtext(0, " Shared Component (v. 1.0.0)");
        } }, encapsulation: 2 });
    return SharedComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedComponent, [{
        type: Component,
        args: [{
                selector: 'lib-app-shared',
                template: "    Shared Component (v. 1.0.0)",
            }]
    }], function () { return []; }, null); })();

var SharedLibModule = /** @class */ (function () {
    function SharedLibModule() {
    }
    SharedLibModule.ɵmod = ɵɵdefineNgModule({ type: SharedLibModule });
    SharedLibModule.ɵinj = ɵɵdefineInjector({ factory: function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); }, imports: [[]] });
    return SharedLibModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedLibModule, { declarations: [SharedComponent], exports: [SharedComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedLibModule, [{
        type: NgModule,
        args: [{
                declarations: [SharedComponent],
                imports: [],
                exports: [SharedComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedComponent, SharedLibModule };
//# sourceMappingURL=shared-lib.js.map
