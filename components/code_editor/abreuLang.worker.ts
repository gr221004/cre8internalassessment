import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker.js';
import { AbreuLangWorker } from './abreuLangWorker';

self.onmessage = () => {
	worker.initialize((ctx: any) => {
		return new AbreuLangWorker(ctx)
	});
};