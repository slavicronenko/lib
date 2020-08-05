(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('shared-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['shared-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var SharedComponent = /** @class */ (function () {
        function SharedComponent() {
        }
        SharedComponent.prototype.ngOnInit = function () {
        };
        SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
        SharedComponent.ɵcmp = core.ɵɵdefineComponent({ type: SharedComponent, selectors: [["lib-app-shared"]], decls: 1, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtext(0, " Shared Component (v. 1.2.4)");
            } }, encapsulation: 2 });
        return SharedComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SharedComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-app-shared',
                    template: "    Shared Component (v. 1.2.4)",
                }]
        }], function () { return []; }, null); })();

    var SharedLibModule = /** @class */ (function () {
        function SharedLibModule() {
        }
        SharedLibModule.ɵmod = core.ɵɵdefineNgModule({ type: SharedLibModule });
        SharedLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); }, imports: [[]] });
        return SharedLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(SharedLibModule, { declarations: [SharedComponent], exports: [SharedComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SharedLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [SharedComponent],
                    imports: [],
                    exports: [SharedComponent]
                }]
        }], null, null); })();

    exports.SharedComponent = SharedComponent;
    exports.SharedLibModule = SharedLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared-lib.umd.js.map
