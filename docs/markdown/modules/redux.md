[shonad](../README.md) / [Exports](../modules.md) / redux

# Namespace: redux

## Table of contents

### Interfaces

- [Action](../interfaces/redux.Action.md)
- [PayloadAction](../interfaces/redux.PayloadAction.md)
- [State](../interfaces/redux.State.md)

### Type aliases

- [CaseReducer](redux.md#casereducer)

### Functions

- [always](redux.md#always)
- [over](redux.md#over)
- [pipe](redux.md#pipe)
- [set](redux.md#set)

## Type aliases

### CaseReducer

Ƭ **CaseReducer**<`S`, `A`\>: (`state`: `Draft`<`S`\>, `action`: `A`) => `S` \| `void` \| `Draft`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `any`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md) |

#### Type declaration

▸ (`state`, `action`): `S` \| `void` \| `Draft`<`S`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Draft`<`S`\> |
| `action` | `A` |

##### Returns

`S` \| `void` \| `Draft`<`S`\>

#### Defined in

[src/extensions/redux.ts:44](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L44)

## Functions

### always

▸ **always**<`S`, `V`, `A`\>(`lens`): (`val`: `V`, `state`: `S`, `action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |

#### Returns

`fn`

▸ (`val`, `state`, `action`): `S`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `V` |
| `state` | `S` |
| `action` | `A` |

##### Returns

`S`

#### Defined in

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L158)

▸ **always**<`S`, `V`, `A`\>(`lens`, `val`): [`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `val` | `V` |

#### Returns

[`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L158)

▸ **always**<`S`, `V`, `A`\>(`lens`, `val`, `state`): (`action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `val` | `V` |
| `state` | `S` |

#### Returns

`fn`

▸ (`action`): `S`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `A` |

##### Returns

`S`

#### Defined in

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L158)

▸ **always**<`S`, `V`, `A`\>(`lens`, `val`, `state`, `action`): `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `val` | `V` |
| `state` | `S` |
| `action` | `A` |

#### Returns

`S`

#### Defined in

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L158)

___

### over

▸ **over**<`S`, `V`, `A`\>(`lens`): (`fn`: (`payload`: `any`) => (`a`: `V`) => `V`, `state`: `S`, `action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |

#### Returns

`fn`

▸ (`fn`, `state`, `action`): `S`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`payload`: `any`) => (`a`: `V`) => `V` |
| `state` | `S` |
| `action` | `A` |

##### Returns

`S`

#### Defined in

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L121)

▸ **over**<`S`, `V`, `A`\>(`lens`, `fn`): [`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `fn` | (`payload`: `any`) => (`a`: `V`) => `V` |

#### Returns

[`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L121)

▸ **over**<`S`, `V`, `A`\>(`lens`, `fn`, `state`): (`action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `fn` | (`payload`: `any`) => (`a`: `V`) => `V` |
| `state` | `S` |

#### Returns

`fn`

▸ (`action`): `S`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `A` |

##### Returns

`S`

#### Defined in

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L121)

▸ **over**<`S`, `V`, `A`\>(`lens`, `fn`, `state`, `action`): `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `fn` | (`payload`: `any`) => (`a`: `V`) => `V` |
| `state` | `S` |
| `action` | `A` |

#### Returns

`S`

#### Defined in

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L121)

___

### pipe

▸ **pipe**<`S`, `A`\>(...`funcs`): [`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`any`, `string`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...funcs` | [`CaseReducer`](redux.md#casereducer)<`S`, `A`\>[] |

#### Returns

[`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:49](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L49)

___

### set

▸ **set**<`S`, `V`, `A`\>(`lens`): [`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |

#### Returns

[`CaseReducer`](redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:74](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L74)

▸ **set**<`S`, `V`, `A`\>(`lens`, `state`): (`action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `state` | `S` |

#### Returns

`fn`

▸ (`action`): `S`

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `A` |

##### Returns

`S`

#### Defined in

[src/extensions/redux.ts:74](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L74)

▸ **set**<`S`, `V`, `A`\>(`lens`, `state`, `action`): `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](../interfaces/redux.State.md)<`S`\> |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](lens.md#lens)<`S`, [`Maybe`](../classes/maybe.Maybe.md)<`V`\>\> |
| `state` | `S` |
| `action` | `A` |

#### Returns

`S`

#### Defined in

[src/extensions/redux.ts:74](https://github.com/jonlaing/shonad/blob/299d147/src/extensions/redux.ts#L74)
