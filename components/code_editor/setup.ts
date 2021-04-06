import * as monaco from "monaco-editor-core";
import { languageExtensionPoint, languageID } from "./config";
import { monarchLanguage } from "./abreuLang";
import { AbreuLangWorker } from "./abreuLangWorker";
import { WorkerManager } from "./WorkerManager";
import DiagnosticsAdapter from "./DiagnosticsAdapter";

export function setupLanguage() {
    (window as any).MonacoEnvironment = {
        getWorkerUrl: function (moduleId: any, label: any) {
            if (label === languageID)
                return "./abreuLangWorker.js";
            return './editor.worker.js';
        }
    }
    monaco.languages.register(languageExtensionPoint);

    const configuration = monaco.languages.LanguageConfiguration;
   
  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
    monaco.languages.setLanguageConfiguration(languageID, configuration);
    const client = new WorkerManager();

    const worker: WorkerAccessor = (...uris: monaco.Uri[]): Promise<AbreuLangWorker> => {
        return client.getLanguageServiceWorker(...uris);
    };
    //Call the errors provider
    new DiagnosticsAdapter(worker);
});

}

export type WorkerAccessor = (...uris: monaco.Uri[]) => Promise<AbreuLangWorker>;
