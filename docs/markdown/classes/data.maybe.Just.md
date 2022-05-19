[shonad](../README.md) / [Exports](../modules.md) / [data](../modules/data.md) / [maybe](../modules/data.maybe.md) / Just

# Class: Just<A\>

[data](../modules/data.md).[maybe](../modules/data.maybe.md).Just

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Maybe`](data.maybe.Maybe.md)<`A`\>

  ↳ **`Just`**

## Table of contents

### Constructors

- [constructor](data.maybe.Just.md#constructor)

### Properties

- [isJust](data.maybe.Just.md#isjust)
- [isNothing](data.maybe.Just.md#isnothing)
- [val](data.maybe.Just.md#val)
- [apply](data.maybe.Just.md#apply)
- [bind](data.maybe.Just.md#bind)
- [fmap](data.maybe.Just.md#fmap)

### Methods

- [apply](data.maybe.Just.md#apply-1)
- [bind](data.maybe.Just.md#bind-1)
- [equals](data.maybe.Just.md#equals)
- [fmap](data.maybe.Just.md#fmap-1)
- [unwrap](data.maybe.Just.md#unwrap)
- [pure](data.maybe.Just.md#pure)

## Constructors

### constructor

• **new Just**<`A`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `A` |

#### Inherited from

[Maybe](data.maybe.Maybe.md).[constructor](data.maybe.Maybe.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Typeclass.ts#L4)

## Properties

### isJust

• **isJust**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Maybe.ts:59](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L59)

___

### isNothing

• **isNothing**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Maybe.ts:60](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L60)

___

### val

• **val**: `A`

#### Inherited from

[Maybe](data.maybe.Maybe.md).[val](data.maybe.Maybe.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/control.applicative.md#staticapplyfn)<[`Monad`](control.monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Maybe](data.maybe.Maybe.md).[apply](data.maybe.Maybe.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/12f6b40/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](control.monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](control.monad.Monad.md)<`any`\>) => [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Maybe](data.maybe.Maybe.md).[bind](data.maybe.Maybe.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/12f6b40/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Inherited from

[Maybe](data.maybe.Maybe.md).[fmap](data.maybe.Maybe.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/12f6b40/src/control/Functor.ts#L5)

## Methods

### apply

▸ **apply**(`ma`): [`Maybe`](data.maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Maybe`](data.maybe.Maybe.md)<`any`\> |

#### Returns

[`Maybe`](data.maybe.Maybe.md)<`any`\>

#### Overrides

Maybe.apply

#### Defined in

[src/data/Maybe.ts:63](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L63)

___

### bind

▸ **bind**(`f`): [`Maybe`](data.maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `any`) => [`Maybe`](data.maybe.Maybe.md)<`any`\> |

#### Returns

[`Maybe`](data.maybe.Maybe.md)<`any`\>

#### Overrides

Maybe.bind

#### Defined in

[src/data/Maybe.ts:70](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L70)

___

### equals

▸ **equals**(`a`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`boolean`

#### Defined in

[src/data/Maybe.ts:73](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L73)

___

### fmap

▸ **fmap**<`B`\>(`f`): [`Maybe`](data.maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `B` |

#### Returns

[`Maybe`](data.maybe.Maybe.md)<`B`\>

#### Overrides

Maybe.fmap

#### Defined in

[src/data/Maybe.ts:62](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L62)

___

### unwrap

▸ **unwrap**(`fallback`): `A`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

#### Returns

`A`

#### Overrides

Maybe.unwrap

#### Defined in

[src/data/Maybe.ts:71](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L71)

___

### pure

▸ `Static` **pure**(`a`): [`Just`](data.maybe.Just.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Just`](data.maybe.Just.md)<`any`\>

#### Inherited from

[Maybe](data.maybe.Maybe.md).[pure](data.maybe.Maybe.md#pure)

#### Defined in

[src/data/Maybe.ts:8](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L8)
