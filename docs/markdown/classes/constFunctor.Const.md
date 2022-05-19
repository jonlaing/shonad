[shonad](../README.md) / [Exports](../modules.md) / [constFunctor](../modules/constFunctor.md) / Const

# Class: Const<A, B\>

[constFunctor](../modules/constFunctor.md).Const

## Type parameters

| Name |
| :------ |
| `A` |
| `B` |

## Hierarchy

- [`Functor`](functor.Functor.md)<`A`\>

  ↳ **`Const`**

## Table of contents

### Constructors

- [constructor](constFunctor.Const.md#constructor)

### Properties

- [val](constFunctor.Const.md#val)
- [fmap](constFunctor.Const.md#fmap)

### Methods

- [fmap](constFunctor.Const.md#fmap-1)
- [unwrap](constFunctor.Const.md#unwrap)

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

[Functor](functor.Functor.md).[constructor](functor.Functor.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/49f7c8a/src/base/Typeclass.ts#L4)

## Properties

### val

• **val**: `A`

#### Inherited from

[Functor](functor.Functor.md).[val](functor.Functor.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/49f7c8a/src/base/Typeclass.ts#L2)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Functor](functor.Functor.md).[fmap](functor.Functor.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/49f7c8a/src/control/Functor.ts#L5)

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

[src/data/Const.ts:5](https://github.com/jonlaing/shonad/blob/49f7c8a/src/data/Const.ts#L5)

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

[src/data/Const.ts:6](https://github.com/jonlaing/shonad/blob/49f7c8a/src/data/Const.ts#L6)
