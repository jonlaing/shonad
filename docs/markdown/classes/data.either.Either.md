[shonad](../README.md) / [Exports](../modules.md) / [data](../modules/data.md) / [either](../modules/data.either.md) / Either

# Class: Either<A, B\>

[data](../modules/data.md).[either](../modules/data.either.md).Either

## Type parameters

| Name |
| :------ |
| `A` |
| `B` |

## Hierarchy

- [`Monad`](control.monad.Monad.md)<`A` \| `B`\>

  ↳ **`Either`**

  ↳↳ [`Left`](data.either.Left.md)

  ↳↳ [`Right`](data.either.Right.md)

## Table of contents

### Constructors

- [constructor](data.either.Either.md#constructor)

### Properties

- [apply](data.either.Either.md#apply)
- [bind](data.either.Either.md#bind)
- [fmap](data.either.Either.md#fmap)
- [unwrap](data.either.Either.md#unwrap)
- [val](data.either.Either.md#val)
- [apply](data.either.Either.md#apply-1)
- [bind](data.either.Either.md#bind-1)
- [fmap](data.either.Either.md#fmap-1)

### Methods

- [pure](data.either.Either.md#pure)

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

[Monad](control.monad.Monad.md).[constructor](control.monad.Monad.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/768c318/src/base/Typeclass.ts#L4)

## Properties

### apply

• `Abstract` **apply**: (`f`: `any`) => [`Monad`](control.monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](control.monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

##### Returns

[`Monad`](control.monad.Monad.md)<`any`\>

#### Inherited from

[Monad](control.monad.Monad.md).[apply](control.monad.Monad.md#apply)

#### Defined in

[src/control/Monad.ts:60](https://github.com/jonlaing/shonad/blob/768c318/src/control/Monad.ts#L60)

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

[src/control/Monad.ts:61](https://github.com/jonlaing/shonad/blob/768c318/src/control/Monad.ts#L61)

___

### fmap

• `Abstract` **fmap**: (`f`: (`a`: `A` \| `B`) => `any`) => [`Monad`](control.monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](control.monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A` \| `B`) => `any` |

##### Returns

[`Monad`](control.monad.Monad.md)<`any`\>

#### Inherited from

[Monad](control.monad.Monad.md).[fmap](control.monad.Monad.md#fmap)

#### Defined in

[src/control/Monad.ts:59](https://github.com/jonlaing/shonad/blob/768c318/src/control/Monad.ts#L59)

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

[Monad](control.monad.Monad.md).[unwrap](control.monad.Monad.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/768c318/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A` \| `B`

#### Inherited from

[Monad](control.monad.Monad.md).[val](control.monad.Monad.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/768c318/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/control.applicative.md#staticapplyfn)<[`Monad`](control.monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](control.monad.Monad.md).[apply](control.monad.Monad.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/768c318/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](control.monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](control.monad.Monad.md)<`any`\>) => [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](control.monad.Monad.md).[bind](control.monad.Monad.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/768c318/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Inherited from

[Monad](control.monad.Monad.md).[fmap](control.monad.Monad.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/768c318/src/control/Functor.ts#L5)

## Methods

### pure

▸ `Static` **pure**(`a`): [`Right`](data.either.Right.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Right`](data.either.Right.md)<`unknown`\>

#### Defined in

[src/data/Either.ts:8](https://github.com/jonlaing/shonad/blob/768c318/src/data/Either.ts#L8)
