[shonad](../README.md) / [Exports](../modules.md) / [control](control.md) / applicative

# Namespace: applicative

[control](control.md).applicative

## Table of contents

### Classes

- [Applicative](../classes/control.applicative.Applicative.md)

### Type aliases

- [StaticApplyFn](control.applicative.md#staticapplyfn)

### Functions

- [obeysApplicativeLaws](control.applicative.md#obeysapplicativelaws)

## Type aliases

### StaticApplyFn

Ƭ **StaticApplyFn**<`T`, `U`\>: `Function.Curry`<`Function.Function`<[`T`, `U`], `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Applicative`](../classes/control.applicative.Applicative.md)<`Function.Function`\> |
| `U` | extends [`Applicative`](../classes/control.applicative.Applicative.md)<`any`\> |

#### Defined in

[src/control/Applicative.ts:5](https://github.com/jonlaing/shonad/blob/2ef830b/src/control/Applicative.ts#L5)

## Functions

### obeysApplicativeLaws

▸ **obeysApplicativeLaws**<`U`\>(`pure`, `x`, `f`, `u`, `v`, `w`): `boolean`

Utility function meant to be used in tests to ensure your Applicative
obeys the applicative laws

**`remarks`**

Since all Applicatives are Functors, you should also
use [obeysFunctorLaws](control.functor.md#obeysfunctorlaws) in your tests.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`Applicative`](../classes/control.applicative.Applicative.md)<`any`, `U`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pure` | (`a`: `any`) => `U` | x => M x |
| `x` | `any` | - |
| `f` | [`Function`](base.functions.md#function)<`any`, `any`\> | x => y |
| `u` | [`Applicative`](../classes/control.applicative.Applicative.md)<(`a`: `any`) => (`b`: `any`) => `any`\> | M (x => y => z) |
| `v` | `U` | M x |
| `w` | `U` | M y |

#### Returns

`boolean`

`true` or `false`

#### Defined in

[src/control/Applicative.ts:41](https://github.com/jonlaing/shonad/blob/2ef830b/src/control/Applicative.ts#L41)
