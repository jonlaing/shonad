[shonad](../README.md) / [Exports](../modules.md) / logic

# Namespace: logic

## Table of contents

### Functions

- [allPass](logic.md#allpass)
- [and](logic.md#and)
- [anyPass](logic.md#anypass)
- [both](logic.md#both)
- [either](logic.md#either)
- [not](logic.md#not)
- [or](logic.md#or)
- [unless](logic.md#unless)
- [until](logic.md#until)
- [when](logic.md#when)

## Functions

### allPass

▸ **allPass**<`A`\>(`fs`): (`x`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | `Function`<[`A`], `boolean`\>[] |

#### Returns

`fn`

▸ (`x`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:12](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L12)

▸ **allPass**<`A`\>(`fs`, `x`): `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | `Function`<[`A`], `boolean`\>[] |
| `x` | `A` |

#### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:12](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L12)

___

### and

▸ **and**(`a`): (`b`: `boolean`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `boolean` |

#### Returns

`fn`

▸ (`b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` |

##### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:19](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L19)

▸ **and**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `boolean` |
| `b` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:19](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L19)

___

### anyPass

▸ **anyPass**<`A`\>(`fs`): (`x`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | `Function`<[`A`], `boolean`\>[] |

#### Returns

`fn`

▸ (`x`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:23](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L23)

▸ **anyPass**<`A`\>(`fs`, `x`): `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fs` | `Function`<[`A`], `boolean`\>[] |
| `x` | `A` |

#### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:23](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L23)

___

### both

▸ **both**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [f: Function<any, any\> \| x, g: Function<any, any\> \| x, x: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [f: Function<any, any\>, g: Function<any, any\>, x: any]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [f: Function<any, any\> \| x, g: Function<any, any\> \| x, x: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:28](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L28)

___

### either

▸ **either**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [f: Function<any, any\> \| x, g: Function<any, any\> \| x, x: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [f: Function<any, any\>, g: Function<any, any\>, x: any]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [f: Function<any, any\> \| x, g: Function<any, any\> \| x, x: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:32](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L32)

___

### not

▸ **not**(`f`): (`x`: `NonNullable`<`any`\>) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<`any`, `any`\> |

#### Returns

`fn`

▸ (`x`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `NonNullable`<`any`\> |

##### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:39](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L39)

▸ **not**(`f`, `x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<`any`, `any`\> |
| `x` | `any` |

#### Returns

`boolean`

#### Defined in

[src/base/Logic.ts:39](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L39)

___

### or

▸ **or**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [a: boolean \| x, b: boolean \| x] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [a: boolean, b: boolean]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [a: boolean \| x, b: boolean \| x] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:43](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L43)

___

### unless

▸ **unless**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [pred: Function<any, any\> \| x, f: Function<any, any\> \| x, x: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [pred: Function<any, any\>, f: Function<any, any\>, x: any]\> |
| `R` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [pred: Function<any, any\> \| x, f: Function<any, any\> \| x, x: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:45](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L45)

___

### until

▸ **until**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [pred: Function<any, any\> \| x, f: Function<any, any\> \| x, x: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [pred: Function<any, any\>, f: Function<any, any\>, x: any]\> |
| `R` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [pred: Function<any, any\> \| x, f: Function<any, any\> \| x, x: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:55](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L55)

___

### when

▸ **when**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [pred: Function<any, any\> \| x, f: Function<any, any\> \| x, x: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [pred: Function<any, any\>, f: Function<any, any\>, x: any]\> |
| `R` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [pred: Function<any, any\> \| x, f: Function<any, any\> \| x, x: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:50](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Logic.ts#L50)
