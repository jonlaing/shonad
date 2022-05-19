[shonad](../README.md) / [Exports](../modules.md) / lens

# Namespace: lens

## Table of contents

### Type aliases

- [GetterFn](lens.md#getterfn)
- [Lens](lens.md#lens)
- [SetterFn](lens.md#setterfn)

### Variables

- [head](lens.md#head)
- [nonEmptyDict](lens.md#nonemptydict)
- [nonEmptyList](lens.md#nonemptylist)
- [nonEmptyString](lens.md#nonemptystring)
- [tail](lens.md#tail)

### Functions

- [compose](lens.md#compose)
- [index](lens.md#index)
- [lens](lens.md#lens-1)
- [optional](lens.md#optional)
- [or](lens.md#or)
- [over](lens.md#over)
- [pipe](lens.md#pipe)
- [prop](lens.md#prop)
- [set](lens.md#set)
- [view](lens.md#view)
- [viewE](lens.md#viewe)
- [when](lens.md#when)

## Type aliases

### GetterFn

Ƭ **GetterFn**<`A`, `B`\>: `Function.Function`<[`A`], `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

[src/control/Lens.ts:8](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L8)

___

### Lens

Ƭ **Lens**<`A`, `B`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | [`GetterFn`](lens.md#getterfn)<`A`, `B`\> |
| `set` | [`SetterFn`](lens.md#setterfn)<`A`, `B`\> |

#### Defined in

[src/control/Lens.ts:10](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L10)

___

### SetterFn

Ƭ **SetterFn**<`A`, `B`\>: `Function.Function`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

[src/control/Lens.ts:9](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L9)

## Variables

### head

• `Const` **head**: [`Lens`](lens.md#lens)<`any`[], [`Maybe`](../classes/maybe.Maybe.md)<`any`\>\>

#### Defined in

[src/control/Lens.ts:101](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L101)

___

### nonEmptyDict

• `Const` **nonEmptyDict**: [`Lens`](lens.md#lens)<[`Dict`](dict.md#dict)<`any`\>, [`Maybe`](../classes/maybe.Maybe.md)<[`Dict`](dict.md#dict)<`any`\>\>\>

#### Defined in

[src/control/Lens.ts:178](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L178)

___

### nonEmptyList

• `Const` **nonEmptyList**: [`Lens`](lens.md#lens)<`any`[], [`Maybe`](../classes/maybe.Maybe.md)<`any`[]\>\>

#### Defined in

[src/control/Lens.ts:173](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L173)

___

### nonEmptyString

• `Const` **nonEmptyString**: [`Lens`](lens.md#lens)<`string`, [`Maybe`](../classes/maybe.Maybe.md)<`string`\>\>

#### Defined in

[src/control/Lens.ts:168](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L168)

___

### tail

• `Const` **tail**: [`Lens`](lens.md#lens)<`any`[], [`Maybe`](../classes/maybe.Maybe.md)<`any`[]\>\>

#### Defined in

[src/control/Lens.ts:111](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L111)

## Functions

### compose

▸ **compose**<`A`, `B`\>(...`lenses`): [`Lens`](lens.md#lens)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lenses` | [`Lens`](lens.md#lens)<`any`, `any`\>[] |

#### Returns

[`Lens`](lens.md#lens)<`A`, `B`\>

#### Defined in

[src/control/Lens.ts:93](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L93)

___

### index

▸ **index**<`A`\>(`i`): [`Lens`](lens.md#lens)<`A`[], [`Maybe`](../classes/maybe.Maybe.md)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

[`Lens`](lens.md#lens)<`A`[], [`Maybe`](../classes/maybe.Maybe.md)<`A`\>\>

#### Defined in

[src/control/Lens.ts:121](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L121)

___

### lens

▸ **lens**<`A`, `B`\>(`getter`, `setter`): [`Lens`](lens.md#lens)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | [`GetterFn`](lens.md#getterfn)<`A`, `B`\> |
| `setter` | [`SetterFn`](lens.md#setterfn)<`A`, `B`\> |

#### Returns

[`Lens`](lens.md#lens)<`A`, `B`\>

#### Defined in

[src/control/Lens.ts:15](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L15)

___

### optional

▸ **optional**<`A`\>(`fallback`): [`Lens`](lens.md#lens)<[`Maybe`](../classes/maybe.Maybe.md)<`A`\>, `A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

#### Returns

[`Lens`](lens.md#lens)<[`Maybe`](../classes/maybe.Maybe.md)<`A`\>, `A`\>

#### Defined in

[src/control/Lens.ts:96](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L96)

___

### or

▸ **or**<`A`, `B`, `C`\>(`l1`, `l0`): [`Lens`](lens.md#lens)<`A`, [`Maybe`](../classes/maybe.Maybe.md)<`C`\> \| [`Maybe`](../classes/maybe.Maybe.md)<`B`\>\>

Forks a lens. If the second lens returns `Nothing` then it will use
the first lens.

**`remarks`**

This is backward from how you might expect `or' to work. This is to
support currying and partial application

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l1` | [`Lens`](lens.md#lens)<`A`, [`Maybe`](../classes/maybe.Maybe.md)<`C`\>\> | Lens that returns a `Maybe c` |
| `l0` | [`Lens`](lens.md#lens)<`A`, [`Maybe`](../classes/maybe.Maybe.md)<`B`\>\> | Lens that returns a `Maybe b` |

#### Returns

[`Lens`](lens.md#lens)<`A`, [`Maybe`](../classes/maybe.Maybe.md)<`C`\> \| [`Maybe`](../classes/maybe.Maybe.md)<`B`\>\>

a Lens of `Maybe b` or `Maybe c`

#### Defined in

[src/control/Lens.ts:146](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L146)

___

### over

▸ **over**<`A`, `B`\>(`lens`): (`f`: (`b`: `B`) => `B`, `data`: `A`) => `A`(`f`: (`b`: `B`) => `B`) => (`data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |

#### Returns

`fn`

▸ (`f`, `data`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => `B` |
| `data` | `A` |

##### Returns

`A`

▸ (`f`): (`data`: `A`) => `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => `B` |

##### Returns

`fn`

▸ (`data`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

`A`

#### Defined in

[src/control/Lens.ts:76](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L76)

▸ **over**<`A`, `B`\>(`lens`, `f`): (`data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |
| `f` | (`b`: `B`) => `B` |

#### Returns

`fn`

▸ (`data`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

`A`

#### Defined in

[src/control/Lens.ts:76](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L76)

▸ **over**<`A`, `B`\>(`lens`, `f`, `data`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |
| `f` | (`b`: `B`) => `B` |
| `data` | `A` |

#### Returns

`A`

#### Defined in

[src/control/Lens.ts:76](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L76)

___

### pipe

▸ **pipe**<`A`, `B`\>(...`lenses`): [`Lens`](lens.md#lens)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lenses` | [`Lens`](lens.md#lens)<`any`, `any`\>[] |

#### Returns

[`Lens`](lens.md#lens)<`A`, `B`\>

#### Defined in

[src/control/Lens.ts:81](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L81)

___

### prop

▸ **prop**<`A`\>(`k`): [`Lens`](lens.md#lens)<`any`, [`Maybe`](../classes/maybe.Maybe.md)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

[`Lens`](lens.md#lens)<`any`, [`Maybe`](../classes/maybe.Maybe.md)<`A`\>\>

#### Defined in

[src/control/Lens.ts:127](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L127)

___

### set

▸ **set**<`A`, `B`\>(`lens`): (`val`: `B`, `data`: `A`) => `A`(`val`: `B`) => (`data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |

#### Returns

`fn`

▸ (`val`, `data`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `B` |
| `data` | `A` |

##### Returns

`A`

▸ (`val`): (`data`: `A`) => `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `B` |

##### Returns

`fn`

▸ (`data`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

`A`

#### Defined in

[src/control/Lens.ts:63](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L63)

▸ **set**<`A`, `B`\>(`lens`, `val`): (`data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |
| `val` | `B` |

#### Returns

`fn`

▸ (`data`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

`A`

#### Defined in

[src/control/Lens.ts:63](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L63)

▸ **set**<`A`, `B`\>(`lens`, `val`, `data`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |
| `val` | `B` |
| `data` | `A` |

#### Returns

`A`

#### Defined in

[src/control/Lens.ts:63](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L63)

___

### view

▸ **view**<`A`, `B`\>(`lens`): (`data`: `A`) => `B`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |

#### Returns

`fn`

▸ (`data`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

`B`

#### Defined in

[src/control/Lens.ts:26](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L26)

▸ **view**<`A`, `B`\>(`lens`, `data`): `B`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, `B`\> |
| `data` | `A` |

#### Returns

`B`

#### Defined in

[src/control/Lens.ts:26](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L26)

___

### viewE

▸ **viewE**<`A`, `B`\>(`lens`): (`error`: `string`, `data`: `A`) => [`Either`](../classes/either.Either.md)<`string`, `B`\>(`error`: `string`) => (`data`: `A`) => [`Either`](../classes/either.Either.md)<`string`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, [`Maybe`](../classes/maybe.Maybe.md)<`B`\>\> |

#### Returns

`fn`

▸ (`error`, `data`): [`Either`](../classes/either.Either.md)<`string`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `data` | `A` |

##### Returns

[`Either`](../classes/either.Either.md)<`string`, `B`\>

▸ (`error`): (`data`: `A`) => [`Either`](../classes/either.Either.md)<`string`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |

##### Returns

`fn`

▸ (`data`): [`Either`](../classes/either.Either.md)<`string`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

[`Either`](../classes/either.Either.md)<`string`, `B`\>

#### Defined in

[src/control/Lens.ts:46](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L46)

▸ **viewE**<`A`, `B`\>(`lens`, `error`): (`data`: `A`) => [`Either`](../classes/either.Either.md)<`string`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, [`Maybe`](../classes/maybe.Maybe.md)<`B`\>\> |
| `error` | `string` |

#### Returns

`fn`

▸ (`data`): [`Either`](../classes/either.Either.md)<`string`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

[`Either`](../classes/either.Either.md)<`string`, `B`\>

#### Defined in

[src/control/Lens.ts:46](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L46)

▸ **viewE**<`A`, `B`\>(`lens`, `error`, `data`): [`Either`](../classes/either.Either.md)<`string`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`A`, [`Maybe`](../classes/maybe.Maybe.md)<`B`\>\> |
| `error` | `string` |
| `data` | `A` |

#### Returns

[`Either`](../classes/either.Either.md)<`string`, `B`\>

#### Defined in

[src/control/Lens.ts:46](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L46)

___

### when

▸ **when**<`A`\>(`pred`): [`Lens`](lens.md#lens)<`A`[], [`Maybe`](../classes/maybe.Maybe.md)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |

#### Returns

[`Lens`](lens.md#lens)<`A`[], [`Maybe`](../classes/maybe.Maybe.md)<`A`\>\>

#### Defined in

[src/control/Lens.ts:163](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Lens.ts#L163)
