import { assert } from './assert';

export function testError(value: any): boolean {
	if (!value) return false;
	if (!('message' in value) || !('string' === typeof value.message)) return false;
	if (!('stack' in value)) return false;
	return true;
}
export function isError(value: any): value is Error & { cause?: any } {
	return testError(value);
}
export function assertError(value: any): asserts value is Error & { cause?: any } {
	assert(testError(value), 'value is an Error', value);
}
