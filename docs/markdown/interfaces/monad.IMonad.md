[shonad](../README.md) / [Exports](../modules.md) / [monad](../modules/monad.md) / IMonad

# Interface: IMonad<A\>

[monad](../modules/monad.md).IMonad

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Applicative`](../classes/applicative.Applicative.md)<`A`\>

  ↳ **`IMonad`**

## Implemented by

- [`Monad`](../classes/monad.Monad.md)

## Table of contents

### Properties

- [unwrap](monad.IMonad.md#unwrap)
- [val](monad.IMonad.md#val)

### Methods

- [apply](monad.IMonad.md#apply)
- [bind](monad.IMonad.md#bind)
- [fmap](monad.IMonad.md#fmap)

## Properties

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

[Applicative](../classes/applicative.Applicative.md).[unwrap](../classes/applicative.Applicative.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/001120c/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A`

#### Inherited from

[Applicative](../classes/applicative.Applicative.md).[val](../classes/applicative.Applicative.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/001120c/src/base/Typeclass.ts#L2)

## Methods

### apply

▸ **apply**(`f`): [`IMonad`](monad.IMonad.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

#### Returns

[`IMonad`](monad.IMonad.md)<`any`\>

#### Overrides

Applicative.apply

#### Defined in

[src/control/Monad.ts:70](https://github.com/jonlaing/shonad/blob/001120c/src/control/Monad.ts#L70)

___

### bind

▸ **bind**(`f`): [`IMonad`](monad.IMonad.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function`](../modules/func.md#function)<`any`, [`IMonad`](monad.IMonad.md)<`any`\>\> |

#### Returns

[`IMonad`](monad.IMonad.md)<`any`\>

#### Defined in

[src/control/Monad.ts:71](https://github.com/jonlaing/shonad/blob/001120c/src/control/Monad.ts#L71)

___

### fmap

▸ **fmap**(`f`): [`IMonad`](monad.IMonad.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `any` |

#### Returns

[`IMonad`](monad.IMonad.md)<`any`\>

#### Overrides

Applicative.fmap

#### Defined in

[src/control/Monad.ts:69](https://github.com/jonlaing/shonad/blob/001120c/src/control/Monad.ts#L69)
