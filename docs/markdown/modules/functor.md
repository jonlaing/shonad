[shonad](../README.md) / [Exports](../modules.md) / functor

# Namespace: functor

## Table of contents

### Classes

- [Functor](../classes/functor.Functor.md)

### Functions

- [obeysFunctorLaws](functor.md#obeysfunctorlaws)

## Functions

### obeysFunctorLaws

▸ **obeysFunctorLaws**<`T`\>(`mx`, `f`, `g`): `boolean`

Utility function meant to be used in tests to ensure your Functor obeys the functor laws

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Functor`](../classes/functor.Functor.md)<`any`, `T`\> |

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

[src/control/Functor.ts:18](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Functor.ts#L18)
