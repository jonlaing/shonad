[shonad](../README.md) / [Exports](../modules.md) / func

# Namespace: func

## Table of contents

### Type aliases

- [Function](func.md#function)
- [Predicate](func.md#predicate)

### Functions

- [always](func.md#always)
- [compose](func.md#compose)
- [composeK](func.md#composek)
- [curry](func.md#curry)
- [curryN](func.md#curryn)
- [false\_](func.md#false_)
- [flip](func.md#flip)
- [fmap](func.md#fmap)
- [identity](func.md#identity)
- [pipe](func.md#pipe)
- [pipeK](func.md#pipek)
- [true\_](func.md#true_)

## Type aliases

### Function

Ƭ **Function**<`A`, `B`\>: (`a`: `A`) => `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `any` |
| `B` | `any` |

#### Type declaration

▸ (`a`): `B`

Helper type to make writing higher order functions less of
a slog.

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

`B`

#### Defined in

[src/base/Function.ts:7](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L7)

___

### Predicate

Ƭ **Predicate**<`A`\>: (`a`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Type declaration

▸ (`a`): `boolean`

Helper type to make writing filter functions less of
a slog

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Function.ts:12](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L12)

## Functions

### always

▸ **always**<`A`\>(`x`): (`a?`: `any`) => `A`

Returns a function that always returns the same value regardless
of the input.

**`example`**

```typescript
const true_ = always(true)
```

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `A` | value to always return |

#### Returns

`fn`

(a?: any) => x

▸ (`a?`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`A`

#### Defined in

[src/base/Function.ts:197](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L197)

___

### compose

▸ **compose**<`A`, `B`\>(...`funcs`): [`Function`](func.md#function)<`A`, `B`\>

Composes functions together, right-to-left.

**`example`**

```typescript
compose(f, g, h)(x) === f(g(h(x)))
```

**`see`** pipe

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | `Function`<`any`, `any`\>[] | A variadic list of functions to compose |

#### Returns

[`Function`](func.md#function)<`A`, `B`\>

A right-to-left composition of the supplied functions

#### Defined in

[src/base/Function.ts:86](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L86)

___

### composeK

▸ **composeK**<`C`\>(...`funcs`): [`Function`](func.md#function)<`any`, `C`\>

Returns right-to-left Kleisi composition of supplied functions.

**`example`**

```typescript
composeK(
 maybe.fmap(num.add(4)),
 dict.get('b),
 dict.get('a'),
)({ a: { b: 3 }}) // -> 7
```

**`see`** pipeK

**`see`** compose

**`see`** pipe

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Chainable`<`any`, `C`\> = `Chainable`<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | `Function`<`any`, `Chainable`<`any`\>\>[] | variadic list of functions that return a Monad |

#### Returns

[`Function`](func.md#function)<`any`, `C`\>

right-to-left composition of supplied function

#### Defined in

[src/base/Function.ts:118](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L118)

___

### curry

▸ **curry**<`Fn`\>(`f`): `Curry`<`Fn`\>

Curries all arguments for the supplied function.

**`example`**
```typescript
const add = (a: number, b: number) => number
const addC = curry(add)
const add3 = addC(3)

add3(4) // -> 7
```

**`see`** curryN

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `Function`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `Fn` | Function to be curried |

#### Returns

`Curry`<`Fn`\>

A curried function

#### Defined in

[src/base/Function.ts:66](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L66)

___

### curryN

▸ **curryN**<`Fn`\>(`n`, `f`): `Curry`<`Fn`\>

Curries N arguments for the supplied function.

**`example`**

```typescript
const add = (a: number, b: number) => number
const addC = curryN(1, add)
const add3 = addC(3)

add3(4) // -> 7
```

**`see`** curry

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends `Function`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | - |
| `f` | `Fn` | Function to be curried |

#### Returns

`Curry`<`Fn`\>

A curried function

#### Defined in

[src/base/Function.ts:44](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L44)

___

### false\_

▸ **false_**(`a?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

#### Returns

`boolean`

#### Defined in

[src/base/Function.ts:202](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L202)

___

### flip

▸ **flip**<`F`, `A`, `B`\>(`f`): (`b`: `B`, `a`: `A`) => `Return`<`F`\>(`b`: `B`) => (`a`: `A`) => `Return`<`F`\>

Flips the first two paramters of a function.

**`remarks`** This is a curried function

**`example`**

```typescript
const lessThan = (a: number, b: number) => a < b
const greaterThan = flip(lessThan)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function`<`any`, `any`\> |
| `A` | extends `any` = `Parameters`<`F`\>[``0``] |
| `B` | extends `any` = `Parameters`<`F`\>[``0``] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | (a: A, b: B) => C |

#### Returns

`fn`

f(a, b)

▸ (`b`, `a`): `Return`<`F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `B` |
| `a` | `A` |

##### Returns

`Return`<`F`\>

▸ (`b`): (`a`: `A`) => `Return`<`F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `B` |

##### Returns

`fn`

▸ (`a`): `Return`<`F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

`Return`<`F`\>

#### Defined in

[src/base/Function.ts:246](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L246)

▸ **flip**<`F`, `A`, `B`\>(`f`, `b`): (`a`: `Parameters`<`F`\>[``0``]) => `Function.Return`<`F`\>

Flips the first two paramters of a function.

**`remarks`** This is a curried function

**`example`**

```typescript
const lessThan = (a: number, b: number) => a < b
const greaterThan = flip(lessThan)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function`<`any`, `any`\> |
| `A` | extends `any` = `Parameters`<`F`\>[``0``] |
| `B` | extends `any` = `Parameters`<`F`\>[``0``] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | (a: A, b: B) => C |
| `b` | `Parameters`<`F`\>[``1``] | - |

#### Returns

`fn`

f(a, b)

▸ (`a`): `Function.Return`<`F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Parameters`<`F`\>[``0``] |

##### Returns

`Function.Return`<`F`\>

#### Defined in

[src/base/Function.ts:246](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L246)

▸ **flip**<`F`, `A`, `B`\>(`f`, `b`, `a`): `Function.Return`<`F`\>

Flips the first two paramters of a function.

**`remarks`** This is a curried function

**`example`**

```typescript
const lessThan = (a: number, b: number) => a < b
const greaterThan = flip(lessThan)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function`<`any`, `any`\> |
| `A` | extends `any` = `Parameters`<`F`\>[``0``] |
| `B` | extends `any` = `Parameters`<`F`\>[``0``] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | (a: A, b: B) => C |
| `b` | `B` | - |
| `a` | `A` | - |

#### Returns

`Function.Return`<`F`\>

f(a, b)

#### Defined in

[src/base/Function.ts:246](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L246)

___

### fmap

▸ **fmap**<`A`, `B`, `C`\>(`f`): (`x`: [`Function`](func.md#function)<`A`, `B`\>) => [`Function`](func.md#function)<`A`, `C`\>

Implementing [Functor](../classes/functor.Functor.md) for Function Arrows. This is synonymous
with [compose](func.md#compose).

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`Function`](func.md#function)<`B`, `C`\> | b => c |

#### Returns

`fn`

a => c

▸ (`x`): [`Function`](func.md#function)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Function`](func.md#function)<`A`, `B`\> |

##### Returns

[`Function`](func.md#function)<`A`, `C`\>

#### Defined in

[src/base/Function.ts:277](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L277)

▸ **fmap**<`A`, `B`, `C`\>(`f`, `x`): [`Function`](func.md#function)<`A`, `C`\>

Implementing [Functor](../classes/functor.Functor.md) for Function Arrows. This is synonymous
with [compose](func.md#compose).

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`Function`](func.md#function)<`B`, `C`\> | b => c |
| `x` | [`Function`](func.md#function)<`A`, `B`\> | a => b |

#### Returns

[`Function`](func.md#function)<`A`, `C`\>

a => c

#### Defined in

[src/base/Function.ts:277](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L277)

___

### identity

▸ **identity**<`A`\>(`x`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |

#### Returns

`A`

#### Defined in

[src/base/Function.ts:206](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L206)

___

### pipe

▸ **pipe**<`A`, `B`\>(...`funcs`): [`Function`](func.md#function)<`A`, `B`\>

Composes functions together, left-to-right.

**`example`**

```typescript
pipe(f, g, h)(x) === h(g(f(x)))
```

**`see`** compose

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | `Function`<`any`, `any`\>[] | A variadic list of functions to compose |

#### Returns

[`Function`](func.md#function)<`A`, `B`\>

A left-to-right composition of the supplied functions

#### Defined in

[src/base/Function.ts:180](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L180)

___

### pipeK

▸ **pipeK**<`C`\>(...`funcs`): [`Function`](func.md#function)<`any`, `C`\>

Returns left-to-right Kleisi composition of supplied functions.

**`example`**

```typescript
composeK(
 dict.get('a'),
 dict.get('b),
 maybe.fmap(num.add(4)),
)({ a: { b: 3 }}) // -> 7
```

**`see`** composeK

**`see`** compose

**`see`** pipe

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `Chainable`<`any`, `C`\> = `Chainable`<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | `Function`<`any`, `Chainable`<`any`\>\>[] | variadic list of functions that return a Monad |

#### Returns

[`Function`](func.md#function)<`any`, `C`\>

left-to-right composition of supplied function

#### Defined in

[src/base/Function.ts:153](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L153)

___

### true\_

▸ **true_**(`a?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

#### Returns

`boolean`

#### Defined in

[src/base/Function.ts:204](https://github.com/jonlaing/shonad/blob/5730a6e/src/base/Function.ts#L204)
