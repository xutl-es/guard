export type SystemError = Error & { code: string } & { cause?: any };

import { assert } from './assert';
import { testError } from './error';

export function isSystemError(value: any): value is SystemError {
	return testError(value) && 'code' in value && 'string' === typeof value.code;
}
export function assertSystemError(value: any): asserts value is SystemError {
	assert(isSystemError(value), 'value is a system Error', value);
}
