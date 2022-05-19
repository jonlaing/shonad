[shonad](../README.md) / [Exports](../modules.md) / [either](../modules/either.md) / Either

# Class: Either<A, B\>

[either](../modules/either.md).Either

## Type parameters

| Name |
| :------ |
| `A` |
| `B` |

## Hierarchy

- [`Monad`](monad.Monad.md)<`A` \| `B`\>

  ↳ **`Either`**

  ↳↳ [`Left`](either.Left.md)

  ↳↳ [`Right`](either.Right.md)

## Table of contents

### Constructors

- [constructor](either.Either.md#constructor)

### Properties

- [apply](either.Either.md#apply)
- [bind](either.Either.md#bind)
- [fmap](either.Either.md#fmap)
- [unwrap](either.Either.md#unwrap)
- [val](either.Either.md#val)
- [apply](either.Either.md#apply-1)
- [bind](either.Either.md#bind-1)
- [fmap](either.Either.md#fmap-1)

### Methods

- [pure](either.Either.md#pure)

## Constructors

### constructor

• **new Either**<`A`, `B`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `A` \| `B` |

#### Inherited from

[Monad](monad.Monad.md).[constructor](monad.Monad.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/473b1a9/src/base/Typeclass.ts#L4)

## Properties

### apply

• `Abstract` **apply**: (`f`: `any`) => [`Monad`](monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

##### Returns

[`Monad`](monad.Monad.md)<`any`\>

#### Inherited from

[Monad](monad.Monad.md).[apply](monad.Monad.md#apply)

#### Defined in

[src/control/Monad.ts:60](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Monad.ts#L60)

___

### bind

• `Abstract` **bind**: (`f`: [`Function`](../modules/func.md#function)<`any`, [`Monad`](monad.Monad.md)<`any`\>\>) => [`Monad`](monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function`](../modules/func.md#function)<`any`, [`Monad`](monad.Monad.md)<`any`\>\> |

##### Returns

[`Monad`](monad.Monad.md)<`any`\>

#### Inherited from

[Monad](monad.Monad.md).[bind](monad.Monad.md#bind)

#### Defined in

[src/control/Monad.ts:61](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Monad.ts#L61)

___

### fmap

• `Abstract` **fmap**: (`f`: (`a`: `A` \| `B`) => `any`) => [`Monad`](monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A` \| `B`) => `any` |

##### Returns

[`Monad`](monad.Monad.md)<`any`\>

#### Inherited from

[Monad](monad.Monad.md).[fmap](monad.Monad.md#fmap)

#### Defined in

[src/control/Monad.ts:59](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Monad.ts#L59)

___

### unwrap

• `Abstract` **unwrap**: (`fallback`: `A` \| `B`) => `A` \| `B`

#### Type declaration

▸ (`fallback`): `A` \| `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` \| `B` |

##### Returns

`A` \| `B`

#### Inherited from

[Monad](monad.Monad.md).[unwrap](monad.Monad.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/473b1a9/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A` \| `B`

#### Inherited from

[Monad](monad.Monad.md).[val](monad.Monad.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/473b1a9/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Monad`](monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[apply](monad.Monad.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](monad.Monad.md)<`any`\>) => [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[bind](monad.Monad.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[fmap](monad.Monad.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/473b1a9/src/control/Functor.ts#L5)

## Methods

### pure

▸ `Static` **pure**(`a`): [`Right`](either.Right.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Right`](either.Right.md)<`unknown`\>

#### Defined in

[src/data/Either.ts:8](https://github.com/jonlaing/shonad/blob/473b1a9/src/data/Either.ts#L8)
