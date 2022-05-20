[shonad](../README.md) / [Exports](../modules.md) / list

# Namespace: list

## Table of contents

### Functions

- [adjust](list.md#adjust)
- [adjustWhen](list.md#adjustwhen)
- [append](list.md#append)
- [concat](list.md#concat)
- [drop](list.md#drop)
- [filter](list.md#filter)
- [find](list.md#find)
- [findIndex](list.md#findindex)
- [findLast](list.md#findlast)
- [findLastIndex](list.md#findlastindex)
- [head](list.md#head)
- [indexOf](list.md#indexof)
- [init](list.md#init)
- [insert](list.md#insert)
- [isEmpty](list.md#isempty)
- [last](list.md#last)
- [lastIndexOf](list.md#lastindexof)
- [move](list.md#move)
- [nth](list.md#nth)
- [prepend](list.md#prepend)
- [reduce](list.md#reduce)
- [reject](list.md#reject)
- [reverse](list.md#reverse)
- [splitAt](list.md#splitat)
- [tail](list.md#tail)
- [uniq](list.md#uniq)
- [update](list.md#update)
- [updateWhen](list.md#updatewhen)

## Functions

### adjust

▸ **adjust**<`A`\>(`f`): (`i`: `number`, `xs`: `A`[]) => `A`[](`i`: `number`) => (`xs`: `A`[]) => `A`[]

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

▸ (`i`): (`xs`: `A`[]) => `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

##### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:128](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L128)

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

[src/data/List.ts:128](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L128)

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

[src/data/List.ts:128](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L128)

___

### adjustWhen

▸ **adjustWhen**<`A`\>(`pred`): (`f`: (`a`: `A`) => `A`, `xs`: `A`[]) => `A`[](`f`: (`a`: `A`) => `A`) => (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |

#### Returns

`fn`

▸ (`f`, `xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `A` |
| `xs` | `A`[] |

##### Returns

`A`[]

▸ (`f`): (`xs`: `A`[]) => `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `A` |

##### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:156](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L156)

▸ **adjustWhen**<`A`\>(`pred`, `f`): (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |
| `f` | (`a`: `A`) => `A` |

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

[src/data/List.ts:156](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L156)

▸ **adjustWhen**<`A`\>(`pred`, `f`, `xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |
| `f` | (`a`: `A`) => `A` |
| `xs` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:156](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L156)

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

[src/data/List.ts:190](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L190)

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

[src/data/List.ts:190](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L190)

___

### concat

▸ **concat**<`A`\>(`a`): (`b`: []) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

`fn`

▸ (`b`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:287](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L287)

▸ **concat**<`A`\>(`a`, `b`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |
| `b` | [] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:287](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L287)

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

[src/data/List.ts:215](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L215)

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

[src/data/List.ts:215](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L215)

___

### filter

▸ **filter**<`T`\>(`pred`): (`list`: `T`[]) => `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`T`\> |

#### Returns

`fn`

▸ (`list`): `T`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |

##### Returns

`T`[]

#### Defined in

[src/data/List.ts:226](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L226)

▸ **filter**<`T`\>(`pred`, `list`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`T`\> |
| `list` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/data/List.ts:226](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L226)

___

### find

▸ **find**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

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

▸ (`xs`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:43](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L43)

▸ **find**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

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

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:43](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L43)

___

### findIndex

▸ **findIndex**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:59](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L59)

▸ **findIndex**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:59](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L59)

___

### findLast

▸ **findLast**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

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

▸ (`xs`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:70](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L70)

▸ **findLast**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

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

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:70](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L70)

___

### findLastIndex

▸ **findLastIndex**<`A`\>(`pred`): (`xs`: `A`[]) => [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |

#### Returns

`fn`

▸ (`xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:75](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L75)

▸ **findLastIndex**<`A`\>(`pred`, `xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |
| `xs` | `A`[] |

#### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:75](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L75)

___

### head

▸ **head**<`A`\>(`as`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `as` | `A`[] |

#### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:9](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L9)

___

### indexOf

▸ **indexOf**<`A`\>(`a`): (`xs`: `A`[]) => [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

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

▸ (`xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:203](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L203)

▸ **indexOf**<`A`\>(`a`, `xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

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

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:203](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L203)

___

### init

▸ **init**<`A`\>(`a`): [`Maybe`](../classes/maybe.Maybe.md)<`A`[]\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`A`[]\>

#### Defined in

[src/data/List.ts:23](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L23)

___

### insert

▸ **insert**<`A`\>(`idx`): (`item`: `A`) => (`list`: `A`[]) => `A`[](`item`: `A`, `list`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

`fn`

▸ (`item`): (`list`: `A`[]) => `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `A` |

##### Returns

`fn`

▸ (`list`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `A`[] |

##### Returns

`A`[]

▸ (`item`, `list`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `A` |
| `list` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:265](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L265)

▸ **insert**<`A`\>(`idx`, `item`): (`list`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |
| `item` | `A` |

#### Returns

`fn`

▸ (`list`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:265](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L265)

▸ **insert**<`A`\>(`idx`, `item`, `list`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |
| `item` | `A` |
| `list` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:265](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L265)

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

[src/data/List.ts:26](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L26)

___

### last

▸ **last**<`A`\>(`a`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:18](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L18)

___

### lastIndexOf

▸ **lastIndexOf**<`A`\>(`a`): (`xs`: `A`[]) => [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

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

▸ (`xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:207](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L207)

▸ **lastIndexOf**<`A`\>(`a`, `xs`): [`Maybe`](../classes/maybe.Maybe.md)<`number`\>

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

[`Maybe`](../classes/maybe.Maybe.md)<`number`\>

#### Defined in

[src/data/List.ts:207](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L207)

___

### move

▸ **move**<`A`\>(`from`): (`to`: `number`) => (`list`: `A`[]) => `A`[](`to`: `number`, `list`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |

#### Returns

`fn`

▸ (`to`): (`list`: `A`[]) => `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `number` |

##### Returns

`fn`

▸ (`list`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `A`[] |

##### Returns

`A`[]

▸ (`to`, `list`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `number` |
| `list` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:278](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L278)

▸ **move**<`A`\>(`from`, `to`): (`list`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |

#### Returns

`fn`

▸ (`list`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:278](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L278)

▸ **move**<`A`\>(`from`, `to`, `list`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |
| `list` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:278](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L278)

___

### nth

▸ **nth**<`A`\>(`i`): (`xs`: `A`[]) => [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

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

▸ (`xs`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:83](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L83)

▸ **nth**<`A`\>(`i`, `xs`): [`Maybe`](../classes/maybe.Maybe.md)<`A`\>

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

[`Maybe`](../classes/maybe.Maybe.md)<`A`\>

#### Defined in

[src/data/List.ts:83](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L83)

___

### prepend

▸ **prepend**<`A`\>(`x`): (`xs`: `A`[]) => `A`[]

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

[src/data/List.ts:195](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L195)

▸ **prepend**<`A`\>(`x`, `xs`): `A`[]

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

[src/data/List.ts:195](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L195)

___

### reduce

▸ **reduce**<`T`, `U`\>(`f`): (`initial`: `U`, `list`: `T`[]) => `U`(`initial`: `U`) => (`list`: `T`[]) => `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`acc`: `U`, `v`: `T`) => `U` |

#### Returns

`fn`

▸ (`initial`, `list`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `U` |
| `list` | `T`[] |

##### Returns

`U`

▸ (`initial`): (`list`: `T`[]) => `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `initial` | `U` |

##### Returns

`fn`

▸ (`list`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |

##### Returns

`U`

#### Defined in

[src/data/List.ts:250](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L250)

▸ **reduce**<`T`, `U`\>(`f`, `initial`): (`list`: `T`[]) => `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`acc`: `U`, `v`: `T`) => `U` |
| `initial` | `U` |

#### Returns

`fn`

▸ (`list`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |

##### Returns

`U`

#### Defined in

[src/data/List.ts:250](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L250)

▸ **reduce**<`T`, `U`\>(`f`, `initial`, `list`): `U`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`acc`: `U`, `v`: `T`) => `U` |
| `initial` | `U` |
| `list` | `T`[] |

#### Returns

`U`

#### Defined in

[src/data/List.ts:250](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L250)

___

### reject

▸ **reject**<`T`\>(`pred`): (`list`: `T`[]) => `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`T`\> |

#### Returns

`fn`

▸ (`list`): `T`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `T`[] |

##### Returns

`T`[]

#### Defined in

[src/data/List.ts:230](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L230)

▸ **reject**<`T`\>(`pred`, `list`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`T`\> |
| `list` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/data/List.ts:230](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L230)

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

[src/data/List.ts:11](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L11)

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

[src/data/List.ts:114](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L114)

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

[src/data/List.ts:114](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L114)

___

### tail

▸ **tail**<`A`\>(`a`): [`Maybe`](../classes/maybe.Maybe.md)<`A`[]\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A`[] |

#### Returns

[`Maybe`](../classes/maybe.Maybe.md)<`A`[]\>

#### Defined in

[src/data/List.ts:20](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L20)

___

### uniq

▸ **uniq**<`A`\>(`as`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `as` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:255](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L255)

___

### update

▸ **update**<`A`\>(`x`): (`i`: `number`, `xs`: `A`[]) => `A`[](`i`: `number`) => (`xs`: `A`[]) => `A`[]

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

▸ (`i`, `xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `xs` | `A`[] |

##### Returns

`A`[]

▸ (`i`): (`xs`: `A`[]) => `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

##### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:171](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L171)

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

[src/data/List.ts:171](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L171)

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

[src/data/List.ts:171](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L171)

___

### updateWhen

▸ **updateWhen**<`A`\>(`pred`): (`x`: `A`, `xs`: `A`[]) => `A`[](`x`: `A`) => (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |

#### Returns

`fn`

▸ (`x`, `xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |
| `xs` | `A`[] |

##### Returns

`A`[]

▸ (`x`): (`xs`: `A`[]) => `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `A` |

##### Returns

`fn`

▸ (`xs`): `A`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `A`[] |

##### Returns

`A`[]

#### Defined in

[src/data/List.ts:182](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L182)

▸ **updateWhen**<`A`\>(`pred`, `x`): (`xs`: `A`[]) => `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |
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

[src/data/List.ts:182](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L182)

▸ **updateWhen**<`A`\>(`pred`, `x`, `xs`): `A`[]

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pred` | [`Predicate`](func.md#predicate)<`A`\> |
| `x` | `A` |
| `xs` | `A`[] |

#### Returns

`A`[]

#### Defined in

[src/data/List.ts:182](https://github.com/jonlaing/shonad/blob/5730a6e/src/data/List.ts#L182)
