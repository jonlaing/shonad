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

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/49f7c8a/src/base/Typeclass.ts#L4)

## Properties

### apply

• `Abstract` **apply**: (`ma`: [`Either`](either.Either.md)<`any`, `any`\>) => [`Either`](either.Either.md)<`any`, `any`\>

#### Type declaration

▸ (`ma`): [`Either`](either.Either.md)<`any`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Either`](either.Either.md)<`any`, `any`\> |

##### Returns

[`Either`](either.Either.md)<`any`, `any`\>

#### Overrides

[Monad](monad.Monad.md).[apply](monad.Monad.md#apply)

#### Defined in

[src/data/Either.ts:13](https://github.com/jonlaing/shonad/blob/49f7c8a/src/data/Either.ts#L13)

___

### bind

• `Abstract` **bind**: (`f`: [`Function`](../modules/func.md#function)<`any`, [`Either`](either.Either.md)<`any`, `any`\>\>) => [`Either`](either.Either.md)<`any`, `any`\>

#### Type declaration

▸ (`f`): [`Either`](either.Either.md)<`any`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function`](../modules/func.md#function)<`any`, [`Either`](either.Either.md)<`any`, `any`\>\> |

##### Returns

[`Either`](either.Either.md)<`any`, `any`\>

#### Overrides

[Monad](monad.Monad.md).[bind](monad.Monad.md#bind)

#### Defined in

[src/data/Either.ts:14](https://github.com/jonlaing/shonad/blob/49f7c8a/src/data/Either.ts#L14)

___

### fmap

• `Abstract` **fmap**: <C\>(`f`: (`b`: `any`) => `C`) => [`Either`](either.Either.md)<`A`, `C`\>

#### Type declaration

▸ <`C`\>(`f`): [`Either`](either.Either.md)<`A`, `C`\>

##### Type parameters

| Name |
| :------ |
| `C` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `any`) => `C` |

##### Returns

[`Either`](either.Either.md)<`A`, `C`\>

#### Overrides

[Monad](monad.Monad.md).[fmap](monad.Monad.md#fmap)

#### Defined in

[src/data/Either.ts:12](https://github.com/jonlaing/shonad/blob/49f7c8a/src/data/Either.ts#L12)

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

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/49f7c8a/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A` \| `B`

#### Inherited from

[Monad](monad.Monad.md).[val](monad.Monad.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/49f7c8a/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Monad`](monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[apply](monad.Monad.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/49f7c8a/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](monad.Monad.md)<`any`\>) => [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[bind](monad.Monad.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/49f7c8a/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[fmap](monad.Monad.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/49f7c8a/src/control/Functor.ts#L5)

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

[src/data/Either.ts:8](https://github.com/jonlaing/shonad/blob/49f7c8a/src/data/Either.ts#L8)
