import { describe, it } from '@xutl/test';
import { assert, equal } from './assert';
import { assertAssertion } from './assertion';

import { isSystemError, assertSystemError } from './system';

describe('System Error', () => {
	it('isSystemError is a function', () => equal('function', typeof isSystemError));
	it('assertSystemError is a function', () => equal('function', typeof assertSystemError));
	it('assertion isSystemError', () => {
		try {
			assert(false);
		} catch (err) {
			assert(isSystemError(err));
		}
	});
	it('assertion assertSystemError', () => {
		try {
			assert(false);
		} catch (err) {
			assertSystemError(err);
		}
	});
	it('new Error not isSystemError', () => {
		assert(!isSystemError(new Error()));
	});
	it('newError assertSystemError', () => {
		try {
			assertSystemError(new Error());
			assert(false, 'bad assertion');
		} catch (err) {
			assertAssertion(err);
		}
	});
});
