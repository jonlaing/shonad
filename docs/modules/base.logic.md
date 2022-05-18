[shonad](../README.md) / [Exports](../modules.md) / [base](base.md) / logic

# Namespace: logic

[base](base.md).logic

## Table of contents

### Functions

- [allPass](base.logic.md#allpass)
- [and](base.logic.md#and)
- [anyPass](base.logic.md#anypass)
- [both](base.logic.md#both)
- [either](base.logic.md#either)
- [not](base.logic.md#not)
- [or](base.logic.md#or)
- [unless](base.logic.md#unless)
- [until](base.logic.md#until)
- [when](base.logic.md#when)

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

[src/base/Logic.ts:12](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L12)

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

[src/base/Logic.ts:12](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L12)

___

### and

▸ **and**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

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

[src/base/Logic.ts:17](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L17)

___

### anyPass

▸ **anyPass**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [fs: Function<any, any\>[] \| x, x: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [fs: Function<any, any\>[], x: any]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [fs: Function<any, any\>[] \| x, x: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:19](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L19)

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

[src/base/Logic.ts:23](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L23)

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

[src/base/Logic.ts:27](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L27)

___

### not

▸ **not**<`P`, `G`, `R`\>(...`p`): `RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [f: Function<any, any\> \| x, x: any] |
| `G` | extends readonly `any`[] = `GapsOf`<`P`, [f: Function<any, any\>, x: any]\> |
| `R` | extends `unknown` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...p` | `P` \| [f: Function<any, any\> \| x, x: any] |

#### Returns

`RequiredKeys`<`ObjectOf`<`G`\>\> extends `never` ? `R` : `Curry`<(...`p`: `G`) => `R`\>

#### Defined in

[src/base/Logic.ts:31](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L31)

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

[src/base/Logic.ts:35](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L35)

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

[src/base/Logic.ts:37](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L37)

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

[src/base/Logic.ts:47](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L47)

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

[src/base/Logic.ts:42](https://github.com/jonlaing/shonad/blob/9b2b224/src/base/Logic.ts#L42)
