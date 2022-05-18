[shonad](../README.md) / [Exports](../modules.md) / [data](../modules/data.md) / [maybe](../modules/data.maybe.md) / Maybe

# Class: Maybe<A\>

[data](../modules/data.md).[maybe](../modules/data.maybe.md).Maybe

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Monad`](control.monad.Monad.md)<`A`\>

  ↳ **`Maybe`**

  ↳↳ [`Just`](data.maybe.Just.md)

  ↳↳ [`Nothing`](data.maybe.Nothing.md)

## Table of contents

### Constructors

- [constructor](data.maybe.Maybe.md#constructor)

### Properties

- [apply](data.maybe.Maybe.md#apply)
- [bind](data.maybe.Maybe.md#bind)
- [fmap](data.maybe.Maybe.md#fmap)
- [unwrap](data.maybe.Maybe.md#unwrap)
- [val](data.maybe.Maybe.md#val)
- [apply](data.maybe.Maybe.md#apply-1)
- [bind](data.maybe.Maybe.md#bind-1)
- [fmap](data.maybe.Maybe.md#fmap-1)

### Methods

- [pure](data.maybe.Maybe.md#pure)

## Constructors

### constructor

• **new Maybe**<`A`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `A` |

#### Inherited from

[Monad](control.monad.Monad.md).[constructor](control.monad.Monad.md#constructor)

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

#### Inherited from

[Monad](control.monad.Monad.md).[apply](control.monad.Monad.md#apply)

#### Defined in

[src/control/Applicative.ts:21](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Applicative.ts#L21)

___

### bind

• `Abstract` **bind**: (`f`: [`Function`](../modules/base.functions.md#function)<`any`, [`Monad`](control.monad.Monad.md)<`any`\>\>) => [`Monad`](control.monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](control.monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function`](../modules/base.functions.md#function)<`any`, [`Monad`](control.monad.Monad.md)<`any`\>\> |

##### Returns

[`Monad`](control.monad.Monad.md)<`any`\>

#### Inherited from

[Monad](control.monad.Monad.md).[bind](control.monad.Monad.md#bind)

#### Defined in

[src/control/Monad.ts:59](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Monad.ts#L59)

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

[Monad](control.monad.Monad.md).[fmap](control.monad.Monad.md#fmap)

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

[Monad](control.monad.Monad.md).[unwrap](control.monad.Monad.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A`

#### Inherited from

[Monad](control.monad.Monad.md).[val](control.monad.Monad.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/control.applicative.md#staticapplyfn)<[`Monad`](control.monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](control.monad.Monad.md).[apply](control.monad.Monad.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](control.monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](control.monad.Monad.md)<`any`\>) => [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](control.monad.Monad.md).[bind](control.monad.Monad.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Inherited from

[Monad](control.monad.Monad.md).[fmap](control.monad.Monad.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/control/Functor.ts#L5)

## Methods

### pure

▸ `Static` **pure**(`a`): [`Just`](data.maybe.Just.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Just`](data.maybe.Just.md)<`any`\>

#### Defined in

[src/data/Maybe.ts:7](https://github.com/jonlaing/shonad/blob/cb2cd2b/src/data/Maybe.ts#L7)
