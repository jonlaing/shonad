[shonad](../README.md) / [Exports](../modules.md) / [data](data.md) / list

# Namespace: list

[data](data.md).list

## Table of contents

### Functions

- [adjust](data.list.md#adjust)
- [append](data.list.md#append)
- [drop](data.list.md#drop)
- [find](data.list.md#find)
- [findIndex](data.list.md#findindex)
- [findLast](data.list.md#findlast)
- [findLastIndex](data.list.md#findlastindex)
- [head](data.list.md#head)
- [indexOf](data.list.md#indexof)
- [init](data.list.md#init)
- [isEmpty](data.list.md#isempty)
- [last](data.list.md#last)
- [lastIndexOf](data.list.md#lastindexof)
- [nth](data.list.md#nth)
- [reverse](data.list.md#reverse)
- [splitAt](data.list.md#splitat)
- [tail](data.list.md#tail)
- [update](data.list.md#update)

## Functions

### adjust

▸ **adjust**<`A`\>(`f`): (`i`: `number`, `xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `A` |

#### Returns

`fn`

▸ (`i`, `xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:122](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L122)

▸ **adjust**<`A`\>(`f`, `i`): (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `A` |
| `i` | `number` |

#### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:122](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L122)

▸ **adjust**<`A`\>(`f`, `i`, `xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `A` |
| `i` | `number` |
| `xs` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:122](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L122)

___

### append

▸ **append**<`A`\>(`x`): (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |

#### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:147](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L147)

▸ **append**<`A`\>(`x`, `xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |
| `xs` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:147](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L147)

___

### drop

▸ **drop**<`A`\>(`n`): (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:167](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L167)

▸ **drop**<`A`\>(`n`, `xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `xs` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:167](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L167)

___

### find

▸ **find**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | (`x`: `A`) => `boolean` |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:40](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L40)

▸ **find**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | (`x`: `A`) => `boolean` |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:40](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L40)

___

### findIndex

▸ **findIndex**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](base.functions.md#predicate)<`A`\> |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:56](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L56)

▸ **findIndex**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](base.functions.md#predicate)<`A`\> |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:56](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L56)

___

### findLast

▸ **findLast**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | (`x`: `A`) => `boolean` |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:67](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L67)

▸ **findLast**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | (`x`: `A`) => `boolean` |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:67](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L67)

___

### findLastIndex

▸ **findLastIndex**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](base.functions.md#predicate)<`A`\> |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:72](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L72)

▸ **findLastIndex**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](base.functions.md#predicate)<`A`\> |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:72](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L72)

___

### head

▸ **head**<`A`\>(`as`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `as` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:6](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L6)

___

### indexOf

▸ **indexOf**<`A`\>(`a`): (`xs`: `A`[]) => [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:155](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L155)

▸ **indexOf**<`A`\>(`a`, `xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:155](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L155)

___

### init

▸ **init**<`A`\>(`a`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`[]\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`[]\>

#### Defined in

[src/data/List.ts:20](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L20)

___

### isEmpty

▸ **isEmpty**<`A`\>(`a`): `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

`boolean`

#### Defined in

[src/data/List.ts:23](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L23)

___

### last

▸ **last**<`A`\>(`a`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:15](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L15)

___

### lastIndexOf

▸ **lastIndexOf**<`A`\>(`a`): (`xs`: `A`[]) => [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:159](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L159)

▸ **lastIndexOf**<`A`\>(`a`, `xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:159](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L159)

___

### nth

▸ **nth**<`A`\>(`i`): (`xs`: `A`[]) => [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:80](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L80)

▸ **nth**<`A`\>(`i`, `xs`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:80](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L80)

___

### reverse

▸ **reverse**<`A`\>(`a`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:8](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L8)

___

### splitAt

▸ **splitAt**<`A`\>(`i`): (`xs`: `A`[]) => [`A`[], `A`[]]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`fn`

▸ (`xs`): [`A`[], `A`[]]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`A`[], `A`[]]

#### Defined in

[src/data/List.ts:111](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L111)

▸ **splitAt**<`A`\>(`i`, `xs`): [`A`[], `A`[]]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `xs` | `A`[] |

#### Returns

[`A`[], `A`[]]

#### Defined in

[src/data/List.ts:111](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L111)

___

### tail

▸ **tail**<`A`\>(`a`): [`Maybe`](../classes/data.maybe.Maybe.md)<`A`[]\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

[`Maybe`](../classes/data.maybe.Maybe.md)<`A`[]\>

#### Defined in

[src/data/List.ts:17](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L17)

___

### update

▸ **update**<`A`\>(`x`): (`i`: `number`, `xs?`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |

#### Returns

`fn`

▸ (`i`, `xs?`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `xs?` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:140](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L140)

▸ **update**<`A`\>(`x`, `i`): (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |
| `i` | `number` |

#### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:140](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L140)

▸ **update**<`A`\>(`x`, `i`, `xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |
| `i` | `number` |
| `xs` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:140](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/List.ts#L140)
