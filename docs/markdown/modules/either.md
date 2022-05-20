[shonad](../README.md) / [Exports](../modules.md) / either

# Namespace: either

## Table of contents

### Classes

- [Either](../classes/either.Either.md)
- [Left](../classes/either.Left.md)
- [Right](../classes/either.Right.md)

### Functions

- [\_do](either.md#_do)
- [apply](either.md#apply)
- [apply\_](either.md#apply_)
- [bind](either.md#bind)
- [either](either.md#either)
- [eitherNil](either.md#eithernil)
- [equals](either.md#equals)
- [fmap](either.md#fmap)
- [fromLeft](either.md#fromleft)
- [fromMaybe](either.md#frommaybe)
- [fromRight](either.md#fromright)
- [isLeft](either.md#isleft)
- [isRight](either.md#isright)
- [left](either.md#left)
- [lefts](either.md#lefts)
- [partitionEithers](either.md#partitioneithers)
- [pure](either.md#pure)
- [right](either.md#right)
- [rights](either.md#rights)
- [unwrap](either.md#unwrap)

## Functions

### \_do

▸ **_do**(`f`): [`Either`](../classes/either.Either.md)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`fix`: <A\>(`val`: `any`) => `A`) => [`DoFuncReturn`](monad.md#dofuncreturn)<[`Either`](../classes/either.Either.md)<`any`, `any`\>\> |

#### Returns

[`Either`](../classes/either.Either.md)<`any`, `any`\>

#### Defined in

[src/data/Either.ts:161](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L161)

___

### apply

▸ **apply**<`A`, `B`, `C`\>(`f`): (`mx`: [`Either`](../classes/either.Either.md)<`A`, `B`\>) => [`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/either.Either.md)<`A`, [`Function`](func.md#function)<`B`, `C`\>\> |

#### Returns

`fn`

▸ (`mx`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

##### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:157](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L157)

▸ **apply**<`A`, `B`, `C`\>(`f`, `mx`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/either.Either.md)<`A`, [`Function`](func.md#function)<`B`, `C`\>\> |
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

#### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:157](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L157)

___

### apply\_

▸ **apply_**<`A`, `B`, `C`\>(`f`): (`mx`: [`Either`](../classes/either.Either.md)<`A`, `B`\>) => [`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/either.Either.md)<`A`, [`Function`](func.md#function)<`B`, `C`\>\> |

#### Returns

`fn`

▸ (`mx`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

##### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:158](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L158)

▸ **apply_**<`A`, `B`, `C`\>(`f`, `mx`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Either`](../classes/either.Either.md)<`A`, [`Function`](func.md#function)<`B`, `C`\>\> |
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

#### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:158](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L158)

___

### bind

▸ **bind**<`A`, `B`, `C`\>(`mx`): (`f`: (`b`: `B`) => [`Either`](../classes/either.Either.md)<`A`, `C`\>) => [`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

#### Returns

`fn`

▸ (`f`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `B`) => [`Either`](../classes/either.Either.md)<`A`, `C`\> |

##### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:159](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L159)

▸ **bind**<`A`, `B`, `C`\>(`mx`, `f`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |
| `f` | (`b`: `B`) => [`Either`](../classes/either.Either.md)<`A`, `C`\> |

#### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:159](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L159)

___

### either

▸ **either**<`A`, `B`, `C`\>(`f0`): (`f1`: (`b`: `B`) => `C`, `x`: [`Either`](../classes/either.Either.md)<`A`, `B`\>) => `C`(`f1`: (`b`: `B`) => `C`) => (`x`: [`Either`](../classes/either.Either.md)<`A`, `B`\>) => `C`

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
| `x` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

##### Returns

`C`

▸ (`f1`): (`x`: [`Either`](../classes/either.Either.md)<`A`, `B`\>) => `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f1` | (`b`: `B`) => `C` |

##### Returns

`fn`

▸ (`x`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

##### Returns

`C`

#### Defined in

[src/data/Either.ts:68](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L68)

▸ **either**<`A`, `B`, `C`\>(`f0`, `f1`): (`x`: [`Either`](../classes/either.Either.md)<`A`, `B`\>) => `C`

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
| `x` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

##### Returns

`C`

#### Defined in

[src/data/Either.ts:68](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L68)

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
| `x` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

#### Returns

`C`

#### Defined in

[src/data/Either.ts:68](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L68)

___

### eitherNil

▸ **eitherNil**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [error: unknown, x: unknown] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [error: unknown, x: unknown]\> |
| `R` | extends `unknown` = [`Either`](../classes/either.Either.md)<`unknown`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [error: unknown, x: unknown] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/data/Either.ts:111](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L111)

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

[src/data/Either.ts:116](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L116)

___

### fmap

▸ **fmap**<`A`, `B`, `C`\>(`f`): (`mx`: [`Either`](../classes/either.Either.md)<`A`, `B`\>) => [`Either`](../classes/either.Either.md)<`A`, `C`\>

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

▸ (`mx`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

##### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:155](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L155)

▸ **fmap**<`A`, `B`, `C`\>(`f`, `mx`): [`Either`](../classes/either.Either.md)<`A`, `C`\>

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
| `mx` | [`Either`](../classes/either.Either.md)<`A`, `B`\> |

#### Returns

[`Either`](../classes/either.Either.md)<`A`, `C`\>

#### Defined in

[src/data/Either.ts:155](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L155)

___

### fromLeft

▸ **fromLeft**<`A`\>(`fallback`): (`x`: [`Either`](../classes/either.Either.md)<`A`, `any`\>) => `A`

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
| `x` | [`Either`](../classes/either.Either.md)<`A`, `any`\> |

##### Returns

`A`

#### Defined in

[src/data/Either.ts:82](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L82)

▸ **fromLeft**<`A`\>(`fallback`, `x`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |
| `x` | [`Either`](../classes/either.Either.md)<`A`, `any`\> |

#### Returns

`A`

#### Defined in

[src/data/Either.ts:82](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L82)

___

### fromMaybe

▸ **fromMaybe**<`A`, `B`\>(`error`): (`m`: [`Maybe`](../classes/maybe.Maybe.md)<`B`\>) => [`Either`](../classes/either.Either.md)<`A`, `B`\>

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

▸ (`m`): [`Either`](../classes/either.Either.md)<`A`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Maybe`](../classes/maybe.Maybe.md)<`B`\> |

##### Returns

[`Either`](../classes/either.Either.md)<`A`, `B`\>

#### Defined in

[src/data/Either.ts:106](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L106)

▸ **fromMaybe**<`A`, `B`\>(`error`, `m`): [`Either`](../classes/either.Either.md)<`A`, `B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `A` |
| `m` | [`Maybe`](../classes/maybe.Maybe.md)<`B`\> |

#### Returns

[`Either`](../classes/either.Either.md)<`A`, `B`\>

#### Defined in

[src/data/Either.ts:106](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L106)

___

### fromRight

▸ **fromRight**<`B`\>(`fallback`): (`x`: [`Either`](../classes/either.Either.md)<`any`, `B`\>) => `B`

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
| `x` | [`Either`](../classes/either.Either.md)<`any`, `B`\> |

##### Returns

`B`

#### Defined in

[src/data/Either.ts:89](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L89)

▸ **fromRight**<`B`\>(`fallback`, `x`): `B`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |
| `x` | [`Either`](../classes/either.Either.md)<`any`, `B`\> |

#### Returns

`B`

#### Defined in

[src/data/Either.ts:89](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L89)

___

### isLeft

▸ **isLeft**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../classes/either.Either.md)<`any`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Either.ts:49](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L49)

___

### isRight

▸ **isRight**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Either`](../classes/either.Either.md)<`any`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Either.ts:50](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L50)

___

### left

▸ **left**<`A`\>(`a`): [`Either`](../classes/either.Either.md)<`A`, `any`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Either`](../classes/either.Either.md)<`A`, `any`\>

#### Defined in

[src/data/Either.ts:46](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L46)

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
| `xs` | [`Either`](../classes/either.Either.md)<`A`, `any`\>[] |

#### Returns

`A`[]

#### Defined in

[src/data/Either.ts:73](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L73)

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
| `xs` | [`Either`](../classes/either.Either.md)<`A`, `B`\>[] |

#### Returns

[`A`[], `B`[]]

#### Defined in

[src/data/Either.ts:93](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L93)

___

### pure

▸ **pure**(`a`): [`Either`](../classes/either.Either.md)<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Either`](../classes/either.Either.md)<`any`, `any`\>

#### Defined in

[src/data/Either.ts:156](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L156)

___

### right

▸ **right**<`B`\>(`b`): [`Either`](../classes/either.Either.md)<`any`, `B`\>

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `B` |

#### Returns

[`Either`](../classes/either.Either.md)<`any`, `B`\>

#### Defined in

[src/data/Either.ts:47](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L47)

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
| `xs` | [`Either`](../classes/either.Either.md)<`any`, `B`\>[] |

#### Returns

`B`[]

#### Defined in

[src/data/Either.ts:76](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L76)

___

### unwrap

▸ **unwrap**<`B`\>(`fallback`): (`c`: [`Either`](../classes/either.Either.md)<`any`, `B`\>) => `B`

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
| `c` | [`Either`](../classes/either.Either.md)<`any`, `B`\> |

##### Returns

`B`

#### Defined in

[src/data/Either.ts:122](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L122)

▸ **unwrap**<`B`\>(`fallback`, `c`): `B`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `B` |
| `c` | [`Either`](../classes/either.Either.md)<`any`, `B`\> |

#### Returns

`B`

#### Defined in

[src/data/Either.ts:122](https://github.com/jonlaing/shonad/blob/54cf147/src/data/Either.ts#L122)
