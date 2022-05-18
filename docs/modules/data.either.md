[shonad](../README.md) / [Exports](../modules.md) / [data](data.md) / either

# Namespace: either

[data](data.md).either

## Table of contents

### Classes

- [Either](../classes/data.either.Either.md)
- [Left](../classes/data.either.Left.md)
- [Right](../classes/data.either.Right.md)

### Functions

- [\_do](data.either.md#_do)
- [apply](data.either.md#apply)
- [apply\_](data.either.md#apply_)
- [bind](data.either.md#bind)
- [either](data.either.md#either)
- [eitherNil](data.either.md#eithernil)
- [equals](data.either.md#equals)
- [fmap](data.either.md#fmap)
- [fromLeft](data.either.md#fromleft)
- [fromMaybe](data.either.md#frommaybe)
- [fromRight](data.either.md#fromright)
- [isLeft](data.either.md#isleft)
- [isRight](data.either.md#isright)
- [left](data.either.md#left)
- [lefts](data.either.md#lefts)
- [partitionEithers](data.either.md#partitioneithers)
- [pure](data.either.md#pure)
- [right](data.either.md#right)
- [rights](data.either.md#rights)
- [unwrap](data.either.md#unwrap)

## Functions

### \_do

▸ **_do**(`f`): [`Either`](../classes/data.either.Either.md)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`fix`: <A\>(`val`: `any`) => `A`) => [`DoFuncReturn`](control.monad.md#dofuncreturn)<[`Either`](../classes/data.either.Either.md)<`any`, `any`\>\> |

#### Returns

[`Either`](../classes/data.either.Either.md)<`any`, `any`\>

#### Defined in

[src/data/Either.ts:154](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L154)

___

### apply

▸ **apply**<`A`, `B`, `C`\>(`f`): (`mx`: [`Either`](../classes/data.either.Either.md)<`A`, `B`\>) => [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/data.either.Either.md)<`A`, [`Function`](base.functions.md#function)<`B`, `C`\>\> |

#### Returns

`fn`

▸ (`mx`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

##### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:150](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L150)

▸ **apply**<`A`, `B`, `C`\>(`f`, `mx`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/data.either.Either.md)<`A`, [`Function`](base.functions.md#function)<`B`, `C`\>\> |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

#### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:150](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L150)

___

### apply\_

▸ **apply_**<`A`, `B`, `C`\>(`f`): (`mx`: [`Either`](../classes/data.either.Either.md)<`A`, `B`\>) => [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/data.either.Either.md)<`A`, [`Function`](base.functions.md#function)<`B`, `C`\>\> |

#### Returns

`fn`

▸ (`mx`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

##### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:151](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L151)

▸ **apply_**<`A`, `B`, `C`\>(`f`, `mx`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/data.either.Either.md)<`A`, [`Function`](base.functions.md#function)<`B`, `C`\>\> |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

#### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:151](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L151)

___

### bind

▸ **bind**<`A`, `B`, `C`\>(`mx`): (`f`: (`b`: `B`) => [`Either`](../classes/data.either.Either.md)<`A`, `C`\>) => [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

#### Returns

`fn`

▸ (`f`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => [`Either`](../classes/data.either.Either.md)<`A`, `C`\> |

##### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:152](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L152)

▸ **bind**<`A`, `B`, `C`\>(`mx`, `f`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |
| `f` | (`b`: `B`) => [`Either`](../classes/data.either.Either.md)<`A`, `C`\> |

#### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:152](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L152)

___

### either

▸ **either**<`A`, `B`, `C`\>(`f0`): (`f1`: (`b`: `B`) => `C`, `x`: [`Either`](../classes/data.either.Either.md)<`A`, `B`\>) => `C`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f0` | (`a`: `A`) => `C` |

#### Returns

`fn`

▸ (`f1`, `x`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f1` | (`b`: `B`) => `C` |
| `x` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

##### Returns

`C`

#### Defined in

[src/data/Either.ts:61](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L61)

▸ **either**<`A`, `B`, `C`\>(`f0`, `f1`): (`x`: [`Either`](../classes/data.either.Either.md)<`A`, `B`\>) => `C`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f0` | (`a`: `A`) => `C` |
| `f1` | (`b`: `B`) => `C` |

#### Returns

`fn`

▸ (`x`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

##### Returns

`C`

#### Defined in

[src/data/Either.ts:61](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L61)

▸ **either**<`A`, `B`, `C`\>(`f0`, `f1`, `x`): `C`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f0` | (`a`: `A`) => `C` |
| `f1` | (`b`: `B`) => `C` |
| `x` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

#### Returns

`C`

#### Defined in

[src/data/Either.ts:61](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L61)

___

### eitherNil

▸ **eitherNil**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [error: unknown, x: unknown] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [error: unknown, x: unknown]\> |
| `R` | extends `unknown` = [`Either`](../classes/data.either.Either.md)<`unknown`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [error: unknown, x: unknown] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/data/Either.ts:104](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L104)

___

### equals

▸ **equals**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [a: unknown, mx: x \| Either<any, unknown\>] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [a: unknown, mx: Either<any, unknown\>]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [a: unknown, mx: x \| Either<any, unknown\>] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/data/Either.ts:109](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L109)

___

### fmap

▸ **fmap**<`A`, `B`, `C`\>(`f`): (`mx`: [`Either`](../classes/data.either.Either.md)<`A`, `B`\>) => [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => `C` |

#### Returns

`fn`

▸ (`mx`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

##### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:148](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L148)

▸ **fmap**<`A`, `B`, `C`\>(`f`, `mx`): [`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => `C` |
| `mx` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\> |

#### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:148](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L148)

___

### fromLeft

▸ **fromLeft**<`A`\>(`fallback`): (`x`: [`Either`](../classes/data.either.Either.md)<`A`, `any`\>) => `A`

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
| `x` | [`Either`](../classes/data.either.Either.md)<`A`, `any`\> |

##### Returns

`A`

#### Defined in

[src/data/Either.ts:75](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L75)

▸ **fromLeft**<`A`\>(`fallback`, `x`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |
| `x` | [`Either`](../classes/data.either.Either.md)<`A`, `any`\> |

#### Returns

`A`

#### Defined in

[src/data/Either.ts:75](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L75)

___

### fromMaybe

▸ **fromMaybe**<`A`, `B`\>(`error`): (`m`: [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\>) => [`Either`](../classes/data.either.Either.md)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `A` |

#### Returns

`fn`

▸ (`m`): [`Either`](../classes/data.either.Either.md)<`A`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\> |

##### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `B`\>

#### Defined in

[src/data/Either.ts:99](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L99)

▸ **fromMaybe**<`A`, `B`\>(`error`, `m`): [`Either`](../classes/data.either.Either.md)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `A` |
| `m` | [`Maybe`](../classes/data.maybe.Maybe.md)<`B`\> |

#### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `B`\>

#### Defined in

[src/data/Either.ts:99](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L99)

___

### fromRight

▸ **fromRight**<`B`\>(`fallback`): (`x`: [`Either`](../classes/data.either.Either.md)<`any`, `B`\>) => `B`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |

#### Returns

`fn`

▸ (`x`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../classes/data.either.Either.md)<`any`, `B`\> |

##### Returns

`B`

#### Defined in

[src/data/Either.ts:82](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L82)

▸ **fromRight**<`B`\>(`fallback`, `x`): `B`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |
| `x` | [`Either`](../classes/data.either.Either.md)<`any`, `B`\> |

#### Returns

`B`

#### Defined in

[src/data/Either.ts:82](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L82)

___

### isLeft

▸ **isLeft**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../classes/data.either.Either.md)<`any`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Either.ts:45](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L45)

___

### isRight

▸ **isRight**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../classes/data.either.Either.md)<`any`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Either.ts:46](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L46)

___

### left

▸ **left**<`A`\>(`a`): [`Either`](../classes/data.either.Either.md)<`A`, `any`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Either`](../classes/data.either.Either.md)<`A`, `any`\>

#### Defined in

[src/data/Either.ts:42](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L42)

___

### lefts

▸ **lefts**<`A`\>(`xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | [`Either`](../classes/data.either.Either.md)<`A`, `any`\>[] |

#### Returns

`A`[]

#### Defined in

[src/data/Either.ts:66](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L66)

___

### partitionEithers

▸ **partitionEithers**<`A`, `B`\>(`xs`): [`A`[], `B`[]]

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | [`Either`](../classes/data.either.Either.md)<`A`, `B`\>[] |

#### Returns

[`A`[], `B`[]]

#### Defined in

[src/data/Either.ts:86](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L86)

___

### pure

▸ **pure**(`a`): [`Either`](../classes/data.either.Either.md)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Either`](../classes/data.either.Either.md)<`any`, `any`\>

#### Defined in

[src/data/Either.ts:149](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L149)

___

### right

▸ **right**<`B`\>(`b`): [`Either`](../classes/data.either.Either.md)<`any`, `B`\>

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `B` |

#### Returns

[`Either`](../classes/data.either.Either.md)<`any`, `B`\>

#### Defined in

[src/data/Either.ts:43](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L43)

___

### rights

▸ **rights**<`B`\>(`xs`): `B`[]

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | [`Either`](../classes/data.either.Either.md)<`any`, `B`\>[] |

#### Returns

`B`[]

#### Defined in

[src/data/Either.ts:69](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L69)

___

### unwrap

▸ **unwrap**<`B`\>(`fallback`): (`c`: [`Either`](../classes/data.either.Either.md)<`any`, `B`\>) => `B`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |

#### Returns

`fn`

▸ (`c`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Either`](../classes/data.either.Either.md)<`any`, `B`\> |

##### Returns

`B`

#### Defined in

[src/data/Either.ts:115](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L115)

▸ **unwrap**<`B`\>(`fallback`, `c`): `B`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |
| `c` | [`Either`](../classes/data.either.Either.md)<`any`, `B`\> |

#### Returns

`B`

#### Defined in

[src/data/Either.ts:115](https://github.com/jonlaing/shonad/blob/ab8e58b/src/data/Either.ts#L115)
