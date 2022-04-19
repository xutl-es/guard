# @xutl/guard

One [eXtremely Useful Tool Library](https://xutl.es) to facilitate dealing with Error objects in TypeScript.

## Install

```bash
npm install --save-dev @xutl/guard
```

## Usage

```typescript
import { assert, equal, deep } from '@xutl/guard';

import { isError, assertError } from '@xutl/guard';
import { isSystemError, assertSystemError } from '@xutl/guard';
import { isAssertion, assertAssertion } from '@xutl/guard';

```

## API

### Assertion Functions

- `function assert(value: any, message?: string, cause?: any) : void`
- `function equal(actual: any, expected: any, message?: string, cause?: any) : void`
- `function deep(actual: any, expected: any, message?: string, cause?: any) : void`

### Error Types

- `type SystemError = Error & { code: string }`
- `type Assertion = SystemError & { code : 'ERR_ASSERTION' }`

### Error Guards

- `function isError(value: any) : value is Error`
- `function assertError(value: any) : asserts value is Error`
- `function isSystemError(value: any) : value is SystemError`
- `function assertSystemError(value: any) : asserts value is SystemError`
- `function isAssertion(value: any) : value is Assertion`
- `function assertAssertion(value: any) : asserts value is Assertion`

## License

Copyright 2022 xutl.es

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
