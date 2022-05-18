[shonad](../README.md) / [Exports](../modules.md) / [control](../modules/control.md) / [functor](../modules/control.functor.md) / Functor

# Class: Functor<T\>

[control](../modules/control.md).[functor](../modules/control.functor.md).Functor

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Typeclass`](base.typeclass.Typeclass.md)<`T`\>

  ↳ **`Functor`**

  ↳↳ [`Applicative`](control.applicative.Applicative.md)

  ↳↳ [`Const`](data.constFunctor.Const.md)

  ↳↳ [`Identity`](data.identity.Identity.md)

## Table of contents

### Constructors

- [constructor](control.functor.Functor.md#constructor)

### Properties

- [fmap](control.functor.Functor.md#fmap)
- [unwrap](control.functor.Functor.md#unwrap)
- [val](control.functor.Functor.md#val)
- [fmap](control.functor.Functor.md#fmap-1)

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

[Typeclass](base.typeclass.Typeclass.md).[constructor](base.typeclass.Typeclass.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L4)

## Properties

### fmap

• `Abstract` **fmap**: (`f`: (`a`: `T`) => `any`) => [`Functor`](control.functor.Functor.md)<`any`\>

#### Type declaration

▸ (`f`): [`Functor`](control.functor.Functor.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `T`) => `any` |

##### Returns

[`Functor`](control.functor.Functor.md)<`any`\>

#### Defined in

[src/control/Functor.ts:7](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Functor.ts#L7)

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

[Typeclass](base.typeclass.Typeclass.md).[unwrap](base.typeclass.Typeclass.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L8)

___

### val

• **val**: `T`

#### Inherited from

[Typeclass](base.typeclass.Typeclass.md).[val](base.typeclass.Typeclass.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L2)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Functor.ts#L5)
