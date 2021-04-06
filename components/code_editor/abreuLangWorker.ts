import * as monaco from "monaco-editor-core";

import IWorkerContext = monaco.worker.IWorkerContext;
import AbreuLangLanguageService from "./LanguageService";
import { IAbreuLangError } from './abreuLangErrorListener';


export class AbreuLangWorker {

    private _ctx: IWorkerContext;
    private languageService: AbreuLangLanguageService;
    constructor(ctx: IWorkerContext) {
        this._ctx = ctx;
        this.languageService = new AbreuLangLanguageService();
    }

    doValidation(): Promise<IAbreuLangError[]> {
        const code = this.getTextDocument();
        return Promise.resolve(this.languageService.validate(code));
    }
    private getTextDocument(): string {
        const model = this._ctx.getMirrorModels()[0];// When there are multiple files open, this will be an array
        return model.getValue();
    }

}