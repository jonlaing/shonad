[shonad](../README.md) / [Exports](../modules.md) / [data](data.md) / maybe

# Namespace: maybe

[data](data.md).maybe

## Table of contents

### Classes

- [Just](../classes/data.maybe.Just.md)
- [Maybe](../classes/data.maybe.Maybe.md)
- [Nothing](../classes/data.maybe.Nothing.md)

### Type aliases

- [MaybeRecord](data.maybe.md#mayberecord)

### Functions

- [\_do](data.maybe.md#_do)
- [apply](data.maybe.md#apply)
- [apply\_](data.maybe.md#apply_)
- [bind](data.maybe.md#bind)
- [catMaybes](data.maybe.md#catmaybes)
- [equals](data.maybe.md#equals)
- [fmap](data.maybe.md#fmap)
- [fromMaybe](data.maybe.md#frommaybe)
- [isJust](data.maybe.md#isjust)
- [isNothing](data.maybe.md#isnothing)
- [just](data.maybe.md#just)
- [listToMaybe](data.maybe.md#listtomaybe)
- [mapMaybe](data.maybe.md#mapmaybe)
- [maybe](data.maybe.md#maybe)
- [maybeNil](data.maybe.md#maybenil)
- [maybeRecord](data.maybe.md#mayberecord-1)
- [maybeToList](data.maybe.md#maybetolist)
- [nothing](data.maybe.md#nothing)
- [or](data.maybe.md#or)
- [pure](data.maybe.md#pure)
- [unwrap](data.maybe.md#unwrap)

## Type aliases

### MaybeRecord

Ƭ **MaybeRecord**<`T`\>: { [k in keyof T]: Maybe<T[k]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Defined in

[src/data/Maybe.ts:143](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L143)

## Functions

### \_do

▸ **_do**(`f`): [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`fix`: <A\>(`val`: `any`) => `A`) => [`DoFuncReturn`](control.monad.md#dofuncreturn)<[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>\> |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Maybe.ts:181](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L181)

___

### apply

▸ **apply**<`F`\>(`f`): (`x`: [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Parameters`<`F`\>[``0``]\>) => [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Maybe`](../classes/data.maybe.Maybe.md)<`F`\> |

#### Returns

`fn`

▸ (`x`): [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Parameters`<`F`\>[``0``]\> |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Defined in

[src/data/Maybe.ts:30](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L30)

▸ **apply**<`F`\>(`f`, `x`): [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Maybe`](../classes/data.maybe.Maybe.md)<`F`\> |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`Parameters`<`F`\>[``0``]\> |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Defined in

[src/data/Maybe.ts:30](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L30)

___

### apply\_

▸ **apply_**<`A`, `B`\>(`x`): (`f`: [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Function`<[`A`], `B`\>\>) => [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

#### Returns

`fn`

▸ (`f`): [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Function`<[`A`], `B`\>\> |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Defined in

[src/data/Maybe.ts:40](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L40)

▸ **apply_**<`A`, `B`\>(`x`, `f`): [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |
| `f` | [`Maybe`](../classes/data.maybe.Maybe.md)<`Function`<[`A`], `B`\>\> |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Defined in

[src/data/Maybe.ts:40](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L40)

___

### bind

▸ **bind**<`A`, `B`\>(`x`): (`f`: `Function.Function`<[`A`], [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\>) => [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

#### Returns

`fn`

▸ (`f`): [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function.Function`<[`A`], [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Defined in

[src/data/Maybe.ts:50](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L50)

▸ **bind**<`A`, `B`\>(`x`, `f`): [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |
| `f` | `Function`<[`A`], [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Defined in

[src/data/Maybe.ts:50](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L50)

___

### catMaybes

▸ **catMaybes**<`A`\>(`xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>[] |

#### Returns

`A`[]

#### Defined in

[src/data/Maybe.ts:124](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L124)

___

### equals

▸ **equals**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [a: unknown, mx: x \| Maybe<unknown\>] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [a: unknown, mx: Maybe<unknown\>]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [a: unknown, mx: x \| Maybe<unknown\>] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/data/Maybe.ts:155](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L155)

___

### fmap

▸ **fmap**<`F`\>(`f`): (`x`: [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Parameters`<`F`\>[``0``]\>) => [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `F` |

#### Returns

`fn`

▸ (`x`): [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Parameters`<`F`\>[``0``]\> |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Defined in

[src/data/Maybe.ts:20](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L20)

▸ **fmap**<`F`\>(`f`, `x`): [`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `Function`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `F` |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`Parameters`<`F`\>[``0``]\> |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`Function.Return`<`F`\>\>

#### Defined in

[src/data/Maybe.ts:20](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L20)

___

### fromMaybe

▸ **fromMaybe**<`A`\>(`fallback`): (`x`: [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

#### Returns

`fn`

▸ (`x`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

##### Returns

`A`

#### Defined in

[src/data/Maybe.ts:111](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L111)

▸ **fromMaybe**<`A`\>(`fallback`, `x`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

#### Returns

`A`

#### Defined in

[src/data/Maybe.ts:111](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L111)

___

### isJust

▸ **isJust**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Maybe.ts:87](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L87)

___

### isNothing

▸ **isNothing**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Maybe.ts:88](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L88)

___

### just

▸ **just**<`A`\>(`x`): [`Just`](../classes/data.maybe.Just.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |

#### Returns

[`Just`](../classes/data.maybe.Just.md)<`A`\>

#### Defined in

[src/data/Maybe.ts:84](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L84)

___

### listToMaybe

▸ **listToMaybe**(`a`): [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Maybe.ts:118](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L118)

___

### mapMaybe

▸ **mapMaybe**<`A`, `B`\>(`f`): (`as`: `A`[]) => `B`[]

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> |

#### Returns

`fn`

▸ (`as`): `B`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `as` | `A`[] |

##### Returns

`B`[]

#### Defined in

[src/data/Maybe.ts:135](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L135)

▸ **mapMaybe**<`A`, `B`\>(`f`, `as`): `B`[]

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>\> |
| `as` | `A`[] |

#### Returns

`B`[]

#### Defined in

[src/data/Maybe.ts:135](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L135)

___

### maybe

▸ **maybe**<`A`, `B`\>(`fallback`): (`f`: `Function.Function`<[`A`], `B`\>, `x`: [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>) => `B`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |

#### Returns

`fn`

▸ (`f`, `x`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function.Function`<[`A`], `B`\> |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

##### Returns

`B`

#### Defined in

[src/data/Maybe.ts:103](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L103)

▸ **maybe**<`A`, `B`\>(`fallback`, `f`): (`x`: [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>) => `B`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |
| `f` | `Function`<[`A`], `B`\> |

#### Returns

`fn`

▸ (`x`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

##### Returns

`B`

#### Defined in

[src/data/Maybe.ts:103](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L103)

▸ **maybe**<`A`, `B`\>(`fallback`, `f`, `x`): `B`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |
| `f` | `Function`<[`A`], `B`\> |
| `x` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

#### Returns

`B`

#### Defined in

[src/data/Maybe.ts:103](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L103)

___

### maybeNil

▸ **maybeNil**<`A`\>(`a`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| `A` |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/Maybe.ts:115](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L115)

___

### maybeRecord

▸ **maybeRecord**<`T`\>(`x`): [`MaybeRecord`](data.maybe.md#mayberecord)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

[`MaybeRecord`](data.maybe.md#mayberecord)<`T`\>

#### Defined in

[src/data/Maybe.ts:147](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L147)

___

### maybeToList

▸ **maybeToList**<`A`\>(`ma`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

#### Returns

`A`[]

#### Defined in

[src/data/Maybe.ts:121](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L121)

___

### nothing

▸ **nothing**<`A`\>(`x?`): [`Nothing`](../classes/data.maybe.Nothing.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `A` |

#### Returns

[`Nothing`](../classes/data.maybe.Nothing.md)<`A`\>

#### Defined in

[src/data/Maybe.ts:85](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L85)

___

### or

▸ **or**<`A`, `B`\>(`f1`): (`f0`: () => [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>) => [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> \| [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f1` | () => [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\> |

#### Returns

`fn`

▸ (`f0`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> \| [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f0` | () => [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> \| [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Defined in

[src/data/Maybe.ts:168](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L168)

▸ **or**<`A`, `B`\>(`f1`, `f0`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> \| [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f1` | () => [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\> |
| `f0` | () => [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> \| [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>

#### Defined in

[src/data/Maybe.ts:168](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L168)

___

### pure

▸ **pure**(`a`): [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Maybe.ts:51](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L51)

___

### unwrap

▸ **unwrap**<`A`\>(`fallback`): (`c`: [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

#### Returns

`fn`

▸ (`c`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

##### Returns

`A`

#### Defined in

[src/data/Maybe.ts:177](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L177)

▸ **unwrap**<`A`\>(`fallback`, `c`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |
| `c` | [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\> |

#### Returns

`A`

#### Defined in

[src/data/Maybe.ts:177](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Maybe.ts#L177)
