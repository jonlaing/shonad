[shonad](../README.md) / [Exports](../modules.md) / [data](../modules/data.md) / [maybe](../modules/data.maybe.md) / Nothing

# Class: Nothing<A\>

[data](../modules/data.md).[maybe](../modules/data.maybe.md).Nothing

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Maybe`](data.maybe.Maybe.md)<`A`\>

  ↳ **`Nothing`**

## Table of contents

### Constructors

- [constructor](data.maybe.Nothing.md#constructor)

### Properties

- [equals](data.maybe.Nothing.md#equals)
- [isJust](data.maybe.Nothing.md#isjust)
- [isNothing](data.maybe.Nothing.md#isnothing)
- [val](data.maybe.Nothing.md#val)
- [apply](data.maybe.Nothing.md#apply)
- [bind](data.maybe.Nothing.md#bind)
- [fmap](data.maybe.Nothing.md#fmap)

### Methods

- [apply](data.maybe.Nothing.md#apply-1)
- [bind](data.maybe.Nothing.md#bind-1)
- [fmap](data.maybe.Nothing.md#fmap-1)
- [unwrap](data.maybe.Nothing.md#unwrap)
- [pure](data.maybe.Nothing.md#pure)

## Constructors

### constructor

• **new Nothing**<`A`\>(`val`)

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

### equals

• **equals**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Maybe.ts:86](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L86)

___

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

[src/data/Maybe.ts:77](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L77)

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

[src/data/Maybe.ts:78](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L78)

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

▸ **apply**(`f`): [`Maybe`](data.maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Maybe`](data.maybe.Maybe.md)<`any`\> |

#### Returns

[`Maybe`](data.maybe.Maybe.md)<`any`\>

#### Overrides

Maybe.apply

#### Defined in

[src/data/Maybe.ts:82](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L82)

___

### bind

▸ **bind**(`f`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `any`) => [`Maybe`](data.maybe.Maybe.md)<`any`\> |

#### Returns

`this`

#### Overrides

Maybe.bind

#### Defined in

[src/data/Maybe.ts:83](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L83)

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
| `f` | (`a`: `A`) => `any` |

#### Returns

[`Maybe`](data.maybe.Maybe.md)<`B`\>

#### Overrides

Maybe.fmap

#### Defined in

[src/data/Maybe.ts:80](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L80)

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

[src/data/Maybe.ts:85](https://github.com/jonlaing/shonad/blob/12f6b40/src/data/Maybe.ts#L85)

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
