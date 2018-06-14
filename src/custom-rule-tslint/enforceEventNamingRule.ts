import * as ts from 'typescript';
import * as Lint from 'tslint';

export class Rule extends Lint.Rules.AbstractRule {
    public static FAILURE_STRING = 'Events must end with Event...';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new EnforceEventNamingWalker(sourceFile, this.getOptions()));
    }
}

// The walker takes care of all the work.
class EnforceEventNamingWalker extends Lint.RuleWalker {
    public visitClassDeclaration(node: ts.ClassDeclaration) {
        // create a failure at the current position

        // console.log('Got ClassDeclaration', node);
        console.log('Got decorators', node.decorators);

        const className = node.name && node.name.escapedText;
        console.log('Got className:', className);
        if (className && className.toString().indexOf('Event') === -1) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }

        // call the base version of this visitor to actually parse this node
        super.visitClassDeclaration(node);
    }
}