[shonad](../README.md) / [Exports](../modules.md) / [extensions](extensions.md) / redux

# Namespace: redux

[extensions](extensions.md).redux

## Table of contents

### Interfaces

- [Action](../interfaces/extensions.redux.Action.md)
- [PayloadAction](../interfaces/extensions.redux.PayloadAction.md)

### Type aliases

- [CaseReducer](extensions.redux.md#casereducer)
- [State](extensions.redux.md#state)

### Functions

- [always](extensions.redux.md#always)
- [over](extensions.redux.md#over)
- [pipe](extensions.redux.md#pipe)
- [set](extensions.redux.md#set)

## Type aliases

### CaseReducer

Ƭ **CaseReducer**<`S`, `A`\>: (`state`: `Draft`<`S`\>, `action`: `A`) => `S` \| `void` \| `Draft`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md) = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md) |

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

[src/extensions/redux.ts:44](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L44)

___

### State

Ƭ **State**: `Record`<`string`, `any`\>

#### Defined in

[src/extensions/redux.ts:6](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L6)

## Functions

### always

▸ **always**<`S`, `V`, `A`\>(`lens`): (`val`: `V`, `state`: `S`, `action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |

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

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L158)

▸ **always**<`S`, `V`, `A`\>(`lens`, `val`): [`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
| `val` | `V` |

#### Returns

[`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L158)

▸ **always**<`S`, `V`, `A`\>(`lens`, `val`, `state`): (`action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
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

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L158)

▸ **always**<`S`, `V`, `A`\>(`lens`, `val`, `state`, `action`): `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
| `val` | `V` |
| `state` | `S` |
| `action` | `A` |

#### Returns

`S`

#### Defined in

[src/extensions/redux.ts:158](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L158)

___

### over

▸ **over**<`S`, `V`, `A`\>(`lens`): (`fn`: (`payload`: `any`) => (`a`: `V`) => `V`, `state`: `S`, `action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |

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

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L121)

▸ **over**<`S`, `V`, `A`\>(`lens`, `fn`): [`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
| `fn` | (`payload`: `any`) => (`a`: `V`) => `V` |

#### Returns

[`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L121)

▸ **over**<`S`, `V`, `A`\>(`lens`, `fn`, `state`): (`action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
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

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L121)

▸ **over**<`S`, `V`, `A`\>(`lens`, `fn`, `state`, `action`): `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
| `fn` | (`payload`: `any`) => (`a`: `V`) => `V` |
| `state` | `S` |
| `action` | `A` |

#### Returns

`S`

#### Defined in

[src/extensions/redux.ts:121](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L121)

___

### pipe

▸ **pipe**<`S`, `A`\>(...`funcs`): [`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`any`, `string`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...funcs` | [`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>[] |

#### Returns

[`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:49](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L49)

___

### set

▸ **set**<`S`, `V`, `A`\>(`lens`): [`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |

#### Returns

[`CaseReducer`](extensions.redux.md#casereducer)<`S`, `A`\>

#### Defined in

[src/extensions/redux.ts:74](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L74)

▸ **set**<`S`, `V`, `A`\>(`lens`, `state`): (`action`: `A`) => `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
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

[src/extensions/redux.ts:74](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L74)

▸ **set**<`S`, `V`, `A`\>(`lens`, `state`, `action`): `S`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`State`](extensions.redux.md#state) |
| `V` | extends `any` |
| `A` | extends [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`, `A`\> = [`PayloadAction`](../interfaces/extensions.redux.PayloadAction.md)<`V`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lens` | [`Lens`](control.lens.md#lens)<`S`, [`Maybe`](../classes/data.maybe.Maybe.md)<`V`\>\> |
| `state` | `S` |
| `action` | `A` |

#### Returns

`S`

#### Defined in

[src/extensions/redux.ts:74](https://github.com/jonlaing/shonad/blob/22dd501/src/extensions/redux.ts#L74)
