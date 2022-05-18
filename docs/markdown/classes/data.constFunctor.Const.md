[shonad](../README.md) / [Exports](../modules.md) / [data](../modules/data.md) / [constFunctor](../modules/data.constFunctor.md) / Const

# Class: Const<A, B\>

[data](../modules/data.md).[constFunctor](../modules/data.constFunctor.md).Const

## Type parameters

| Name |
| :------ |
| `A` |
| `B` |

## Hierarchy

- [`Functor`](control.functor.Functor.md)<`A`\>

  ↳ **`Const`**

## Table of contents

### Constructors

- [constructor](data.constFunctor.Const.md#constructor)

### Properties

- [val](data.constFunctor.Const.md#val)
- [fmap](data.constFunctor.Const.md#fmap)

### Methods

- [fmap](data.constFunctor.Const.md#fmap-1)
- [unwrap](data.constFunctor.Const.md#unwrap)

## Constructors

### constructor

• **new Const**<`A`, `B`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `A` |

#### Inherited from

[Functor](control.functor.Functor.md).[constructor](control.functor.Functor.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/4c55f96/src/base/Typeclass.ts#L4)

## Properties

### val

• **val**: `A`

#### Inherited from

[Functor](control.functor.Functor.md).[val](control.functor.Functor.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/4c55f96/src/base/Typeclass.ts#L2)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Inherited from

[Functor](control.functor.Functor.md).[fmap](control.functor.Functor.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/4c55f96/src/control/Functor.ts#L5)

## Methods

### fmap

▸ **fmap**(`f`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

#### Returns

`this`

#### Overrides

Functor.fmap

#### Defined in

[src/data/Const.ts:5](https://github.com/jonlaing/shonad/blob/4c55f96/src/data/Const.ts#L5)

___

### unwrap

▸ **unwrap**(`fallback?`): `A`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback?` | `any` |

#### Returns

`A`

#### Overrides

Functor.unwrap

#### Defined in

[src/data/Const.ts:6](https://github.com/jonlaing/shonad/blob/4c55f96/src/data/Const.ts#L6)
