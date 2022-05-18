[shonad](../README.md) / [Exports](../modules.md) / [control](../modules/control.md) / [applicative](../modules/control.applicative.md) / Applicative

# Class: Applicative<A\>

[control](../modules/control.md).[applicative](../modules/control.applicative.md).Applicative

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Functor`](control.functor.Functor.md)<`A`\>

  ↳ **`Applicative`**

  ↳↳ [`Monad`](control.monad.Monad.md)

## Table of contents

### Constructors

- [constructor](control.applicative.Applicative.md#constructor)

### Properties

- [apply](control.applicative.Applicative.md#apply)
- [fmap](control.applicative.Applicative.md#fmap)
- [unwrap](control.applicative.Applicative.md#unwrap)
- [val](control.applicative.Applicative.md#val)
- [apply](control.applicative.Applicative.md#apply-1)
- [fmap](control.applicative.Applicative.md#fmap-1)

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

[Functor](control.functor.Functor.md).[constructor](control.functor.Functor.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L4)

## Properties

### apply

• `Abstract` **apply**: (`f`: `any`) => [`Applicative`](control.applicative.Applicative.md)<`any`\>

#### Type declaration

▸ (`f`): [`Applicative`](control.applicative.Applicative.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

##### Returns

[`Applicative`](control.applicative.Applicative.md)<`any`\>

#### Defined in

[src/control/Applicative.ts:21](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Applicative.ts#L21)

___

### fmap

• `Abstract` **fmap**: (`f`: (`a`: `A`) => `any`) => [`Functor`](control.functor.Functor.md)<`any`\>

#### Type declaration

▸ (`f`): [`Functor`](control.functor.Functor.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `any` |

##### Returns

[`Functor`](control.functor.Functor.md)<`any`\>

#### Inherited from

[Functor](control.functor.Functor.md).[fmap](control.functor.Functor.md#fmap)

#### Defined in

[src/control/Functor.ts:7](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Functor.ts#L7)

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

[Functor](control.functor.Functor.md).[unwrap](control.functor.Functor.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A`

#### Inherited from

[Functor](control.functor.Functor.md).[val](control.functor.Functor.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/control.applicative.md#staticapplyfn)<[`Applicative`](control.applicative.Applicative.md)<`Function`<`any`, `any`\>\>, [`Applicative`](control.applicative.Applicative.md)<`any`\>\>

#### Defined in

[src/control/Applicative.ts:11](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Applicative.ts#L11)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Inherited from

[Functor](control.functor.Functor.md).[fmap](control.functor.Functor.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Functor.ts#L5)
