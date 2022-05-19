[shonad](../README.md) / [Exports](../modules.md) / [base](base.md) / functions

# Namespace: functions

[base](base.md).functions

## Table of contents

### Type aliases

- [Function](base.functions.md#function)
- [Predicate](base.functions.md#predicate)

### Functions

- [always](base.functions.md#always)
- [compose](base.functions.md#compose)
- [composeK](base.functions.md#composek)
- [curry](base.functions.md#curry)
- [curryN](base.functions.md#curryn)
- [false\_](base.functions.md#false_)
- [flip](base.functions.md#flip)
- [fmap](base.functions.md#fmap)
- [identity](base.functions.md#identity)
- [pipe](base.functions.md#pipe)
- [pipeK](base.functions.md#pipek)
- [true\_](base.functions.md#true_)

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

[src/base/Function.ts:7](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L7)

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

[src/base/Function.ts:12](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L12)

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

[src/base/Function.ts:197](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L197)

___

### compose

▸ **compose**<`A`, `B`\>(...`funcs`): [`Function`](base.functions.md#function)<`A`, `B`\>

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

[`Function`](base.functions.md#function)<`A`, `B`\>

A right-to-left composition of the supplied functions

#### Defined in

[src/base/Function.ts:86](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L86)

___

### composeK

▸ **composeK**<`C`\>(...`funcs`): [`Function`](base.functions.md#function)<`any`, `C`\>

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

[`Function`](base.functions.md#function)<`any`, `C`\>

right-to-left composition of supplied function

#### Defined in

[src/base/Function.ts:118](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L118)

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

[src/base/Function.ts:66](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L66)

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

[src/base/Function.ts:44](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L44)

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

[src/base/Function.ts:202](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L202)

___

### flip

▸ **flip**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

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
| `P` | extends [f: Function<any, any\> \| x, b: any, a: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [f: Function<any, any\>, b: any, a: any]\> |
| `R` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [f: Function<any, any\> \| x, b: any, a: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

f(a, b)

#### Defined in

[src/base/Function.ts:225](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L225)

___

### fmap

▸ **fmap**<`A`, `B`, `C`\>(`f`): (`x`: [`Function`](base.functions.md#function)<`A`, `B`\>) => [`Function`](base.functions.md#function)<`A`, `C`\>

Implementing [Functor](../classes/control.functor.Functor.md) for Function Arrows. This is synonymous
with [compose](base.functions.md#compose).

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`Function`](base.functions.md#function)<`B`, `C`\> | b => c |

#### Returns

`fn`

a => c

▸ (`x`): [`Function`](base.functions.md#function)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Function`](base.functions.md#function)<`A`, `B`\> |

##### Returns

[`Function`](base.functions.md#function)<`A`, `C`\>

#### Defined in

[src/base/Function.ts:251](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L251)

▸ **fmap**<`A`, `B`, `C`\>(`f`, `x`): [`Function`](base.functions.md#function)<`A`, `C`\>

Implementing [Functor](../classes/control.functor.Functor.md) for Function Arrows. This is synonymous
with [compose](base.functions.md#compose).

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | [`Function`](base.functions.md#function)<`B`, `C`\> | b => c |
| `x` | [`Function`](base.functions.md#function)<`A`, `B`\> | a => b |

#### Returns

[`Function`](base.functions.md#function)<`A`, `C`\>

a => c

#### Defined in

[src/base/Function.ts:251](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L251)

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

[src/base/Function.ts:206](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L206)

___

### pipe

▸ **pipe**<`A`, `B`\>(...`funcs`): [`Function`](base.functions.md#function)<`A`, `B`\>

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

[`Function`](base.functions.md#function)<`A`, `B`\>

A left-to-right composition of the supplied functions

#### Defined in

[src/base/Function.ts:180](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L180)

___

### pipeK

▸ **pipeK**<`C`\>(...`funcs`): [`Function`](base.functions.md#function)<`any`, `C`\>

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

[`Function`](base.functions.md#function)<`any`, `C`\>

left-to-right composition of supplied function

#### Defined in

[src/base/Function.ts:153](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L153)

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

[src/base/Function.ts:204](https://github.com/jonlaing/shonad/blob/1b075e8/src/base/Function.ts#L204)
