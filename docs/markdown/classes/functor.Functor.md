[shonad](../README.md) / [Exports](../modules.md) / [functor](../modules/functor.md) / Functor

# Class: Functor<T\>

[functor](../modules/functor.md).Functor

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Typeclass`](typeclass.Typeclass.md)<`T`\>

  ↳ **`Functor`**

  ↳↳ [`Applicative`](applicative.Applicative.md)

  ↳↳ [`Const`](constFunctor.Const.md)

  ↳↳ [`Identity`](identity.Identity.md)

## Table of contents

### Constructors

- [constructor](functor.Functor.md#constructor)

### Properties

- [fmap](functor.Functor.md#fmap)
- [unwrap](functor.Functor.md#unwrap)
- [val](functor.Functor.md#val)
- [fmap](functor.Functor.md#fmap-1)

## Constructors

### constructor

• **new Functor**<`T`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `T` |

#### Inherited from

[Typeclass](typeclass.Typeclass.md).[constructor](typeclass.Typeclass.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/473b1a9/src/base/Typeclass.ts#L4)

## Properties

### fmap

• `Abstract` **fmap**: (`f`: (`a`: `T`) => `any`) => [`Functor`](functor.Functor.md)<`any`\>

#### Type declaration

▸ (`f`): [`Functor`](functor.Functor.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `T`) => `any` |

##### Returns

[`Functor`](functor.Functor.md)<`any`\>

#### Defined in

[src/control/Functor.ts:7](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Functor.ts#L7)

___

### unwrap

• `Abstract` **unwrap**: (`fallback`: `T`) => `T`

#### Type declaration

▸ (`fallback`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `T` |

##### Returns

`T`

#### Inherited from

[Typeclass](typeclass.Typeclass.md).[unwrap](typeclass.Typeclass.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/473b1a9/src/base/Typeclass.ts#L8)

___

### val

• **val**: `T`

#### Inherited from

[Typeclass](typeclass.Typeclass.md).[val](typeclass.Typeclass.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/473b1a9/src/base/Typeclass.ts#L2)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Functor.ts#L5)
