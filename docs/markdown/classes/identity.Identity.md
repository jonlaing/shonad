[shonad](../README.md) / [Exports](../modules.md) / [identity](../modules/identity.md) / Identity

# Class: Identity<A\>

[identity](../modules/identity.md).Identity

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Functor`](functor.Functor.md)<`A`\>

  ↳ **`Identity`**

## Table of contents

### Constructors

- [constructor](identity.Identity.md#constructor)

### Properties

- [val](identity.Identity.md#val)
- [fmap](identity.Identity.md#fmap)

### Methods

- [fmap](identity.Identity.md#fmap-1)
- [unwrap](identity.Identity.md#unwrap)

## Constructors

### constructor

• **new Identity**<`A`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `A` |

#### Inherited from

[Functor](functor.Functor.md).[constructor](functor.Functor.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/37e0549/src/base/Typeclass.ts#L4)

## Properties

### val

• **val**: `A`

#### Inherited from

[Functor](functor.Functor.md).[val](functor.Functor.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/37e0549/src/base/Typeclass.ts#L2)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Functor](functor.Functor.md).[fmap](functor.Functor.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/37e0549/src/control/Functor.ts#L5)

## Methods

### fmap

▸ **fmap**<`B`\>(`f`): `B`

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `B` |

#### Returns

`B`

#### Overrides

Functor.fmap

#### Defined in

[src/data/Identity.ts:5](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Identity.ts#L5)

___

### unwrap

▸ **unwrap**(`fallback?`): `A`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback?` | `A` |

#### Returns

`A`

#### Overrides

Functor.unwrap

#### Defined in

[src/data/Identity.ts:6](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Identity.ts#L6)
