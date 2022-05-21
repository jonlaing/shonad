[shonad](../README.md) / [Exports](../modules.md) / dict

# Namespace: dict

## Table of contents

### Type aliases

- [Dict](dict.md#dict)

### Functions

- [eqProps](dict.md#eqprops)
- [evolve](dict.md#evolve)
- [get](dict.md#get)
- [getUnsafe](dict.md#getunsafe)
- [has](dict.md#has)
- [isEmpty](dict.md#isempty)
- [map](dict.md#map)
- [mapi](dict.md#mapi)
- [merge](dict.md#merge)
- [propEq](dict.md#propeq)
- [set](dict.md#set)
- [unset](dict.md#unset)

## Type aliases

### Dict

Ƭ **Dict**<`A`\>: `Record`<`string`, `A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[src/data/Dict.ts:6](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L6)

## Functions

### eqProps

▸ **eqProps**<`A`\>(`k`): (`d0`: `A`, `d1`: `A`) => `boolean`(`d0`: `A`) => (`d1`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

▸ (`d0`): (`d1`: `A`) => `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `d0` | `A` |

##### Returns

`fn`

▸ (`d1`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `d1` | `A` |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:75](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L75)

▸ **eqProps**<`A`\>(`k`, `d0`): (`d1`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:75](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L75)

▸ **eqProps**<`A`\>(`k`, `d0`, `d1`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d0` | `A` |
| `d1` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:75](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L75)

___

### evolve

▸ **evolve**<`A`\>(`e`): (`d`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:121](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L121)

▸ **evolve**<`A`\>(`e`, `d`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Record`<`string`, `Function`<`any`, `any`\>\> |
| `d` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:121](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L121)

___

### get

▸ **get**<`A`\>(`key`): (`dict`: `A`) => [`Maybe`](../classes/maybe.Maybe.md)<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

▸ (`dict`): [`Maybe`](../classes/maybe.Maybe.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Dict.ts:16](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L16)

▸ **get**<`A`\>(`key`, `dict`): [`Maybe`](../classes/maybe.Maybe.md)<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `dict` | `A` |

#### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`any`\>

#### Defined in

[src/data/Dict.ts:16](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L16)

___

### getUnsafe

▸ **getUnsafe**<`A`\>(`key`): (`dict`: `A`) => `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

▸ (`dict`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`any`

#### Defined in

[src/data/Dict.ts:23](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L23)

▸ **getUnsafe**<`A`\>(`key`, `dict`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `dict` | `A` |

#### Returns

`any`

#### Defined in

[src/data/Dict.ts:23](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L23)

___

### has

▸ **has**<`A`\>(`k`): (`d`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:133](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L133)

▸ **has**<`A`\>(`k`, `d`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `d` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:133](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L133)

___

### isEmpty

▸ **isEmpty**<`A`\>(`a`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:138](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L138)

___

### map

▸ **map**<`A`\>(`f`): (`dict`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:89](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L89)

▸ **map**<`A`\>(`f`, `dict`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<`any`, `any`\> |
| `dict` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:89](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L89)

___

### mapi

▸ **mapi**<`A`\>(`f`): (`dict`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:105](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L105)

▸ **mapi**<`A`\>(`f`, `dict`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`value`: `any`, `key`: `string`) => `any` |
| `dict` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:105](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L105)

___

### merge

▸ **merge**<`T`, `A`\>(`a`): (`dict`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Dict`](dict.md#dict)<`any`\> |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> = `any` |

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

[src/data/Dict.ts:169](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L169)

▸ **merge**<`T`, `A`\>(`a`, `dict`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Dict`](dict.md#dict)<`any`\> |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `dict` | `T` |

#### Returns

`T`

#### Defined in

[src/data/Dict.ts:169](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L169)

___

### propEq

▸ **propEq**<`A`\>(`k`): (`val`: `any`, `dict`: `A`) => `boolean`(`val`: `any`) => (`dict`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |

#### Returns

`fn`

▸ (`val`, `dict`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `dict` | `A` |

##### Returns

`boolean`

▸ (`val`): (`dict`: `A`) => `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

##### Returns

`fn`

▸ (`dict`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:156](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L156)

▸ **propEq**<`A`\>(`k`, `val`): (`dict`: `A`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:156](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L156)

▸ **propEq**<`A`\>(`k`, `val`, `dict`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `val` | `any` |
| `dict` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Dict.ts:156](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L156)

___

### set

▸ **set**<`A`\>(`key`): (`val`: `any`, `dict`: `A`) => `A`(`val`: `any`) => (`dict`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

▸ (`val`, `dict`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |
| `dict` | `A` |

##### Returns

`A`

▸ (`val`): (`dict`: `A`) => `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

##### Returns

`fn`

▸ (`dict`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dict` | `A` |

##### Returns

`A`

#### Defined in

[src/data/Dict.ts:39](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L39)

▸ **set**<`A`\>(`key`, `val`): (`dict`: `A`) => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:39](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L39)

▸ **set**<`A`\>(`key`, `val`, `dict`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `any` |
| `dict` | `A` |

#### Returns

`A`

#### Defined in

[src/data/Dict.ts:39](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L39)

___

### unset

▸ **unset**<`A`\>(`k`): (`dict`: `A`) => `Partial`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

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

[src/data/Dict.ts:51](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L51)

▸ **unset**<`A`\>(`k`, `dict`): `Partial`<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Dict`](dict.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `string` |
| `dict` | `A` |

#### Returns

`Partial`<`A`\>

#### Defined in

[src/data/Dict.ts:51](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Dict.ts#L51)
