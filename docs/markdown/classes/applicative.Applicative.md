[shonad](../README.md) / [Exports](../modules.md) / [applicative](../modules/applicative.md) / Applicative

# Class: Applicative<A\>

[applicative](../modules/applicative.md).Applicative

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Functor`](functor.Functor.md)<`A`\>

  ↳ **`Applicative`**

  ↳↳ [`Monad`](monad.Monad.md)

  ↳↳ [`IMonad`](../interfaces/monad.IMonad.md)

## Table of contents

### Constructors

- [constructor](applicative.Applicative.md#constructor)

### Properties

- [apply](applicative.Applicative.md#apply)
- [fmap](applicative.Applicative.md#fmap)
- [unwrap](applicative.Applicative.md#unwrap)
- [val](applicative.Applicative.md#val)
- [apply](applicative.Applicative.md#apply-1)
- [fmap](applicative.Applicative.md#fmap-1)

## Constructors

### constructor

• **new Applicative**<`A`\>(`val`)

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

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Typeclass.ts#L4)

## Properties

### apply

• `Abstract` **apply**: (`f`: `any`) => [`Applicative`](applicative.Applicative.md)<`any`\>

#### Type declaration

▸ (`f`): [`Applicative`](applicative.Applicative.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

##### Returns

[`Applicative`](applicative.Applicative.md)<`any`\>

#### Defined in

[src/control/Applicative.ts:22](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Applicative.ts#L22)

___

### fmap

• `Abstract` **fmap**: (`f`: (`a`: `A`) => `any`) => [`Applicative`](applicative.Applicative.md)<`any`\>

#### Type declaration

▸ (`f`): [`Applicative`](applicative.Applicative.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `any` |

##### Returns

[`Applicative`](applicative.Applicative.md)<`any`\>

#### Overrides

[Functor](functor.Functor.md).[fmap](functor.Functor.md#fmap)

#### Defined in

[src/control/Applicative.ts:21](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Applicative.ts#L21)

___

### unwrap

• `Abstract` **unwrap**: (`fallback`: `A`) => `A`

#### Type declaration

▸ (`fallback`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

##### Returns

`A`

#### Inherited from

[Functor](functor.Functor.md).[unwrap](functor.Functor.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A`

#### Inherited from

[Functor](functor.Functor.md).[val](functor.Functor.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Applicative`](applicative.Applicative.md)<`Function`<`any`, `any`\>\>, [`Applicative`](applicative.Applicative.md)<`any`\>\>

#### Defined in

[src/control/Applicative.ts:11](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Applicative.ts#L11)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Functor](functor.Functor.md).[fmap](functor.Functor.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Functor.ts#L5)
