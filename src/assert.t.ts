import { describe, it } from '@xutl/test';

import { assert, equal, deep } from './assert';
import { assertAssertion } from './assertion';

describe('assertions', () => {
	describe('assert', () => {
		it('assert(1)', () => assert(1));
		it('assert(true)', () => assert(true));
		it('throws assert(false)', () => {
			try {
				assert(false);
			} catch (err) {
				assertAssertion(err);
				equal(err.actual, false);
				equal(err.expected, true);
			}
		});
		it('throws assert(null)', () => {
			try {
				assert(null);
			} catch (err) {
				assertAssertion(err);
				equal(err.actual, null);
				equal(err.expected, true);
			}
		});
		it('throws assert(false) with message', () => {
			const cause = {};
			try {
				assert(false, 'my message', cause);
				throw new Error('bad assertion');
			} catch (err) {
				assertAssertion(err);
				equal(err.message, 'assert: my message');
				equal(err.cause, cause, 'assertion has cause');
			}
		});
	});
	describe('equal', () => {
		it('1 === 1', () => equal(1, 1));
		it('1 !== "1"', () => {
			try {
				equal(1, '1');
			} catch (err) {
				assertAssertion(err);
				assert(err.actual === 1);
				assert(err.expected === '1');
			}
		});
		it('false !== null', () => {
			try {
				equal(false, null);
			} catch (err) {
				assertAssertion(err);
				assert(err.actual === false);
				assert(err.expected === null);
			}
		});
		it('throws equal(false, 0) with message', () => {
			const cause = {};
			try {
				equal(false, 0, 'my message', cause);
				throw new Error('bad assertion');
			} catch (err) {
				assertAssertion(err);
				equal(err.message, 'assert: my message');
				equal(err.cause, cause, 'assertion has cause');
			}
		});
	});
	describe('deep', () => {
		const a = { a: 'a', b: 1, c: '0' };
		const b = JSON.parse(JSON.stringify(a));
		const c = JSON.parse(JSON.stringify(a));
		c.b = `${c.b}`;

		it('a deep b', () => deep(b, a));
		it('a deep c', () => {
			try {
				deep(c, a);
			} catch (err) {
				assertAssertion(err);
				equal(err.actual, c);
				equal(err.expected, a);
			}
		});
	});
});
