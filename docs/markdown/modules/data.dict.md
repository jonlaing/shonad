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

[src/data/Dict.ts:6](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L6)

## Functions

### eqProps

▸ **eqProps**(`k`): (`d0`: `Record`<`string`, `any`\>, `d1`: `Record`<`string`, `any`\>) => `boolean`

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
| `d0` | `Record`<`string`, `any`\> |
| `d1` | `Record`<`string`, `any`\> |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:67](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L67)

▸ **eqProps**(`k`, `d0`): (`d1`: `Record`<`string`, `any`\>) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d0` | `Record`<`string`, `any`\> |

#### Returns

`fn`

▸ (`d1`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `d1` | `Record`<`string`, `any`\> |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:67](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L67)

▸ **eqProps**(`k`, `d0`, `d1`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d0` | `Record`<`string`, `any`\> |
| `d1` | `Record`<`string`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:67](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L67)

___

### evolve

▸ **evolve**(`e`): (`d`: `Record`<`string`, `any`\>) => `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Record`<`string`, `Function`<`any`, `any`\>\> |

#### Returns

`fn`

▸ (`d`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `Record`<`string`, `any`\> |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:116](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L116)

▸ **evolve**(`e`, `d`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Record`<`string`, `Function`<`any`, `any`\>\> |
| `d` | `Record`<`string`, `any`\> |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:116](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L116)

___

### get

▸ **get**(`key`): (`dict`: `Record`<`string`, `any`\>) => [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

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
| `dict` | `Record`<`string`, `any`\> |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Dict.ts:13](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L13)

▸ **get**(`key`, `dict`): [`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `dict` | `Record`<`string`, `any`\> |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Dict.ts:13](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L13)

___

### has

▸ **has**(`k`): (`d`: `Record`<`string`, `any`\>) => `boolean`

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
| `d` | `Record`<`string`, `any`\> |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:131](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L131)

▸ **has**(`k`, `d`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d` | `Record`<`string`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:131](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L131)

___

### isEmpty

▸ **isEmpty**(`a`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Record`<`string`, `any`\> |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:136](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L136)

___

### map

▸ **map**(`f`): (`dict`: `Record`<`string`, `any`\>) => `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<`any`, `any`\> |

#### Returns

`fn`

▸ (`dict`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `Record`<`string`, `any`\> |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:84](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L84)

▸ **map**(`f`, `dict`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<`any`, `any`\> |
| `dict` | `Record`<`string`, `any`\> |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:84](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L84)

___

### mapi

▸ **mapi**(`f`): (`dict`: `Record`<`string`, `any`\>) => `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `string`) => `any` |

#### Returns

`fn`

▸ (`dict`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `Record`<`string`, `any`\> |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:100](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L100)

▸ **mapi**(`f`, `dict`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `string`) => `any` |
| `dict` | `Record`<`string`, `any`\> |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:100](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L100)

___

### set

▸ **set**(`key`): (`val`: `any`, `dict`: `Record`<`string`, `any`\>) => `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

▸ (`val`, `dict`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `dict` | `Record`<`string`, `any`\> |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:31](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L31)

▸ **set**(`key`, `val`): (`dict`: `Record`<`string`, `any`\>) => `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `any` |

#### Returns

`fn`

▸ (`dict`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `Record`<`string`, `any`\> |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:31](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L31)

▸ **set**(`key`, `val`, `dict`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `any` |
| `dict` | `Record`<`string`, `any`\> |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/data/Dict.ts:31](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L31)

___

### unset

▸ **unset**<`A`\>(`k`): (`dict`: `A`) => `Partial`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Record`<`string`, `any`\> |

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

[src/data/Dict.ts:46](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L46)

▸ **unset**<`A`\>(`k`, `dict`): `Partial`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `dict` | `A` |

#### Returns

`Partial`<`A`\>

#### Defined in

[src/data/Dict.ts:46](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Dict.ts#L46)
