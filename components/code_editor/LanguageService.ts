import { AbreuExpressionsContext } from './ANTLR/components/code_editor/abreuLangGrammarParser';
import { parseAndGetASTRoot, parseAndGetSyntaxErrors } from './parser';
import { IAbreuLangError } from './abreuLangErrorListener';

export default class AbreuLangLanguageService {
    validate(code: string): IAbreuLangError[] {
        const syntaxErrors: IAbreuLangError[] = parseAndGetSyntaxErrors(code);
        //Later we will append semantic errors
        return syntaxErrors;
    }
}