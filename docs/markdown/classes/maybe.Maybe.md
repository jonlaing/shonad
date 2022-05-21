[shonad](../README.md) / [Exports](../modules.md) / [maybe](../modules/maybe.md) / Maybe

# Class: Maybe<A\>

[maybe](../modules/maybe.md).Maybe

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Monad`](monad.Monad.md)<`A`\>

  ↳ **`Maybe`**

  ↳↳ [`Just`](maybe.Just.md)

  ↳↳ [`Nothing`](maybe.Nothing.md)

## Table of contents

### Constructors

- [constructor](maybe.Maybe.md#constructor)

### Properties

- [apply](maybe.Maybe.md#apply)
- [bind](maybe.Maybe.md#bind)
- [fmap](maybe.Maybe.md#fmap)
- [unwrap](maybe.Maybe.md#unwrap)
- [val](maybe.Maybe.md#val)
- [apply](maybe.Maybe.md#apply-1)
- [bind](maybe.Maybe.md#bind-1)
- [fmap](maybe.Maybe.md#fmap-1)

### Methods

- [pure](maybe.Maybe.md#pure)

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

[Monad](monad.Monad.md).[constructor](monad.Monad.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Typeclass.ts#L4)

## Properties

### apply

• `Abstract` **apply**: (`ma`: [`Maybe`](maybe.Maybe.md)<`any`\>) => [`Maybe`](maybe.Maybe.md)<`any`\>

#### Type declaration

▸ (`ma`): [`Maybe`](maybe.Maybe.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Maybe`](maybe.Maybe.md)<`any`\> |

##### Returns

[`Maybe`](maybe.Maybe.md)<`any`\>

#### Overrides

[Monad](monad.Monad.md).[apply](monad.Monad.md#apply)

#### Defined in

[src/data/Maybe.ts:13](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Maybe.ts#L13)

___

### bind

• `Abstract` **bind**: (`f`: [`Function`](../modules/func.md#function)<`any`, [`Maybe`](maybe.Maybe.md)<`any`\>\>) => [`Maybe`](maybe.Maybe.md)<`any`\>

#### Type declaration

▸ (`f`): [`Maybe`](maybe.Maybe.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function`](../modules/func.md#function)<`any`, [`Maybe`](maybe.Maybe.md)<`any`\>\> |

##### Returns

[`Maybe`](maybe.Maybe.md)<`any`\>

#### Overrides

[Monad](monad.Monad.md).[bind](monad.Monad.md#bind)

#### Defined in

[src/data/Maybe.ts:14](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Maybe.ts#L14)

___

### fmap

• `Abstract` **fmap**: <B\>(`f`: (`a`: `A`) => `B`) => [`Maybe`](maybe.Maybe.md)<`B`\>

#### Type declaration

▸ <`B`\>(`f`): [`Maybe`](maybe.Maybe.md)<`B`\>

##### Type parameters

| Name |
| :------ |
| `B` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `B` |

##### Returns

[`Maybe`](maybe.Maybe.md)<`B`\>

#### Overrides

[Monad](monad.Monad.md).[fmap](monad.Monad.md#fmap)

#### Defined in

[src/data/Maybe.ts:12](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Maybe.ts#L12)

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

[Monad](monad.Monad.md).[unwrap](monad.Monad.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A`

#### Inherited from

[Monad](monad.Monad.md).[val](monad.Monad.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Monad`](monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[apply](monad.Monad.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](monad.Monad.md)<`any`\>) => [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[bind](monad.Monad.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Monad](monad.Monad.md).[fmap](monad.Monad.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/eb3a480/src/control/Functor.ts#L5)

## Methods

### pure

▸ `Static` **pure**<`T`\>(`a`): [`Maybe`](maybe.Maybe.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

#### Returns

[`Maybe`](maybe.Maybe.md)<`T`\>

#### Defined in

[src/data/Maybe.ts:8](https://github.com/jonlaing/shonad/blob/eb3a480/src/data/Maybe.ts#L8)
