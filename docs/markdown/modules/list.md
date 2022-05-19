[shonad](../README.md) / [Exports](../modules.md) / list

# Namespace: list

## Table of contents

### Functions

- [adjust](list.md#adjust)
- [adjustWhen](list.md#adjustwhen)
- [append](list.md#append)
- [drop](list.md#drop)
- [filter](list.md#filter)
- [find](list.md#find)
- [findIndex](list.md#findindex)
- [findLast](list.md#findlast)
- [findLastIndex](list.md#findlastindex)
- [head](list.md#head)
- [indexOf](list.md#indexof)
- [init](list.md#init)
- [isEmpty](list.md#isempty)
- [last](list.md#last)
- [lastIndexOf](list.md#lastindexof)
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

[src/data/List.ts:127](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L127)

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

[src/data/List.ts:127](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L127)

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

[src/data/List.ts:127](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L127)

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

[src/data/List.ts:155](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L155)

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

[src/data/List.ts:155](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L155)

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

[src/data/List.ts:155](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L155)

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

[src/data/List.ts:189](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L189)

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

[src/data/List.ts:189](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L189)

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

[src/data/List.ts:214](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L214)

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

[src/data/List.ts:214](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L214)

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

[src/data/List.ts:225](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L225)

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

[src/data/List.ts:225](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L225)

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

[src/data/List.ts:42](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L42)

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

[src/data/List.ts:42](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L42)

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

[src/data/List.ts:58](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L58)

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

[src/data/List.ts:58](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L58)

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

[src/data/List.ts:69](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L69)

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

[src/data/List.ts:69](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L69)

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

[src/data/List.ts:74](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L74)

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

[src/data/List.ts:74](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L74)

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

[src/data/List.ts:8](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L8)

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

[src/data/List.ts:202](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L202)

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

[src/data/List.ts:202](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L202)

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

[src/data/List.ts:22](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L22)

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

[src/data/List.ts:25](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L25)

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

[src/data/List.ts:17](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L17)

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

[src/data/List.ts:206](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L206)

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

[src/data/List.ts:206](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L206)

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

[src/data/List.ts:82](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L82)

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

[src/data/List.ts:82](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L82)

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

[src/data/List.ts:194](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L194)

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

[src/data/List.ts:194](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L194)

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

[src/data/List.ts:249](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L249)

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

[src/data/List.ts:249](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L249)

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

[src/data/List.ts:249](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L249)

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

[src/data/List.ts:229](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L229)

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

[src/data/List.ts:229](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L229)

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

[src/data/List.ts:10](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L10)

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

[src/data/List.ts:113](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L113)

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

[src/data/List.ts:113](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L113)

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

[src/data/List.ts:19](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L19)

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

[src/data/List.ts:254](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L254)

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

[src/data/List.ts:170](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L170)

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

[src/data/List.ts:170](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L170)

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

[src/data/List.ts:170](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L170)

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

[src/data/List.ts:181](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L181)

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

[src/data/List.ts:181](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L181)

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

[src/data/List.ts:181](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/List.ts#L181)
