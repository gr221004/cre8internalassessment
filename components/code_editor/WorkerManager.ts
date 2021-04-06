import * as monaco from "monaco-editor-core";

import Uri = monaco.Uri;
import { AbreuLangWorker } from './abreuLangWorker';
import { languageID } from './config';

export class WorkerManager {

	private worker: monaco.editor.MonacoWebWorker<AbreuLangWorker>;
	private workerClientProxy: Promise<AbreuLangWorker>;

	constructor() {
		this.worker = null;
	}

	private getClientproxy(): Promise<AbreuLangWorker> {

		if (!this.workerClientProxy) {
			this.worker = monaco.editor.createWebWorker<AbreuLangWorker>({
				// module that exports the create() method and returns a `JSONWorker` instance
				moduleId: 'AbreuLangWorker',
				label: languageID,
				// passed in to the create() method
				createData: {
					languageId: languageID,
				}
			});

			this.workerClientProxy = <Promise<AbreuLangWorker>><any>this.worker.getProxy();
		}

		return this.workerClientProxy;
	}

	async getLanguageServiceWorker(...resources: Uri[]): Promise<AbreuLangWorker> {
		const _client: AbreuLangWorker = await this.getClientproxy();
		await this.worker.withSyncedResources(resources)
		return _client;
	}
}