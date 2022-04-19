import type { SystemError } from './system';
export type Assertion = SystemError & { code: 'ERR_ASSERTION' } & { actual: unknown; expected: unknown };

import { testError } from './error';
import { assert } from './assert';

export function isAssertion(value: any): value is Assertion {
	if (!testError(value)) return false;
	if (!('code' in value) || 'ERR_ASSERTION' !== value.code) return false;
	if (!('actual' in value) || !('expected' in value)) return false;
	return true;
}
export function assertAssertion(value: any): asserts value is Assertion {
	assert(isAssertion(value), 'value is ');
}
