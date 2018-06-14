"use strict";
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
exports.__esModule = true;
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new EnforceEventNamingWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = 'Events must end with Event...';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
// The walker takes care of all the work.
var EnforceEventNamingWalker = /** @class */ (function (_super) {
    __extends(EnforceEventNamingWalker, _super);
    function EnforceEventNamingWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnforceEventNamingWalker.prototype.visitClassDeclaration = function (node) {
        // create a failure at the current position
        // console.log('Got ClassDeclaration', node);
        console.log('Got decorators', node.decorators);
        var className = node.name && node.name.escapedText;
        console.log('Got className:', className);
        if (className && className.toString().indexOf('Event') === -1) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
        // call the base version of this visitor to actually parse this node
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    return EnforceEventNamingWalker;
}(Lint.RuleWalker));
