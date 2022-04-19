import { describe, it } from '@xutl/test';
import { assert, equal } from './assert';

import { isAssertion, assertAssertion } from './assertion';

describe('Assertion', () => {
	it('isAssertion is a function', () => equal('function', typeof isAssertion));
	it('assertAssertion is a function', () => equal('function', typeof assertAssertion));
	it('assertion isAssertion', () => {
		try {
			assert(false);
		} catch (err) {
			assert(isAssertion(err));
		}
	});
	it('assertion assertAssertion', () => {
		try {
			assert(false);
		} catch (err) {
			assertAssertion(err);
		}
	});
	it('new Error not isAssertion', () => {
		assert(!isAssertion(new Error()));
	});
	it('newError assertAssertion', () => {
		try {
			assertAssertion(new Error());
			assert(false, 'bad assertion');
		} catch (err) {
			assertAssertion(err);
		}
	});
});
