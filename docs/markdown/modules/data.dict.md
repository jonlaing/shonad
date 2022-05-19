[shonad](../README.md) / [Exports](../modules.md) / [data](data.md) / dict

# Namespace: dict

[data](data.md).dict

## Table of contents

### Type aliases

- [Dict](data.dict.md#dict)

### Functions

- [eqProps](data.dict.md#eqprops)
- [evolve](data.dict.md#evolve)
- [get](data.dict.md#get)
- [has](data.dict.md#has)
- [isEmpty](data.dict.md#isempty)
- [map](data.dict.md#map)
- [mapi](data.dict.md#mapi)
- [merge](data.dict.md#merge)
- [propEq](data.dict.md#propeq)
- [set](data.dict.md#set)
- [unset](data.dict.md#unset)

## Type aliases

### Dict

Ƭ **Dict**<`A`\>: `Record`<`string`, `A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/data/Dict.ts:6](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L6)

## Functions

### eqProps

▸ **eqProps**<`A`\>(`k`): (`d0`: `A`, `d1`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

`fn`

▸ (`d0`, `d1`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `d0` | `A` |
| `d1` | `A` |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:63](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L63)

▸ **eqProps**<`A`\>(`k`, `d0`): (`d1`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d0` | `A` |

#### Returns

`fn`

▸ (`d1`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `d1` | `A` |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:63](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L63)

▸ **eqProps**<`A`\>(`k`, `d0`, `d1`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d0` | `A` |
| `d1` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:63](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L63)

___

### evolve

▸ **evolve**<`A`\>(`e`): (`d`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Record`<`string`, `Function`<`any`, `any`\>\> |

#### Returns

`fn`

▸ (`d`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `A` |

##### Returns

`A`

#### Defined in

[src/data/Dict.ts:109](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L109)

▸ **evolve**<`A`\>(`e`, `d`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Record`<`string`, `Function`<`any`, `any`\>\> |
| `d` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:109](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L109)

___

### get

▸ **get**<`A`\>(`key`): (`dict`: `A`) => [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

▸ (`dict`): [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Dict.ts:16](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L16)

▸ **get**<`A`\>(`key`, `dict`): [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `dict` | `A` |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Dict.ts:16](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L16)

___

### has

▸ **has**<`A`\>(`k`): (`d`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

`fn`

▸ (`d`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `A` |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:121](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L121)

▸ **has**<`A`\>(`k`, `d`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:121](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L121)

___

### isEmpty

▸ **isEmpty**<`A`\>(`a`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:126](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L126)

___

### map

▸ **map**<`A`\>(`f`): (`dict`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<`any`, `any`\> |

#### Returns

`fn`

▸ (`dict`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`A`

#### Defined in

[src/data/Dict.ts:77](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L77)

▸ **map**<`A`\>(`f`, `dict`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<`any`, `any`\> |
| `dict` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:77](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L77)

___

### mapi

▸ **mapi**<`A`\>(`f`): (`dict`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `string`) => `any` |

#### Returns

`fn`

▸ (`dict`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`A`

#### Defined in

[src/data/Dict.ts:93](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L93)

▸ **mapi**<`A`\>(`f`, `dict`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `string`) => `any` |
| `dict` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:93](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L93)

___

### merge

▸ **merge**<`T`, `A`\>(`a`): (`dict`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Dict`](data.dict.md#dict)<`any`\> |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`fn`

▸ (`dict`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `T` |

##### Returns

`T`

#### Defined in

[src/data/Dict.ts:154](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L154)

▸ **merge**<`T`, `A`\>(`a`, `dict`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Dict`](data.dict.md#dict)<`any`\> |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `dict` | `T` |

#### Returns

`T`

#### Defined in

[src/data/Dict.ts:154](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L154)

___

### propEq

▸ **propEq**<`A`\>(`k`): (`val`: `any`, `dict?`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

`fn`

▸ (`val`, `dict?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `dict?` | `A` |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:141](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L141)

▸ **propEq**<`A`\>(`k`, `val`): (`dict`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `val` | `any` |

#### Returns

`fn`

▸ (`dict`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:141](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L141)

▸ **propEq**<`A`\>(`k`, `val`, `dict`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `val` | `any` |
| `dict` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:141](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L141)

___

### set

▸ **set**<`A`\>(`key`): (`val`: `any`, `dict?`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

▸ (`val`, `dict?`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `dict?` | `A` |

##### Returns

`A`

#### Defined in

[src/data/Dict.ts:30](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L30)

▸ **set**<`A`\>(`key`, `val`): (`dict`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `any` |

#### Returns

`fn`

▸ (`dict`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`A`

#### Defined in

[src/data/Dict.ts:30](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L30)

▸ **set**<`A`\>(`key`, `val`, `dict`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `any` |
| `dict` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:30](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L30)

___

### unset

▸ **unset**<`A`\>(`k`): (`dict`: `A`) => `Partial`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

`fn`

▸ (`dict`): `Partial`<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`Partial`<`A`\>

#### Defined in

[src/data/Dict.ts:42](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L42)

▸ **unset**<`A`\>(`k`, `dict`): `Partial`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](data.dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `dict` | `A` |

#### Returns

`Partial`<`A`\>

#### Defined in

[src/data/Dict.ts:42](https://github.com/jonlaing/shonad/blob/2ef830b/src/data/Dict.ts#L42)
