[shonad](../README.md) / [Exports](../modules.md) / [maybe](../modules/maybe.md) / Just

# Class: Just<A\>

[maybe](../modules/maybe.md).Just

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Maybe`](maybe.Maybe.md)<`A`\>

  ↳ **`Just`**

## Table of contents

### Constructors

- [constructor](maybe.Just.md#constructor)

### Properties

- [isJust](maybe.Just.md#isjust)
- [isNothing](maybe.Just.md#isnothing)
- [val](maybe.Just.md#val)
- [apply](maybe.Just.md#apply)
- [bind](maybe.Just.md#bind)
- [fmap](maybe.Just.md#fmap)

### Methods

- [apply](maybe.Just.md#apply-1)
- [bind](maybe.Just.md#bind-1)
- [equals](maybe.Just.md#equals)
- [fmap](maybe.Just.md#fmap-1)
- [unwrap](maybe.Just.md#unwrap)
- [pure](maybe.Just.md#pure)

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

[Maybe](maybe.Maybe.md).[constructor](maybe.Maybe.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/37e0549/src/base/Typeclass.ts#L4)

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

[src/data/Maybe.ts:59](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L59)

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

[src/data/Maybe.ts:60](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L60)

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

▸ **apply**(`ma`): [`Maybe`](maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Maybe`](maybe.Maybe.md)<`any`\> |

#### Returns

[`Maybe`](maybe.Maybe.md)<`any`\>

#### Overrides

Maybe.apply

#### Defined in

[src/data/Maybe.ts:63](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L63)

___

### bind

▸ **bind**(`f`): [`Maybe`](maybe.Maybe.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `any`) => [`Maybe`](maybe.Maybe.md)<`any`\> |

#### Returns

[`Maybe`](maybe.Maybe.md)<`any`\>

#### Overrides

Maybe.bind

#### Defined in

[src/data/Maybe.ts:70](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L70)

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

[src/data/Maybe.ts:73](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L73)

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
| `f` | (`a`: `A`) => `B` |

#### Returns

[`Maybe`](maybe.Maybe.md)<`B`\>

#### Overrides

Maybe.fmap

#### Defined in

[src/data/Maybe.ts:62](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L62)

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

[src/data/Maybe.ts:71](https://github.com/jonlaing/shonad/blob/37e0549/src/data/Maybe.ts#L71)

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
