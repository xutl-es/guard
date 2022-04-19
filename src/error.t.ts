import { describe, it } from '@xutl/test';
import { assert, equal } from './assert';
import { assertAssertion } from './assertion';

import { isError, assertError } from './error';

describe('Error', () => {
	it('isError is a function', () => equal('function', typeof isError));
	it('assertError is a function', () => equal('function', typeof assertError));
	it('new Error isError', () => {
		assert(isError(new Error()));
	});
	it('object not isError', () => {
		assert(!isError({}));
	});
	it('new Error assertError', () => {
		assertError(new Error());
	});
	it('throws assertError object', () => {
		try {
			assertError({});
			assert(false, 'bad assertion');
		} catch (err) {
			assertAssertion(err);
		}
	});
});
