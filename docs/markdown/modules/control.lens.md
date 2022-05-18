[shonad](../README.md) / [Exports](../modules.md) / [control](control.md) / lens

# Namespace: lens

[control](control.md).lens

## Table of contents

### Type aliases

- [GetterFn](control.lens.md#getterfn)
- [Lens](control.lens.md#lens)
- [SetterFn](control.lens.md#setterfn)

### Variables

- [head](control.lens.md#head)
- [nonEmptyDict](control.lens.md#nonemptydict)
- [nonEmptyList](control.lens.md#nonemptylist)
- [nonEmptyString](control.lens.md#nonemptystring)
- [tail](control.lens.md#tail)

### Functions

- [compose](control.lens.md#compose)
- [index](control.lens.md#index)
- [lens](control.lens.md#lens-1)
- [optional](control.lens.md#optional)
- [or](control.lens.md#or)
- [over](control.lens.md#over)
- [pipe](control.lens.md#pipe)
- [prop](control.lens.md#prop)
- [set](control.lens.md#set)
- [view](control.lens.md#view)
- [viewE](control.lens.md#viewe)
- [when](control.lens.md#when)

## Type aliases

### GetterFn

Ƭ **GetterFn**<`A`, `B`\>: `Function.Function`<[`A`], `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

[src/control/Lens.ts:8](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L8)

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
| `get` | [`GetterFn`](control.lens.md#getterfn)<`A`, `B`\> |
| `set` | [`SetterFn`](control.lens.md#setterfn)<`A`, `B`\> |

#### Defined in

[src/control/Lens.ts:10](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L10)

___

### SetterFn

Ƭ **SetterFn**<`A`, `B`\>: `Function.Function`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

[src/control/Lens.ts:9](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L9)

## Variables

### head

• `Const` **head**: [`Lens`](control.lens.md#lens)<`any`[], [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>\>

#### Defined in

[src/control/Lens.ts:88](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L88)

___

### nonEmptyDict

• `Const` **nonEmptyDict**: [`Lens`](control.lens.md#lens)<[`Dict`](data.dict.md#dict)<`any`\>, [`Maybe`](../classes/data.maybe.Maybe.md)<[`Dict`](data.dict.md#dict)<`any`\>\>\>

#### Defined in

[src/control/Lens.ts:165](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L165)

___

### nonEmptyList

• `Const` **nonEmptyList**: [`Lens`](control.lens.md#lens)<`any`[], [`Maybe`](../classes/data.maybe.Maybe.md)<`any`[]\>\>

#### Defined in

[src/control/Lens.ts:160](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L160)

___

### nonEmptyString

• `Const` **nonEmptyString**: [`Lens`](control.lens.md#lens)<`string`, [`Maybe`](../classes/data.maybe.Maybe.md)<`string`\>\>

#### Defined in

[src/control/Lens.ts:155](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L155)

___

### tail

• `Const` **tail**: [`Lens`](control.lens.md#lens)<`any`[], [`Maybe`](../classes/data.maybe.Maybe.md)<`any`[]\>\>

#### Defined in

[src/control/Lens.ts:98](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L98)

## Functions

### compose

▸ **compose**<`A`, `B`\>(...`lenses`): [`Lens`](control.lens.md#lens)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lenses` | [`Lens`](control.lens.md#lens)<`any`, `any`\>[] |

#### Returns

[`Lens`](control.lens.md#lens)<`A`, `B`\>

#### Defined in

[src/control/Lens.ts:80](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L80)

___

### index

▸ **index**<`A`\>(`i`): [`Lens`](control.lens.md#lens)<`A`[], [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

[`Lens`](control.lens.md#lens)<`A`[], [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>\>

#### Defined in

[src/control/Lens.ts:108](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L108)

___

### lens

▸ **lens**<`A`, `B`\>(`getter`, `setter`): [`Lens`](control.lens.md#lens)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | [`GetterFn`](control.lens.md#getterfn)<`A`, `B`\> |
| `setter` | [`SetterFn`](control.lens.md#setterfn)<`A`, `B`\> |

#### Returns

[`Lens`](control.lens.md#lens)<`A`, `B`\>

#### Defined in

[src/control/Lens.ts:15](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L15)

___

### optional

▸ **optional**<`A`\>(`fallback`): [`Lens`](control.lens.md#lens)<[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>, `A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

#### Returns

[`Lens`](control.lens.md#lens)<[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>, `A`\>

#### Defined in

[src/control/Lens.ts:83](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L83)

___

### or

▸ **or**<`A`, `B`, `C`\>(`l1`, `l0`): [`Lens`](control.lens.md#lens)<`A`, [`Maybe`](../classes/data.maybe.Maybe.md)<`C`\> \| [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\>

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
| `l1` | [`Lens`](control.lens.md#lens)<`A`, [`Maybe`](../classes/data.maybe.Maybe.md)<`C`\>\> | Lens that returns a `Maybe c` |
| `l0` | [`Lens`](control.lens.md#lens)<`A`, [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> | Lens that returns a `Maybe b` |

#### Returns

[`Lens`](control.lens.md#lens)<`A`, [`Maybe`](../classes/data.maybe.Maybe.md)<`C`\> \| [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\>

a Lens of `Maybe b` or `Maybe c`

#### Defined in

[src/control/Lens.ts:133](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L133)

___

### over

▸ **over**<`A`, `B`\>(`lens`): (`f`: (`b`: `B`) => `B`, `data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |

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

#### Defined in

[src/control/Lens.ts:63](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L63)

▸ **over**<`A`, `B`\>(`lens`, `f`): (`data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |
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

[src/control/Lens.ts:63](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L63)

▸ **over**<`A`, `B`\>(`lens`, `f`, `data`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |
| `f` | (`b`: `B`) => `B` |
| `data` | `A` |

#### Returns

`A`

#### Defined in

[src/control/Lens.ts:63](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L63)

___

### pipe

▸ **pipe**<`A`, `B`\>(...`lenses`): [`Lens`](control.lens.md#lens)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lenses` | [`Lens`](control.lens.md#lens)<`any`, `any`\>[] |

#### Returns

[`Lens`](control.lens.md#lens)<`A`, `B`\>

#### Defined in

[src/control/Lens.ts:68](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L68)

___

### prop

▸ **prop**<`A`\>(`k`): [`Lens`](control.lens.md#lens)<`any`, [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

[`Lens`](control.lens.md#lens)<`any`, [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>\>

#### Defined in

[src/control/Lens.ts:114](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L114)

___

### set

▸ **set**<`A`, `B`\>(`lens`): (`val`: `B`, `data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |

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

#### Defined in

[src/control/Lens.ts:55](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L55)

▸ **set**<`A`, `B`\>(`lens`, `val`): (`data`: `A`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |
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

[src/control/Lens.ts:55](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L55)

▸ **set**<`A`, `B`\>(`lens`, `val`, `data`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |
| `val` | `B` |
| `data` | `A` |

#### Returns

`A`

#### Defined in

[src/control/Lens.ts:55](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L55)

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
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |

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

[src/control/Lens.ts:26](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L26)

▸ **view**<`A`, `B`\>(`lens`, `data`): `B`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, `B`\> |
| `data` | `A` |

#### Returns

`B`

#### Defined in

[src/control/Lens.ts:26](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L26)

___

### viewE

▸ **viewE**<`A`, `B`\>(`lens`): (`error`: `string`, `data?`: `A`) => [`Either`](../classes/data.either.Either.md)<`string`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> |

#### Returns

`fn`

▸ (`error`, `data?`): [`Either`](../classes/data.either.Either.md)<`string`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |
| `data?` | `A` |

##### Returns

[`Either`](../classes/data.either.Either.md)<`string`, `B`\>

#### Defined in

[src/control/Lens.ts:43](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L43)

▸ **viewE**<`A`, `B`\>(`lens`, `error`): (`data`: `A`) => [`Either`](../classes/data.either.Either.md)<`string`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> |
| `error` | `string` |

#### Returns

`fn`

▸ (`data`): [`Either`](../classes/data.either.Either.md)<`string`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `A` |

##### Returns

[`Either`](../classes/data.either.Either.md)<`string`, `B`\>

#### Defined in

[src/control/Lens.ts:43](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L43)

▸ **viewE**<`A`, `B`\>(`lens`, `error`, `data`): [`Either`](../classes/data.either.Either.md)<`string`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`A`, [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> |
| `error` | `string` |
| `data` | `A` |

#### Returns

[`Either`](../classes/data.either.Either.md)<`string`, `B`\>

#### Defined in

[src/control/Lens.ts:43](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L43)

___

### when

▸ **when**<`A`\>(`pred`): [`Lens`](control.lens.md#lens)<`A`[], [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](base.functions.md#predicate)<`A`\> |

#### Returns

[`Lens`](control.lens.md#lens)<`A`[], [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>\>

#### Defined in

[src/control/Lens.ts:150](https://github.com/jonlaing/shonad/blob/3645ebf/src/control/Lens.ts#L150)
