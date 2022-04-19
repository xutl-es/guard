import type { Assertion } from './assertion';

export function equal(actual: any, expected: any, msg?: string, cause?: any): void {
	if (actual === expected) return;
	//@ts-expect-error
	const err: Partial<Assertion> = new Error(`assert: ${msg ?? 'failed'}`, { cause });
	err.code = 'ERR_ASSERTION';
	err.actual = actual;
	err.expected = expected;
	throw err as Assertion;
}

export function assert(value: any, msg?: string, cause?: any) {
	if (!value) return equal(value, true, msg, cause);
}

export function deep(actual: any, expected: any, msg?: string, cause?: any) {
	try {
		if ('object' !== typeof actual || 'object' !== typeof expected || !actual || !expected) {
			return equal(actual, expected, msg, cause);
		}
		const keys = Object.keys(actual);
		equal(keys.join('\0'), Object.keys(expected).join('\0'), msg, cause);
		for (const key of keys) {
			deep(actual[key], expected[key], msg, cause);
		}
	} catch (err) {
		equal(actual, expected, msg, err);
	}
}
