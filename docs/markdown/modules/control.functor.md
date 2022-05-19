[shonad](../README.md) / [Exports](../modules.md) / [control](control.md) / functor

# Namespace: functor

[control](control.md).functor

## Table of contents

### Classes

- [Functor](../classes/control.functor.Functor.md)

### Functions

- [obeysFunctorLaws](control.functor.md#obeysfunctorlaws)

## Functions

### obeysFunctorLaws

▸ **obeysFunctorLaws**<`T`\>(`mx`, `f`, `g`): `boolean`

Utility function meant to be used in tests to ensure your Functor obeys the functor laws

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Functor`](../classes/control.functor.Functor.md)<`any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mx` | `T` | M x |
| `f` | (`a`: `any`) => `any` | x => y |
| `g` | (`a`: `any`) => `any` | y => z |

#### Returns

`boolean`

`true` or `false`

#### Defined in

[src/control/Functor.ts:18](https://github.com/jonlaing/shonad/blob/12f6b40/src/control/Functor.ts#L18)
