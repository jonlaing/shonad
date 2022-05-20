[shonad](../README.md) / [Exports](../modules.md) / [maybe](../modules/maybe.md) / Nothing

# Class: Nothing<A\>

[maybe](../modules/maybe.md).Nothing

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Maybe`](maybe.Maybe.md)<`A`\>

  ↳ **`Nothing`**

## Table of contents

### Constructors

- [constructor](maybe.Nothing.md#constructor)

### Properties

- [equals](maybe.Nothing.md#equals)
- [isJust](maybe.Nothing.md#isjust)
- [isNothing](maybe.Nothing.md#isnothing)
- [val](maybe.Nothing.md#val)
- [apply](maybe.Nothing.md#apply)
- [bind](maybe.Nothing.md#bind)
- [fmap](maybe.Nothing.md#fmap)

### Methods

- [apply](maybe.Nothing.md#apply-1)
- [bind](maybe.Nothing.md#bind-1)
- [fmap](maybe.Nothing.md#fmap-1)
- [unwrap](maybe.Nothing.md#unwrap)
- [pure](maybe.Nothing.md#pure)

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

[Maybe](maybe.Maybe.md).[constructor](maybe.Maybe.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/37e0549/src/base/Typeclass.ts#L4)

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

[src/data/Maybe.ts:86](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L86)

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

[src/data/Maybe.ts:77](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L77)

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

[src/data/Maybe.ts:78](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L78)

___

### val

• **val**: `A`

#### Inherited from

[Maybe](maybe.Maybe.md).[val](maybe.Maybe.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/37e0549/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Monad`](monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Maybe](maybe.Maybe.md).[apply](maybe.Maybe.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/37e0549/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](monad.Monad.md)<`any`\>) => [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Maybe](maybe.Maybe.md).[bind](maybe.Maybe.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/37e0549/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Maybe](maybe.Maybe.md).[fmap](maybe.Maybe.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/37e0549/src/control/Functor.ts#L5)

## Methods

### apply

▸ **apply**(`f`): [`Maybe`](maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Maybe`](maybe.Maybe.md)<`any`\> |

#### Returns

[`Maybe`](maybe.Maybe.md)<`any`\>

#### Overrides

Maybe.apply

#### Defined in

[src/data/Maybe.ts:82](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L82)

___

### bind

▸ **bind**(`f`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `any`) => [`Maybe`](maybe.Maybe.md)<`any`\> |

#### Returns

`this`

#### Overrides

Maybe.bind

#### Defined in

[src/data/Maybe.ts:83](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L83)

___

### fmap

▸ **fmap**<`B`\>(`f`): [`Maybe`](maybe.Maybe.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `any` |

#### Returns

[`Maybe`](maybe.Maybe.md)<`B`\>

#### Overrides

Maybe.fmap

#### Defined in

[src/data/Maybe.ts:80](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L80)

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

[src/data/Maybe.ts:85](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L85)

___

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

#### Inherited from

[Maybe](maybe.Maybe.md).[pure](maybe.Maybe.md#pure)

#### Defined in

[src/data/Maybe.ts:8](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L8)
