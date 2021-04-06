import { abreuLangGrammarParser, AbreuExpressionsContext } from './ANTLR/components/code_editor/abreuLangGrammarParser';
import { abreuLangGrammarLexer } from './ANTLR/components/code_editor/abreuLangGrammarLexer';
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import AbreuLangErrorListener, { IAbreuLangError } from "./abreuLangErrorListener";



function parse(code: string): {ast:AbreuExpressionsContext, errors: IAbreuLangError[]} {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new abreuLangGrammarLexer(inputStream);
    lexer.removeErrorListeners()
    const abreuLangErrorsListner = new AbreuLangErrorListener();
    lexer.addErrorListener(abreuLangErrorsListner);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new abreuLangGrammarParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(abreuLangErrorsListner);
    const ast =  parser.abreuExpressions();
    const errors: IAbreuLangError[]  = abreuLangErrorsListner.getErrors();
    return {ast, errors};
}
export function parseAndGetASTRoot(code: string): AbreuExpressionsContext {
    const {ast} = parse(code);
    return ast;
}
export function parseAndGetSyntaxErrors(code: string): IAbreuLangError[] {
    const {errors} = parse(code);
    return errors;
}