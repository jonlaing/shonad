[shonad](../README.md) / [Exports](../modules.md) / lens

# Namespace: lens

## Table of contents

### Type aliases

- [DictHelper](lens.md#dicthelper)
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
- [makeDictHelper](lens.md#makedicthelper)
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

### DictHelper

Ƭ **DictHelper**<`T`\>: `LeafsToVals`<`Required`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/control/Lens.ts:208](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L208)

___

### GetterFn

Ƭ **GetterFn**<`A`, `B`\>: `Function.Function`<[`A`], `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

[src/control/Lens.ts:9](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L9)

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

[src/control/Lens.ts:11](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L11)

___

### SetterFn

Ƭ **SetterFn**<`A`, `B`\>: `Function.Function`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Defined in

[src/control/Lens.ts:10](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L10)

## Variables

### head

• `Const` **head**: [`Lens`](lens.md#lens)<`any`[], [`Maybe`](../classes/maybe.Maybe.md)<`any`\>\>

#### Defined in

[src/control/Lens.ts:102](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L102)

___

### nonEmptyDict

• `Const` **nonEmptyDict**: [`Lens`](lens.md#lens)<[`Dict`](dict.md#dict)<`any`\>, [`Maybe`](../classes/maybe.Maybe.md)<[`Dict`](dict.md#dict)<`any`\>\>\>

#### Defined in

[src/control/Lens.ts:179](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L179)

___

### nonEmptyList

• `Const` **nonEmptyList**: [`Lens`](lens.md#lens)<`any`[], [`Maybe`](../classes/maybe.Maybe.md)<`any`[]\>\>

#### Defined in

[src/control/Lens.ts:174](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L174)

___

### nonEmptyString

• `Const` **nonEmptyString**: [`Lens`](lens.md#lens)<`string`, [`Maybe`](../classes/maybe.Maybe.md)<`string`\>\>

#### Defined in

[src/control/Lens.ts:169](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L169)

___

### tail

• `Const` **tail**: [`Lens`](lens.md#lens)<`any`[], [`Maybe`](../classes/maybe.Maybe.md)<`any`[]\>\>

#### Defined in

[src/control/Lens.ts:112](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L112)

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

[src/control/Lens.ts:94](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L94)

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

[src/control/Lens.ts:122](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L122)

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

[src/control/Lens.ts:16](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L16)

___

### makeDictHelper

▸ **makeDictHelper**<`T`\>(`map`): (`obj`: [`Maybe`](../classes/maybe.Maybe.md)<`T`\>) => `LeafsToVals`<`Required`<`T`\>\>

Transforms an arbitrary Dict into an object that will returns either
the value in the Dict or the default value.

**`example`**
```typescript
interface Thing {
 a: number;
 b?: number;
 c?: {
   d: number;
   e?: number;
 }
}

const map: Thing = {
 a: 1,
 b: 2,
 c: {
   d: 3,
   e: 4,
 }
};

const thing: Thing = {
 a: 5,
};

const helper = makeDictHelper(map);
const helped = helper(thing);
helped.a()       // 5 <-- value in `thing`
helped.b()       // 2 <-- value in `map`
helped.c().d()   // 3
helped.c().e()   // 4
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `LeafsToFallback`<`T`\> | A map of default values |

#### Returns

`fn`

A Dict Lens Helper

▸ (`obj`): `LeafsToVals`<`Required`<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Maybe`](../classes/maybe.Maybe.md)<`T`\> |

##### Returns

`LeafsToVals`<`Required`<`T`\>\>

#### Defined in

[src/control/Lens.ts:248](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L248)

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

[src/control/Lens.ts:97](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L97)

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

[src/control/Lens.ts:147](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L147)

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

[src/control/Lens.ts:77](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L77)

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

[src/control/Lens.ts:77](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L77)

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

[src/control/Lens.ts:77](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L77)

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

[src/control/Lens.ts:82](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L82)

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

[src/control/Lens.ts:128](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L128)

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

[src/control/Lens.ts:64](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L64)

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

[src/control/Lens.ts:64](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L64)

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

[src/control/Lens.ts:64](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L64)

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

[src/control/Lens.ts:27](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L27)

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

[src/control/Lens.ts:27](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L27)

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

[src/control/Lens.ts:47](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L47)

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

[src/control/Lens.ts:47](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L47)

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

[src/control/Lens.ts:47](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L47)

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

[src/control/Lens.ts:164](https://github.com/jonlaing/shonad/blob/001120c/src/control/Lens.ts#L164)
