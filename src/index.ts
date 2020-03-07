import { IncomingHttpHeaders } from 'http';
import { HTMLElement as NodeHTMLElement } from 'node-html-parser';

export interface ICommonParams {
	body?: unknown;
	cookie: {
		[name: string]: string;
	};
	data: unknown;
	headers: {
		[key: string]: string;
	};
	params: unknown;
	query: unknown;
	remote_address: string;
	url: string;
	[key: string]: unknown;
}

export type IHeaders = IncomingHttpHeaders;

export interface IAi {
	readonly data: {
		readonly [attr: string]: unknown;
	};
	fire(action: string, ...args: unknown[]): Promise<unknown>;
	emit(event: string, ...args: unknown[]): Promise<unknown>;
}

export default interface IAiNodejsComponent extends IAi {
	readonly data: {
		readonly [attr: string]: unknown;
		readonly msg: ICommonParams;
		readonly headers: IHeaders;
		readonly actionid: string;
		readonly no: string;
		readonly node: NodeHTMLElement;
		readonly params: { [key: string]: unknown };
		readonly url: string;
	};
	// eslint-disable-next-line semi
}
